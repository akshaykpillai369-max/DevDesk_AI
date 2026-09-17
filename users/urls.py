from django.urls import path
from .views import GithubLoginView, GithubCallbackView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('github/login/', GithubLoginView.as_view(), name = 'login'),
    path("github/callback/", GithubCallbackView.as_view(), name='callback'),
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh_token')
]