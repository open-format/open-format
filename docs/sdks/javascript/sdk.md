<a name="OpenFormatSDK"></a>

## OpenFormatSDK
<p>Creates a new instance of the Open Format SDK</p>

**Kind**: global class  
**Access**: public  

* [OpenFormatSDK](#OpenFormatSDK)
    * [.deploy(nft)](#OpenFormatSDK+deploy) ⇒ <code>ContractReceipt</code>
    * [.getNFT(address)](#OpenFormatSDK+getNFT) ⇒ <code>OpenFormatNFT</code>
    * [.getTokens(params)](#OpenFormatSDK+getTokens) ⇒ <code>TokensResponse</code>

<a name="OpenFormatSDK+deploy"></a>

### openFormatSDK.deploy(nft) ⇒ <code>ContractReceipt</code>
<p>Deploys a version of the Open Format contract</p>

**Kind**: instance method of [<code>OpenFormatSDK</code>](#OpenFormatSDK)  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>Object</code> | <p>the nft to deploy</p> |
| nft.maxSupply | <code>number</code> | <p>the max supply of the nft</p> |
| nft.mintingPrice | <code>number</code> | <p>the amount to mint the nft</p> |
| nft.name | <code>string</code> | <p>name of the nft</p> |
| nft.symbol | <code>string</code> | <p>symbol for the nft</p> |
| nft.url | <code>string</code> | <p>storage URL</p> |

<a name="OpenFormatSDK+getNFT"></a>

### openFormatSDK.getNFT(address) ⇒ <code>OpenFormatNFT</code>
<p>Returns a new instance of an OpenFormatNFT</p>

**Kind**: instance method of [<code>OpenFormatSDK</code>](#OpenFormatSDK)  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | <p>Address of a deployed Open Format contract</p> |

<a name="OpenFormatSDK+getTokens"></a>

### openFormatSDK.getTokens(params) ⇒ <code>TokensResponse</code>
<p>Gets tokens for a given factory</p>

**Kind**: instance method of [<code>OpenFormatSDK</code>](#OpenFormatSDK)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> |  |
| params.factoryId | <code>string</code> | <p>id of the factory</p> |

