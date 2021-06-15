from django.contrib import admin
from django.contrib.admin import ModelAdmin

from .models import User


class UserAdmin(ModelAdmin):
    list_display = ('regno', 'email', 'name', 'mobileno')
    search_fields = ('regno', 'email', 'name', 'mobileno')
    ordering = ('regno',)
    readonly_fields = ('email', 'password')


admin.site.register(User, UserAdmin)
