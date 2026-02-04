from django.shortcuts import render
from .models import JobApplication
from .serializers import JobApplicationSerializer
from rest_framework import generics, permissions
# Create your views here.

class JobApplicationListCreateView(generics.ListCreateAPIView):
    serializer_class = JobApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return JobApplication.objects.filter(user=self.request.user)
    
    def perform_create(self, serilaizer):
        serilaizer.save(user=self.request.user)
        
class JobApplicationDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = JobApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return JobApplication.objects.filter(user=self.request.user)