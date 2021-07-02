from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views


urlpatterns = [
    path('auth/signup/', include('dj_rest_auth.registration.urls'), name='signup'),
    path('auth/login/', jwt_views.TokenObtainPairView.as_view(), name='login'),
    path('auth/refresh/', jwt_views.TokenRefreshView.as_view(), name='refresh')
]
