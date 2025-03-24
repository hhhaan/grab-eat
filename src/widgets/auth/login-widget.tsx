import { KakaoLoginButton } from '@/src/features/auth';
import { AuthLayout } from '@/src/widgets/auth/auth-layout';

export const LoginWidget = () => {
    return (
        <AuthLayout title="로그인" subtitle="서비스를 이용하려면 로그인이 필요합니다">
            <div className="mt-8">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">간편 로그인</span>
                    </div>
                </div>
                <div className="mt-4">
                    <KakaoLoginButton />
                </div>
            </div>

            <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">회원가입 없이 카카오 계정으로 바로 이용할 수 있습니다</p>
                <div className="mt-4 flex justify-center space-x-2">
                    <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
                        이용약관
                    </a>
                    <span className="text-gray-300">|</span>
                    <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
                        개인정보처리방침
                    </a>
                </div>
            </div>
        </AuthLayout>
    );
};
