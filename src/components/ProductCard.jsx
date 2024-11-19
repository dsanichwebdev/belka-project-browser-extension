import React from 'react';
import '../index.css';
import LikeButton from './LikeButton';
import GoSellerIcon from './GoSellerIcon';

const ProductCard = ({ prices, image, name }) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-full p-4 mt-3 min-h-fit">
      <div className="flex-shrink-0 w-14 flex h-18 bg-gray-200 rounded-lg mr-4 ">
        <img 
          src={image} 
          alt="Product icon" 
          className="object-cover rounded-md shadow-lg"
          style={{position: 'relative'}}
        />
      </div>
      <div className="flex flex-col w-full">
        <div className='flex justify-between items-baseline'>
          <div className='flex items-baseline'>
            <h2 className="text-lg text-red-600 font-black">{prices.subscribers}₽</h2>
            <div className='text-xs font-bold ml-1'>{prices.everyone}₽</div>
            <div className='text-xs text-gray-400 font-bold ml-1'>
              <strike>{prices.old}₽</strike>
            </div>
          </div>
          <LikeButton />
        </div>
        <div className='flex items-center justify-between mt-2'>
          <h2 
            className="text-sm text-black font-bold overflow-hidden whitespace-normal line-clamp-2" 
            title={name}
          >
            {name}
          </h2>
          <GoSellerIcon/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;