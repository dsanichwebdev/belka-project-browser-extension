import React from 'react';

interface LikeButtonProps {
  isFavorited: boolean;
  toggleFavorite: () => void;
  size?: 'small' | 'medium' | 'large';
}

export const LikeButton: React.FC<LikeButtonProps> = ({ isFavorited, toggleFavorite, size = 'medium' }) => {
  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 'h-4 w-4';
      case 'large':
        return 'h-8 w-8';
      default:
        return 'h-6 w-6';
    }
  };

  return (
    <button onClick={toggleFavorite} className="focus:outline-none">
      {isFavorited ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" className={getIconSize()}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="gray" viewBox="0 0 24 24" className={getIconSize()}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )}
    </button>
  );
};
