import { ApolloClient, InMemoryCache } from '@apollo/client';
import { apiUrl } from '../utils/env';

export const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache()
});