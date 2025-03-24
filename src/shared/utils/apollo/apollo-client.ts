import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`,
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        },
    };
});

export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
