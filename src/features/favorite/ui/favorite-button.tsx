'use client';

import { HeartIcon } from 'lucide-react';

interface FavoriteButtonProps {
    isFavorite: boolean;
    isProcessing: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FavoriteButton = ({ isFavorite, isProcessing, onClick }: FavoriteButtonProps) => {
    return (
        <button
            className="flex-shrink-0 p-2"
            onClick={onClick}
            aria-label={isFavorite ? '즐겨찾기 해제' : '즐겨찾기 추가'}
            disabled={isProcessing}
        >
            <HeartIcon
                className={`h-6 w-6 ${
                    isProcessing ? 'text-gray-400' : isFavorite ? 'text-indigo-600 fill-current' : 'text-gray-300'
                }`}
            />
        </button>
    );
};
