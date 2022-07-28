# Factory ID


A factory ID is a unique identifier that's used for filtering the subgraph to only show NFTs created in specific factory frontend. This can be any string value, but for uniqueness, we recommend using [UUIDv4](https://www.uuidgenerator.net/). Simply add a key/value pair to your JSON blob in the metadata:

```tsx
{
  "factory_id": "16247fb7-1a2c-4899-a581-c46b319ef600",
  ...metadata
}
```

Our subgraph will look for this `factory_id` and store it against the created `Token` entity.
