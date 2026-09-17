from django.shortcuts import render
from rest_framework.views import APIView
from django.shortcuts import redirect
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
import os
import secrets
import requests
from urllib.parse import urlencode
from .models import User

# Create your views here.
class GithubLoginView(APIView):

    GITHUB_CLIENT_ID = os.getenv("GITHUB_CLIENT_ID")
    GITHUB_REDIRECT_URI = os.getenv('GITHUB_REDIRECT_URI')
    GITHUB_SCOPE = 'read:user user:email'

    def get(self, request):
        secure_state = secrets.token_urlsafe(32) 
        request.session['oauth_state'] = secure_state

        params = {

            'client_id' : self.GITHUB_CLIENT_ID,
            'redirect_uri' : self.GITHUB_REDIRECT_URI,
            'state' : secure_state,
            'scope' : self.GITHUB_SCOPE


        }

        auth_url = f'https://github.com/login/oauth/authorize?{urlencode(params)}'

        response = redirect(auth_url)
        return response

class GithubCallbackView(APIView):

    def get(self, request):

        code = request.GET.get("code")
        state = request.GET.get("state")
        oauth_state = request.session.get("oauth_state")

        if state == oauth_state :
            data = {

                "client_id": os.getenv("GITHUB_CLIENT_ID") ,
                "client_secret": os.getenv("GITHUB_CLIENT_SECRET"),
                "code": code,
                "redirect_uri": os.getenv("GITHUB_REDIRECT_URI")
            }

            url = 'https://github.com/login/oauth/access_token'

            headers = {
                "Accept": "application/json"
            }

            token_response =requests.post(url, data=data, headers=headers)
        
            token_data = token_response.json()
            access_token = token_data['access_token']

            headers = {
                "Authorization": f'Bearer {access_token}'
            }

            url = 'https://api.github.com/user'
            user_response = requests.get(url, headers=headers)
            github_user = user_response.json()
            github_id = str(github_user['id'])
            github_user_name = github_user['login']
            github_user_mail = github_user['email']

            user, _ = User.objects.get_or_create(github_id = github_id, 
                                                 defaults=
                                                 {
                                                    'username' : github_user_name,
                                                    'email' : github_user_mail
                                                })

            refresh = RefreshToken.for_user(user)
            access = str(refresh.access_token)
            refresh = str(refresh)

            front_end = os.getenv('FRONTEND_URL')
            response = redirect(f'{front_end}/#access={access}')
            response.set_cookie('refresh_token', refresh, httponly=True, secure=False, samesite='Lax')
            return response

        



            

        else:
            return Response({"error": "Invalid OAuth state"}, status=400)
