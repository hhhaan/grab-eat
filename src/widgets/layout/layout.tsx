'use client';

import { Navigation } from '../navigation';
import { Bell, Search, ShoppingBag } from 'lucide-react';
// import '@/src/shared/lib/vendor/vendor.ts';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pb-20 p-4 flex-1">{children}</main>
            <Navigation />
        </div>
    );
};

const Header = () => {
    return (
        <div className="sticky top-0 z-10 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Grab Eat
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors">
                            <Search className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full"></span>
                        </button>
                        <button className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors">
                            <ShoppingBag className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
