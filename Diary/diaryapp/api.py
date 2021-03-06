from diaryapp.models import Diary
from rest_framework import viewsets, permissions
from .serializers import DiarySerializer

class DiaryList(viewsets.ModelViewSet):
    # queryset = Diary.objects.all()
    permission_classes=[
        permissions.IsAuthenticated
    ]
    serializer_class = DiarySerializer

    def get_queryset(self):
        return self.request.user.diaries.all()

    def perform_create(self,serializer):
        serializer.save(owner=self.request.user)