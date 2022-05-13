import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({


    uri: 'https://spotifalso2.hasura.app/v1/graphql',
    headers: { 'x-hasura-admin-secret': 'jt2U0IVo3rTfPnsitoBHZiBZpK54ro0wq7RshcQYdxIUASFfczeQ4z4TbhBL3kiB' },
    cache: new InMemoryCache(),
});