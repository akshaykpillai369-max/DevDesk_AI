from django.utils.text import slugify
from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):

    slug = serializers.SlugField(required=False)

    def create(self, validated_data):
        if not validated_data.get('slug'):
            validated_data['slug'] = slugify(validated_data['name'])

        return Project.objects.create(**validated_data)

    class Meta:
        model = Project
        fields = ['id', 'name', 'description', 'created_at', 'slug']