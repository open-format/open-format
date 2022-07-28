# Gotchas

## Nested Objects

We don't currently supported nested objects in the JSON Blob. In the example below, the venue address will not be accepted.

```graphql
{
  "factory_id": "16247fb7-1a2c-4899-a581-c46b319ef600",
  "release_type": "ticket",
  "venue_address": {
    "address1": "123 Fake Street",
    "address2": "Bedminster",
    "city": "Bristol",
    "postcode": "BS34GL"
  }
}

```
