from django.urls import path
from .views import ProjectListCreateView, ProjectDetailView


urlpatterns = [
    path('projects/', ProjectListCreateView.as_view(), name='projects'),
    path('projects/<slug:slug>', ProjectDetailView.as_view(), name='product-detail')
]