import type { CodegenConfig } from '@graphql-codegen/cli';
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const config: CodegenConfig = {
    schema: {
        [process.env.NEXT_PUBLIC_SUPABASE_URL + '/graphql/v1']: {
            headers: {
                apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
            },
        },
    },
    documents: ['src/**/*.tsx', 'src/**/*.ts'],
    overwrite: true,
    ignoreNoDocuments: true,
    generates: {
        './src/shared/utils/gql/': {
            preset: 'client',
            documentTransforms: [addTypenameSelectionDocumentTransform],
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            },
            config: {
                scalars: {
                    UUID: 'string',
                    Date: 'string',
                    Time: 'string',
                    Datetime: 'string',
                    JSON: 'string',
                    BigInt: 'string',
                    BigFloat: 'string',
                    Opaque: 'any',
                },
            },
        },
    },
    // hooks: {
    //     afterAllFileWrite: ['npm run prettier'], // optional
    // },
};

export default config;
