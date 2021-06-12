from django.urls import path, include
from .views import UserList
from rest_framework_simplejwt import views as jwt_views


urlpatterns = [
    path('auth/signup/', include('dj_rest_auth.registration.urls')),
]
