import { App } from '@/src/app';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <App>{children}</App>;
}
