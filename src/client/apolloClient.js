import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError((graphQLErrors, networkError) => {
  if (graphQLErrors) {
    console.log(graphQLErrors);
    // graphQLErrors.map(({ message, location, path }) => {
    //   alert(`GraphQl Error ${message}`);
    // });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://api.spacex.land/graphql/" }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
