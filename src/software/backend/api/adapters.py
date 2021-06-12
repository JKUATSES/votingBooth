from allauth.account.adapter import DefaultAccountAdapter
from allauth.account.utils import user_field


class UserAccountAdapter(DefaultAccountAdapter):

    def clean_regno(self, regno):
        regno = regno or ''
        return regno.lower()

    def save_user(self, request, user, form, commit=True):
        user = super().save_user(request, user, form, False)
        user_field(user, 'regno', request.data.get('regno', '').lower())
        user_field(user, 'name', request.data.get('name', ''))
        user_field(user, 'mobileno', request.data.get('mobileno', ''))
        user.save()
        return user
