import { useState } from 'react';
import { truncatedName } from '../utils/truncatedName';

interface Prices {
  subscribers: number;
  everyone: number;
  old: number;
}

interface UseProductCardProps {
  prices: Prices;
}

export const useProductCard = ({ prices }: UseProductCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(prevState => !prevState);
  };

  return {
    isFavorited,
    toggleFavorite,
    truncatedName,
    prices,
  };
};
