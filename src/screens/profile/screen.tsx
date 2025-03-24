'use client';

import { Layout } from '@/src/widgets/layout';
import { useUserStore } from '@/src/entities/user/model/store';
import Image from 'next/image';

export function ProfileScreen() {
    const { userInfo, signOut, loading } = useUserStore();

    if (loading) {
        return (
            <Layout>
                <div className="flex justify-center items-center min-h-screen">
                    <p>로딩 중...</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-4 py-8 ">
                {/* Profile Header */}
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
                        {userInfo?.avatarUrl ? (
                            <Image
                                src={userInfo.avatarUrl}
                                alt={userInfo.name}
                                className="w-full h-full object-cover"
                                width={50}
                                height={50}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-indigo-500">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold mb-2 text-gray-800">{userInfo?.name}</h1>
                        <p className="text-gray-600 mb-2">{userInfo?.email}</p>
                        {userInfo?.phone && <p className="text-gray-600">{userInfo.phone}</p>}
                    </div>
                </div>

                {/* 사용자 정보 섹션 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                    <h2 className="text-xl font-semibold mb-4 text-indigo-800 border-b border-indigo-100 pb-2">
                        내 정보
                    </h2>

                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 mb-1">닉네임</span>
                            <div className="flex justify-between items-center">
                                <span>{userInfo?.name}</span>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 mb-1">이메일</span>
                            <span>{userInfo?.email}</span>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 mb-1">전화번호</span>
                            <div className="flex justify-between items-center">
                                <span>{userInfo?.phone}</span>
                                <button className="text-indigo-600 text-sm">인증하기</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 활동 내역 섹션 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
                    <h2 className="text-xl font-semibold mb-4 text-indigo-800 border-b border-indigo-100 pb-2">
                        나의 활동
                    </h2>

                    <div className="space-y-3">
                        <button className="w-full py-3 flex justify-between items-center text-left">
                            <span className="font-medium">참여한 래플</span>
                            <span className="text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                        </button>

                        <button className="w-full py-3 flex justify-between items-center text-left border-t border-gray-100">
                            <span className="font-medium">예약 내역</span>
                            <span className="text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                        </button>

                        <button className="w-full py-3 flex justify-between items-center text-left border-t border-gray-100">
                            <span className="font-medium">즐겨찾기</span>
                            <span className="text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                {/* 설정 및 로그아웃 */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-xl font-semibold mb-4 text-indigo-800 border-b border-indigo-100 pb-2">설정</h2>

                    <div className="space-y-3">
                        <button className="w-full py-3 flex justify-between items-center text-left">
                            <span className="font-medium">알림 설정</span>
                            <span className="text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                        </button>

                        <button className="w-full py-3 flex justify-between items-center text-left border-t border-gray-100">
                            <span className="font-medium">고객센터</span>
                            <span className="text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                        </button>

                        <button className="w-full py-3 flex justify-between items-center text-left border-t border-gray-100">
                            <span className="font-medium text-red-500">회원 탈퇴</span>
                            <span className="text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                {/* 로그아웃 버튼 */}
                <div className="mt-6">
                    <button
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition duration-200"
                        onClick={signOut}
                    >
                        로그아웃
                    </button>
                </div>
            </div>
        </Layout>
    );
}
