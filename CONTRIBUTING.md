## Getting setup

Open Format uses a monorepo structure using [Yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) and [Turborepo](https://turborepo.org/). To get setup you'll need,

- [Node.js](https://nodejs.org/en/),
- and [Yarn Classic](https://classic.yarnpkg.com/) to get started.

First clone down the repository...

```shell
git clone git@github.com:simpleweb/open-format.git
```

and then install dependencies from the root directory. This will install dependencies for _all_ packages.

```
yarn
```

## Building

You can build all packges with Turborepo by running...

```shell
yarn run build
```

To rebuild packages on every change, run...

```shell
yarn run start
```

## Testing

You can run tests across all packages by running...

```shell
yarn run test
```

## Making a contribution

Whether you are adding a feature or fixing a bug, here's how you can go about it.

Create a new branch off of `main` with a descriptive name.

```shell
git branch feature/name
```

Do what you need to do code wise and then add a new `changeset` (we use [Changesets](https://github.com/changesets/changesets) to help version multiple packages consistently).

```shell
yarn changegset
```

Once you've completed adding your `changeset`, create a new pull request.

```shell
gh pr create
```

Afer you've followed all the checks in the pull request it'll be tested and merged in.

## Releasing

After new features and fixes have been merged in with their `changset` we can now publish new versions.

From the `main` branch create a new `release` branch.

```shell
git branch release
```

Now use Changests to version any changed packages and update their respective changelog and package version.

```shell
yarn changeset version
```

While not crucial, you may want to amend the branch name based on the version that Changeset has calculated.

```shell
git branch -m v1.0.10
```

Create a new pull request with the package(s) having been bumped. Changesets will have created these commits for you.

```shell
gh pr create
```

Once this pull request is approved and merged in, we can now release things!

On Github, create a new release for each package that has been bumped.

- [Create a new release](https://github.com/simpleweb/open-format/releases/new).
- Name the release and the tag after the package and version, e.g. "@simpleweb/open-format@0.1.2".
- Pull the release notes from the package's respective `CHANGELOG.md`.
- If releasing multiple packages, repeat this exact process.

Now a release has been created it can be pulished to NPM.

Checkout the tag you've just created.

```shell
git checkout @simpleweb/open-format@0.1.0
```

Move into the directory of the package you want to publish and use NPM to release it.

```shell
cd packages/open-format
npm publish
```
