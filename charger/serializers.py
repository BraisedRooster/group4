from rest_framework import serializers
from .models import Charger, ChargerType
from django.core.exceptions import ObjectDoesNotExist
from users.models import Address
from users.serializers import AddressSerializer, UserSerializer


class ChargerTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChargerType
        fields = '__all__'


class ChargerSerializer(serializers.ModelSerializer):
    charger_type = ChargerTypeSerializer()
    address = AddressSerializer()
    user = UserSerializer()

    class Meta:
        model = Charger
        fields = '__all__'

    def create(self, validated_data):
        renter = validated_data.pop('user')
        charger_type = validated_data.pop('charge_type')
        address = validated_data.pop('address')
        try:
            address = Address.objects.get(id=address.get('id'))
        except ObjectDoesNotExist:
            address = Address.objects.create(**address)
        else:
            validated_data['address'] = address
        charger_type = ChargerType.objects.create(**charger_type)
        charger = Charger.objects.create(
            address=address, renter=renter, charger_type=charger_type)
        charger.save()
        return charger
