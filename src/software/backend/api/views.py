from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import User
from .serializers import UserSerializer


class UserList(generics.ListAPIView):
    queryset = User.objects.filter(is_superuser=False)
    serializer_class = UserSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['name', 'regno']
    search_fields = ["name", "regno", "email"]
