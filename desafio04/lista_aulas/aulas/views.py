from django.shortcuts import render
from django.http import HttpResponse
from .models import Aulas
# Create your views here.
def index(request):
  aulas = Aulas.objects.all()
  # print(aulas[0].)
  return HttpResponse("<br>".join(list(aulas.values_list('nome', flat=True))))