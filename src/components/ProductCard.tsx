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
    <div style={{minHeight: 'fit-content', boxShadow: '0px 0px 15px 2px rgba(34, 60, 80, 0.1)'}} className="flex bg-white rounded-lg overflow-hidden w-full p-4 mt-3">
      {view === 'grid' ? (
        <div>
          <div className="bg-gray-200 rounded-lg relative">
            <div style={{top: '-5px', right: '-5px'}} className="absolute z-10 bg-white flex rounded-md p-1">
              <LikeButton />
            </div>
            <div style={{bottom: '-5px', right: '-5px'}} className="absolute z-10 bg-white flex rounded-md p-1">
              <GoSellerIcon />
            </div>
            <img
              src={image}
              alt="Product icon"
              className="object-cover rounded-md shadow-lg"
              style={{ position: 'relative', border: 'none' }}
            />
          </div>
          <div className="flex flex-col w-full mt-2">
            <div className="flex justify-between items-baseline">
              <div className="flex items-baseline mt-2 flex-col">
                <h2 className="text-sm text-red-600 font-black" style={{fontWeight: '800'}}>{prices.subscribers}₽</h2>
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
        <div className="flex items-center">
          <div className="flex-shrink-0 w-16 h-16 rounded-lg mr-4">
            <img
              src={image}
              alt="Product icon"
              className="object-cover rounded-md shadow-lg"
              style={{ position: 'relative', border: 'none' }}
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-baseline">
              <div className="flex items-baseline flex-wrap">
                <h2 className="text-sm text-red-600 font-black" style={{fontWeight: '800'}}>{prices.subscribers}₽</h2>
                <div className="text-xs font-bold ml-1">{prices.everyone}₽</div>
                <div className="text-xs text-gray-400 font-bold ml-1">
                  <del>{prices.old}₽</del>
                </div>
              </div>
              <div className='ml-1'>
                <LikeButton />
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <h2
                className="text-xs text-black font-bold overflow-hidden whitespace-normal line-clamp-2"
                title={name}
              >
                {truncatedName}
              </h2>
              <div className='ml-1'>
                <GoSellerIcon />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
