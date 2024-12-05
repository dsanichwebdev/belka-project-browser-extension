import React from 'react';
import '../index.css';
import LikeButton from './LikeButton';
import GoSellerIcon from './icons/GoSeller';

interface Prices {
  subscribers: number;
  everyone: number;
  old: number;
}

interface ProductCardProps {
  prices: Prices;
  image: string;
  name: string;
  view?: 'grid' | 'default';
}

const ProductCard: React.FC<ProductCardProps> = ({ prices, image, name, view }) => {
  const truncatedName = name.length > 45 ? `${name.slice(0, 45)}...` : name;

  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-full p-4 mt-3">
      {view === 'grid' ? (
        <div>
          <div className="bg-gray-200 rounded-lg relative">
            <div className="absolute z-10 bg-white flex rounded-md p-1 top-[-5px] right-[-5px]">
              <LikeButton size="small" />
            </div>
            <div className="absolute z-10 bg-white flex rounded-md p-1 bottom-[-5px] right-[-5px]">
              <GoSellerIcon size="small" />
            </div>
            <img
              src={image}
              alt="Product icon"
              className="object-cover rounded-md shadow-lg"
              style={{ position: 'relative' }}
            />
          </div>
          <div className="flex flex-col w-full mt-2">
            <div className="flex justify-between items-baseline">
              <div className="flex items-baseline mt-2 flex-col">
                <h2 className="text-sm text-red-600 font-black">{prices.subscribers}₽</h2>
                <div className="text-xs font-bold">{prices.everyone}₽</div>
                <div className="text-xs text-gray-400 font-bold">
                  <del>{prices.old}₽</del>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <h2
                className="text-xs text-black font-bold overflow-hidden whitespace-normal line-clamp-2"
                title={name}
              >
                {truncatedName}
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="flex-shrink-0 w-14 h-18 bg-gray-200 rounded-lg mr-4">
            <img
              src={image}
              alt="Product icon"
              className="object-cover rounded-md shadow-lg"
              style={{ position: 'relative' }}
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-baseline">
              <div className="flex items-baseline">
                <h2 className="text-sm text-red-600 font-black">{prices.subscribers}₽</h2>
                <div className="text-xs font-bold ml-1">{prices.everyone}₽</div>
                <div className="text-xs text-gray-400 font-bold ml-1">
                  <del>{prices.old}₽</del>
                </div>
              </div>
              <LikeButton />
            </div>
            <div className="flex items-center justify-between mt-2">
              <h2
                className="text-xs text-black font-bold overflow-hidden whitespace-normal line-clamp-2"
                title={name}
              >
                {truncatedName}
              </h2>
              <GoSellerIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
