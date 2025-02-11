from django.db import models

class Item(models.Model):
    STATUS_CHOICES = [
        ('em_andamento', 'Em andamento'),
        ('dropado', 'Dropado'),
        ('finalizado', 'Finalizado')
    ]

    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=30, unique=True)
    detalhes = models.CharField(max_length=20, choices=STATUS_CHOICES, default='em_andamento')
    nota = models.IntegerField(default=0)
    cap = models.IntegerField(default=0)
    descricao = models.TextField()
