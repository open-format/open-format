import { request, RequestDocument } from 'graphql-request';

const ENDPOINT =
  'https://api.thegraph.com/subgraphs/name/simpleweb/open-format';

async function raw(document: RequestDocument) {
  return await request(ENDPOINT, document);
}

export default {
  raw,
};
