import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        domains: ['k.kakaocdn.net', 'eilpxguuankujqlpixdv.supabase.co'],
    },
    async rewrites() {
        return [
            {
                source: '/graphql',
                destination: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql`,
            },
        ];
    },
};

export default nextConfig;
