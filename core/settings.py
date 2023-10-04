"""
Django settings for core project.

Generated by 'django-admin startproject' using Django 4.2.4.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""
from datetime import timedelta
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-pw6#5#y*nk0ps^jw!++^y9#9azwa^&-stk6os24ve6et(x53u&'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['localhost', '127.0.0.1']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework_simplejwt',
    'rest_framework_swagger',
    'django_filters',
    'drf_yasg',
    'corsheaders',
    'django_s3_storage',
    'users',
    'charger'
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

CORS_ALLOW_ALL_ORIGINS = True
# CORS_ORIGIN_ALLOW_ALL = True

# For production (replace with your React app's URL)

# CORS_ALLOWED_ORIGINS = [
#     "http://localhost:3000",  # If your React app runs locally on port 3000
# ]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'

REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend'],
}

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'ROTATE_REFRESH_TOKENS': True,
    'ALGORITHM': 'HS256',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,
    'AUTH_HEADER_TYPES': ('Bearer',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
    'TOKEN_BACKEND': 'rest_framework_simplejwt.token_blacklist.backends.BlacklistBackend',
    'BLACKLIST_TOKEN_CHECKS': [
        'rest_framework_simplejwt.token_blacklist.check_blacklisted_token',
    ],
}

AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
]
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'evcharger',   # Name of your database
        # Your MySQL username (given as 'user admin' in your description)
        'USER': 'admin',
        # Your MySQL password (given as 'password admin' in your description)
        'PASSWORD': 'admin',
        # Your MySQL host. If your database is on the same machine, leave as 'localhost'
        'HOST': 'localhost',
        'PORT': '3306',   # Default MySQL port
    }
}
SWAGGER_SETTINGS = {
    'SECURITY_DEFINITIONS': {
        'api_key': {
            'type': 'apiKey',
            'in': 'header',
            'name': 'Authorization'
        }
    },
}


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = "users.UserProfile"

# The AWS region to connect to.
AWS_REGION = "us-east-1"

# The AWS access key to use.
AWS_ACCESS_KEY_ID = "ASIA5BJCD236LVCVPUVK"

# The AWS secret access key to use.
AWS_SECRET_ACCESS_KEY = "FBm6D41RlqV0jVjqC5zHJAIcY/f8uPbIiIV3xijc"

# The optional AWS session token to use.
AWS_SESSION_TOKEN = "FwoGZXIvYXdzEEEaDHF3HwcU2J3gv/za5CLLAYOnrcB7BABSWbhbwaJCSOYuljw17EA/sVexmftVXIyE3O3GaiSMTGunhJXYgo7X9/GlBF5cmrhONHTtKAkK2VJiegYTcxXAByURSeInsHnzOWyij+Gd5AfX0ABKbJVhuBVES2yLg3VjZnxAkN4THeUmcU0Xfz/fV2XoTFVkA+CF8oPBH94dkWOG8VsQXd4uRbTUjYl4x/IwT7XqAxB/fhyXc5QQNYrmRBTfKsOQFwYMtyURIsl8RN/uvz+UAQgrSRf0kTzxqXXiW/yFKIK/8qgGMi0BMMb9LWzAiz7NGDlPQOvm1sqjOFyWmnkuseu/uDQCRREH8btPQdKoDyQslUc="

# The name of the bucket to store files in.
AWS_S3_BUCKET_NAME = "evcharger-bucket"

# How to construct S3 URLs ("auto", "path", "virtual").
AWS_S3_ADDRESSING_STYLE = "auto"

# The full URL to the S3 endpoint. Leave blank to use the default region URL.
AWS_S3_ENDPOINT_URL = ""

# A prefix to be applied to every stored file. This will be joined to every filename using the "/" separator.
AWS_S3_KEY_PREFIX = ""

# Whether to enable authentication for stored files. If True, then generated URLs will include an authentication
# token valid for `AWS_S3_MAX_AGE_SECONDS`. If False, then generated URLs will not include an authentication token,
# and their permissions will be set to "public-read".
AWS_S3_BUCKET_AUTH = True

# How long generated URLs are valid for. This affects the expiry of authentication tokens if `AWS_S3_BUCKET_AUTH`
# is True. It also affects the "Cache-Control" header of the files.
# Important: Changing this setting will not affect existing files.
AWS_S3_MAX_AGE_SECONDS = 60 * 60  # 1 hours.

# If True, then files will be stored with reduced redundancy. Check the S3 documentation and make sure you
# understand the consequences before enabling.
# Important: Changing this setting will not affect existing files.
AWS_S3_REDUCED_REDUNDANCY = False

# If True, then text files will be stored using gzip content encoding. Files will only be gzipped if their
# compressed size is smaller than their uncompressed size.
# Important: Changing this setting will not affect existing files.
AWS_S3_GZIP = True

# The signature version to use for S3 requests.
AWS_S3_SIGNATURE_VERSION = None

# If True, then files with the same name will overwrite each other. By default it's set to False to have
# extra characters appended.
AWS_S3_FILE_OVERWRITE = False

# If True, use default behaviour for boto3 of using threads when doing S3 operations. If gevent or similar
# is used it must be disabled
AWS_S3_USE_THREADS = True

# Max pool of connections for massive S3 interactions
AWS_S3_MAX_POOL_CONNECTIONS = 10

# Time to raise timeout when submitting a new file
AWS_S3_CONNECT_TIMEOUT = 60
