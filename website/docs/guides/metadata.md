# Metadata

The structure of the metadata is important to ensure cross platform compatibility. It's good practice to follow [Metadata Standards](https://docs.opensea.io/docs/metadata-standards).

## NFT Ticket Metadata Example

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

You will see that the [subgraph](/glossary#subgraph) has converted the key/value pairs in the JSON blob into a list of properties. Then if you want to search for all events where the venue is "The Dog House", you can perform this query:

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

## Release Types

The release types help developers when filtering and sorting the [subgraph](/glossary#subgraph). We highly recommend you choose one of the release types below. If you would like us to add a release type to this list, please let us know in [Discord](https://discord.com/invite/8WV52tVqbZ).


* `video`
* `audio`
* `ticket`
* `image`


## Factory ID


A factory ID is a unique identifier that's used for filtering the [subgraph](/glossary#subgraph) to only show NFTs created in specific factory frontend. This can be any string value, but for uniqueness, we recommend using [UUIDv4](https://www.uuidgenerator.net/). Simply add a key/value pair to your JSON blob in the metadata:

```tsx
{
  "factory_id": "16247fb7-1a2c-4899-a581-c46b319ef600",
  ...metadata
}
```

Our [subgraph](/glossary#subgraph) will look for this `factory_id` and store it against the created `Token` entity.

## Formatting

### Date & Times

We recommend any dates and times are formatted as a unix timestamp.

```tsx
{
  "start": "1652276545", // start date/time of event
  "end": "1652362945" // end date/time of event
   ...metadata
}
```

## Querying the Subgraph

Each NFT is represented as a `Token` entity in the [subgraph](/glossary#subgraph).

### Querying all tokens

```graphql
{
  tokens {
    id
    factory_id
    release_type
  }
}
```

### Querying a single token

```graphql
{
  token(id: "0x04acaf7c247f0165413cfae4065fefe3a0969d42") {
    id
    factory_id
    release_type
  }
}
```

### Filtering

You can use the `where` parameter in your queries to filter for different properties. You can filter on multiple values within the `where` parameter.

```graphql
{
  tokens(where: {release_type: "audio"}) {
    id
    factory_id
    release_type
  }
}
```

### Sorting

When querying a collection, the `orderBy` parameter may be used to sort by a specific attribute. Additionally, the `orderDirection` can be used to specify the sort direction, `asc` for ascending or `desc` for descending.

```graphql
{
  tokens(orderBy: createdAt, orderDirection: desc) {
    id
    factory_id
    release_type
  }
}
```

### Pagination

When querying a collection, the `first` parameter can be used to paginate from the beginning of the collection. It is worth noting that the default sort order is by ID in ascending alphanumeric order, not by creation time.

Further, the `skip` parameter can be used to skip entities and paginate. e.g. `first:100` shows the first 100 entities and `first:100`, `skip:100` shows the next 100 entities.

Queries should avoid using very large `skip` values since they generally perform poorly. For retrieving a large number of items, it is much better to page through entities based on an attribute as shown in the last example.

```graphql
{
  tokens(first: 10, skip: 10) {
    id
    factory_id
    release_type
  }
}
```

## Gotchas

### Nested Objects

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
