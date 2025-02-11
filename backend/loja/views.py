from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Item
from .serializers import ItemSerializer

class ItemListView(APIView):
    def get(self, request):
        itens = Item.objects.all()
        serializer = ItemSerializer(itens, many=True)
        return Response(serializer.data)

class ItemCreateView(APIView):
    def post(self, request):
        serializer = ItemSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
