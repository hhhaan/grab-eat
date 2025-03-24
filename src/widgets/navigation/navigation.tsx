'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Home, Heart, Ticket, User } from 'lucide-react';

export function Navigation() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className="fixed bottom-0 left-0 right-0 mt-auto border-t border-gray-200 bg-white shadow-md">
            <div className="flex justify-around py-2">
                <button className="flex flex-col items-center" onClick={() => router.push('/')}>
                    <div className={`p-1.5 ${pathname === '/' ? 'bg-indigo-50 rounded-full' : ''}`}>
                        <Home className={`h-5 w-5 ${pathname === '/' ? 'text-indigo-600' : 'text-gray-500'}`} />
                    </div>
                    <span className={`text-xs mt-0.5 ${pathname === '/' ? 'text-indigo-600' : 'text-gray-500'}`}>
                        홈
                    </span>
                </button>
                <button className="flex flex-col items-center" onClick={() => router.push('/raffles')}>
                    <div className={`p-1.5 ${pathname === '/raffles' ? 'bg-indigo-50 rounded-full' : ''}`}>
                        <Ticket
                            className={`h-5 w-5 ${pathname === '/raffles' ? 'text-indigo-600' : 'text-gray-500'}`}
                        />
                    </div>
                    <span className={`text-xs mt-0.5 ${pathname === '/raffles' ? 'text-indigo-600' : 'text-gray-500'}`}>
                        인기 래플
                    </span>
                </button>
                <button className="flex flex-col items-center" onClick={() => router.push('/profile/favorites')}>
                    <div className={`p-1.5 ${pathname === '/profile/favorites' ? 'bg-indigo-50 rounded-full' : ''}`}>
                        <Heart
                            className={`h-5 w-5 ${
                                pathname === '/profile/favorites' ? 'text-indigo-600' : 'text-gray-500'
                            }`}
                        />
                    </div>
                    <span
                        className={`text-xs mt-0.5 ${
                            pathname === '/profile/favorites' ? 'text-indigo-600' : 'text-gray-500'
                        }`}
                    >
                        즐겨찾기
                    </span>
                </button>
                <button className="flex flex-col items-center" onClick={() => router.push('/profile')}>
                    <div className={`p-1.5 ${pathname === '/profile' ? 'bg-indigo-50 rounded-full' : ''}`}>
                        <User className={`h-5 w-5 ${pathname === '/profile' ? 'text-indigo-600' : 'text-gray-500'}`} />
                    </div>
                    <span className={`text-xs mt-0.5 ${pathname === '/profile' ? 'text-indigo-600' : 'text-gray-500'}`}>
                        내 정보
                    </span>
                </button>
            </div>
        </div>
    );
}
