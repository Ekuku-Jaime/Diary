from django.urls import path
from .views import index, DiaryDetailView

urlpatterns = [
    path('', index),
    path('edit/<int:pk', DiaryDetailView.as_view())
]