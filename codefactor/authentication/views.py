from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.parsers import MultiPartParser, FormParser

from .serializers import TokenPairSerializers, CustomUserSerializer
from .models import CustomUser


class ObtainTokenPairWithUserView(TokenObtainPairView):

    serializer_class = TokenPairSerializers


class CustomUserCreate(APIView):
    permission_classes = (permissions.AllowAny, )
    authentication_classes = ()
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        user = CustomUser.objects.all()
        serializer = CustomUserSerializer(user, many=True)
        return Response(serializer.data)

    def post(self, request, format='json'):
        import pdb
        pdb.set_trace()
        serializer = CustomUserSerializer(
            data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
