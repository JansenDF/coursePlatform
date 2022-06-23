import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rhb1uo130e01wg7xgch34t/master',
    cache: new InMemoryCache()
})