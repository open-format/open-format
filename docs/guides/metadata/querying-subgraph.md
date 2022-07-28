# Querying the Subgraph

Each NFT is represented as a `Token` entity in the subgraph.

## Querying all tokens

```graphql
{
  tokens {
    id
    factory_id
    release_type
  }
}
```

## Querying a single token

```graphql
{
  token(id: "0x04acaf7c247f0165413cfae4065fefe3a0969d42") {
    id
    factory_id
    release_type
  }
}
```

## Filtering

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

## Sorting

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

## Pagination

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
