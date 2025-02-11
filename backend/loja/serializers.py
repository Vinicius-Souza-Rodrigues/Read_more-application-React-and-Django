from rest_framework import serializers
from .models import Item  # Importe o modelo que deseja serializar

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item  # Modelo que será serializado
        fields = '__all__'