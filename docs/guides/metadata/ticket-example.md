# NFT Ticket Metadata Example

```json
{
  "factory_id": "16247fb7-1a2c-4899-a581-c46b319ef600",
  "release_type": "ticket",
  "name": "Hotdog eating contest",
  "description": "How many dogs can you eat? Come join in on the fun at The Dog House!",
  "venue": "The Dog House",
  "address": "123 Cactus Canyon",
  "start": "1652276545",
  "end": "1652362945"
}
```

## Subgraph

```json
{
  "id": "0x6813c7e729841546a39d38897b4c75f410b01f1d",
  "factory_id": "16247fb7-1a2c-4899-a581-c46b319ef600",
  "release_type": "ticket",
  "properties": [
    {
      "key": "name",
      "value": "Hotdog eating contest"
    },
    {
      "key": "description",
      "value": "How many dogs can you eat? Come join in on the fun at The Dog House!"
    },
    {
      "key": "venue",
      "value": "The Dog House"
    },
    {
      "key": "date",
      "value": "2022-04-29"
    },
    {
      "key": "address",
      "value": "123 Cactus Canyon"
    },
    {
      "key": "start",
      "value": "21:38"
    },
    {
      "key": "end",
      "value": "23:38"
    }
  ]
}
```

You will see that the subgraph has converted the key/value pairs in the JSON blob into a list of properties. Then if you want to search for all events where the venue is "The Dog House", you can perform this query:

```graphql
{
  properties(where: {value_contains: "The Dog House"}) {
    tokens {
      id
      factory_id
    }
  }
}
```
