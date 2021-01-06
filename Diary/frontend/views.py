from django.shortcuts import render
from django.views.generic.detail import DetailView
from diaryapp.models import Diary

def index(request):
    return render(request, 'frontend/index.html')

class DiaryDetailView(DetailView):
    model = Diary
    template_name = 'frontend/index.html'