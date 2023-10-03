from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Charger
from .serializers import ChargerSerializer


class ChargerViewSet(viewsets.ModelViewSet):
    queryset = Charger.objects.all()
    serializer_class = ChargerSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = ChargerSerializer(data=request.data)
        if serializer.is_valid():
            charger = serializer.save()
            return Response({'charger': ChargerSerializer(charger).data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
