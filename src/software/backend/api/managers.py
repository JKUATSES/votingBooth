from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import ugettext_lazy as _


class UserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """

    @classmethod
    def normalize_regno(cls, regno):
        regno = regno or ''
        return regno.lower()

    def create_user(self, regno, email, password, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not regno:
            raise ValueError(_('The Registration number must be set'))
        if not email:
            raise ValueError(_('The Email must be set'))
        regno = self.normalize_regno(regno)
        email = self.normalize_email(email)
        user = self.model(regno=regno, email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, regno, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(regno, email, password, **extra_fields)
