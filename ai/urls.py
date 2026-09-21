from django.urls import path
from .views import AIResponseView, CodeExplainerView

urlpatterns = [
    path('chat/', AIResponseView.as_view(), name='chat'),
    path('explain/', CodeExplainerView.as_view(), name='explainer')



]