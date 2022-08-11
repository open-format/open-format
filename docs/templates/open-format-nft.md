# Open Format NFT

Open Format NFT is a web application that showcases the tooling we have designed in order for you to build your own platforms without having to worry about the complexity that can come with web3. It can be used as a starting template, a reference or an immediate implementation to get you up and running quickly.

* [View Demo](https://open-format-nft.vercel.app/)
* [View Code](https://github.com/simpleweb/open-format-nft)

## Quickstart

1. Make sure that you have node version 16 or later installed on your machine.
2. Clone down the repo
   * ```bash
     git clone git@github.com:simpleweb/open-format-nft.git
     ```
3. Install all of the relevant dependencies
   * ```bash
     npm install or yarn install
     ```
4. Set up your environment variables
   * ```bash
     cp .env.local.example .env.local
     ```
5. Run the app
   * ```bash
     npm run dev or yarn run dev
     ```

#### You should see the following in your browser

![](<../.gitbook/assets/Screenshot 2022-08-08 at 14.29.57.png>)

## Translations

* The easiest way to modify the copy is through the [common.json](https://github.com/simpleweb/open-format-nft/blob/main/locales/en/common.json) file found in the locales directory. This file you modify all of the text including links throughout the template so that you can quickly and easily make sound feel like you.

### common.json

```json
{
  "app": {
    "head": {
      "title": "Open Format NFT"
    }
  },
  "header": {
    "title": "Open Format NFT",
    "navigation": {
      "itemOne": {
        "name": "Explore",
        "href": "/explore"
      },
      "itemTwo": {
        "name": "Create",
        "href": "/create"
      },
      "searchPlaceholder": "Search"
    }
  },
  ...{},
}
```

## Environment variables

| Variable                                   | Description                                                                                                                                                                                                     |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_NFT_STORAGE_TOKEN`            | This starter uses nft.storage to interact with IPFS. You can use any IPFS storage provider. [Get an API Key](https://nft.storage/docs/#get-an-api-token)                                                        |
| NEXT\_PUBLIC\_IPFS                         | https://ipfs.infura.io/ipfs/                                                                                                                                                                                    |
| NEXT\_PUBLIC\_FACTORY\_ID                  | This is used for filtering the subgraph to only show tokens created in specific factory frontend. This can be any string value, but for uniqueness, we recommend using [UUIDv4](https://www.uuidgenerator.net/) |
| NEXT\_PUBLIC\_POLYGON\_SCAN                | Link to the network where you can view your contracts.                                                                                                                                                          |
| NEXT\_PUBLIC\_EXAMPLE\_NFT\_LINK           | A link to the original creator of our example NFT.                                                                                                                                                              |
| NEXT\_PUBLIC\_EXAMPLE\_NFT\_TOKEN\_ADDRESS | This is the example token address we have created for you to quickly interact with. Feel free to replace this with your own once up and running.                                                                |
| NEXT\_PUBLIC\_NETWORK                      | mumbai                                                                                                                                                                                                          |

## Deploy to Vercel

* Deployments made easier through vercel's one click deploy button.
* You will need to have the environment variables and a Vercel account set up as pre-requisites.
* To deploy an instance of our template simply click here [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/simpleweb/open-format-nft.git\&env=NEXT\_PUBLIC\_IPFS,NEXT\_PUBLIC\_FACTORY\_ID,NEXT\_PUBLIC\_NFT\_STORAGE\_TOKEN,NEXT\_PUBLIC\_CHAIN\_ID,NEXT\_PUBLIC\_POLYGON\_SCAN,NEXT\_PUBLIC\_EXAMPLE\_NFT\_LINK,NEXT\_PUBLIC\_EXAMPLE\_NFT\_TOKEN\_ADDRESS,NEXT\_PUBLIC\_NETWORK)

