import re

from rest_framework import serializers
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from allauth.utils import email_address_exists

from django.utils.translation import ugettext_lazy as _

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'email', 'regno', 'mobileno']


class UserRegisterSerializer(serializers.Serializer):

    regno = serializers.CharField(
        max_length=20,
        min_length=16,
        required=True,
    )
    email = serializers.EmailField(required=True)
    mobileno = serializers.CharField(max_length=13, min_length=13)
    name = serializers.CharField()
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    def validate_regno(self, regno):
        regno = get_adapter().clean_regno(regno)
        if regno and self.regno_exists(regno):
            raise serializers.ValidationError(
                _('Registration number already exists')
            )
        regno = str(regno).strip().lower()
        if not re.match(r"^[a-zA-Z]{3}\d{3}-\d{4}/20[1-2]\d$", regno):
            raise serializers.ValidationError(
                _('Registration number is invalid')
            )
        return regno

    def regno_exists(self, regno):
        return User.objects.filter(regno__exact=regno.lower()).exists()

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if email and email_address_exists(email):
            raise serializers.ValidationError(
                _('A user is already registered with this e-mail address.'),
            )
        return email

    def validate_password1(self, password):
        return get_adapter().clean_password(password)

    def validate(self, data):
        if data['password1'] != data['password2']:
            raise serializers.ValidationError(_("The two password fields didn't match."))
        return data

    def custom_signup(self, request, user):
        pass

    def get_cleaned_data(self):
        return {
            'regno': self.validated_data.get('regno', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', ''),
            'name': self.validated_data.get('name', ''),
            'mobileno': self.validated_data.get('mobileno', ''),
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        self.custom_signup(request, user)
        setup_user_email(request, user, [])
        return user
