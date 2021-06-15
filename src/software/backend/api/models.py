from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _

from .managers import UserManager


class User(AbstractUser):
    email = models.EmailField(_('Email address'), unique=True)
    regno = models.CharField(_('Registration number'), max_length=20, unique=True)
    mobileno = models.CharField(_('Phone number'), null=True, max_length=30)
    name = models.CharField(_('Full name'), max_length=100, blank=True)

    # remove unwanted default fields
    username = None
    first_name = None
    last_name = None

    USERNAME_FIELD = 'regno'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()
