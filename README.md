# Open Format

A monorepo (powered by [Turborepo](https://turborepo.org/)) to host all the Open Format SDKs.

## SDKs

- `@simpleweb/open-format` - [Open Format JavaScript SDK](/sdks/open-format/)
- `@simpleweb/open-format-react` - [React wrapper of the JavaScript SDK](/sdks/react/)

## Examples

### React + Next.js

From [examples/react-next](examples/react-next/) you can `yarn run start` to run the Next.js app which utiltises `@simpleweb/open-format-react`.

## Installation

From the root you can install all of the SDK's dependencies.

```shell
yarn install
```

## Development

As different SDKs depend on each other, all of them must be built and re-built at the same time.

```shell
yarn run start
```

The test suite for each SDK can also be all together.

```shell
yarn run test
```

All SDKs can also be built.

```shell
yarn run build
```

## Building and publishing

@TODO write building and publishing docs on first release
