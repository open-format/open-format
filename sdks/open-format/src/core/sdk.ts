import * as subgraph from './subgraph';
import * as contract from './contract';

/**
 * Creates a new instance of the Open Format SDK
 * @public
 */
export class OpenFormatSDK {
  rawRequest = subgraph.rawRequest;
  getSaleDataForToken = subgraph.getSaleDataForToken;
  deploy = contract.deploy;
}
