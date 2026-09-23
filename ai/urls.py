from django.urls import path
from .views import AIResponseView, CodeExplainerView, CodeDebuggerView, CodeImproverView

urlpatterns = [
    path('chat/', AIResponseView.as_view(), name='chat'),
    path('explain/', CodeExplainerView.as_view(), name='explainer'),
    path('debugger/', CodeDebuggerView.as_view(), name='debugger'),
    path('improver/', CodeImproverView.as_view(), name='improver'),



]