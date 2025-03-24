export const AuthLayout = ({
    title,
    subtitle,
    children,
}: {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                    <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
                </div>
                {children}
            </div>
        </div>
    );
};
