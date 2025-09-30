"""Tests for configuration endpoints."""

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from .version import __version__


class VersionEndpointTests(APITestCase):
    """Test cases for the version endpoint."""

    def test_get_version(self):
        """Test that the version endpoint returns the correct version number."""
        url = reverse("version")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["version"], __version__)