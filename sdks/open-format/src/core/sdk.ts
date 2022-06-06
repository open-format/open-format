import subgraph from './subgraph';

/**
 * Creates a new instance of the Open Format SDK
 * @public
 */
export class OpenFormatSDK {
  /**
   * Provides handy methods for querying the subgraph and allows for
   * raw requests to be made
   *
   * @example
   * ```
   * sdk.subgraph.raw(gql`{ tokens { id } }`)
   * ```
   */
  public subgraph = subgraph;
}
