from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .models import Project
from .serializers import ProjectSerializer


class ProjectListCreateView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        projects = Project.objects.filter(owner=request.user)
        serializer = ProjectSerializer(projects, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = ProjectSerializer(data=request.data)

        if serializer.is_valid():
            project = serializer.save(owner=request.user)

            return Response(
                {
                    'message': 'Project added successfully',
                    'project': ProjectSerializer(project).data
                },
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

class ProjectDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, slug):
        try:
            project = Project.objects.get(
                slug=slug,
                owner=request.user
            )
        except Project.DoesNotExist:
            return Response(
                {'error': 'Project not found'},
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = ProjectSerializer(project)

        return Response(serializer.data)

    def delete(self, request, slug):
        try:
            project = Project.objects.get(
                slug=slug,
                owner=request.user
            )
        except Project.DoesNotExist:
            return Response(
                {'error': 'Project not found'},
                status=status.HTTP_404_NOT_FOUND
            )

        project.delete()

        return Response(
            {'message': 'Project deleted successfully'},
            status=status.HTTP_204_NO_CONTENT
        )