from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .services import generate_ai_response, generate_code_explanation
from rest_framework.response import Response

# Create your views here.
class AIResponseView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        message = request.data.get('message')

        if message:

            response = generate_ai_response(message)

            return Response({'response' : response})

        return Response({'error' : 'No message found'})


class CodeExplainerView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        code = request.data.get('code')

        if code:

            response = generate_code_explanation(code)

            return Response({'response' : response})

        return Response({'error' : 'No code found'})