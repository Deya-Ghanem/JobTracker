from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class JobApplication(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='jobs'
    )

    company_name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    
    
    STATUS_CHOICES = [
        ("applied",'Applied'),
        ('interview', 'Interview'),
        ('offer', 'Offer'),
        ('rejected', 'Rejected'),
    ]
    
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='applied'
    )
    notes = models.TextField(blank=True)
    applied_date = models.DateField(null = True, blank = True)
    notes = models.TextField(blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return f"{self.company_name} - {self.role}"