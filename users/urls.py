from django.urls import path
from .views import GithubLoginView, GithubCallbackView, CurrentUserView
from .views import CookieTokenRefreshView


urlpatterns = [
    path('github/login/', GithubLoginView.as_view(), name = 'login'),
    path("github/callback/", GithubCallbackView.as_view(), name='callback'),
    path('token/refresh/', CookieTokenRefreshView.as_view(), name='refresh_token'),
    path('me/', CurrentUserView.as_view(), name='current_user')
]