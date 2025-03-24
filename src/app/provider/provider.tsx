'use client';

import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from './auth-provider';
import { apolloClient } from '@/src/shared/utils/apollo';
export const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ApolloProvider client={apolloClient}>
            <AuthProvider>{children}</AuthProvider>
        </ApolloProvider>
    );
};
