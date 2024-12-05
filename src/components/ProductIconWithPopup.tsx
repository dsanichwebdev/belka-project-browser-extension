import React, { useState } from 'react';
import { styled } from '@stitches/react';
import * as Avatar from "@radix-ui/react-avatar";
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow } from '@radix-ui/react-popover';
import ProductCard from './ProductCard';
import data from '../products.mock';
import { Flex, Heading } from '@radix-ui/themes';

interface Product {
  id: string | number;
  name: string;
  image: string;
  prices: {
    subscribers: number;
    everyone: number;
    old: number;
  };
}

const StyledAvatarButton = styled('button', {
  backgroundColor: '#ffbf00',
  border: 'none',
  cursor: 'pointer',
  position: 'absolute',
  top: '32px',
  left: '0px',
  fontSize: '16px',
  zIndex: '9',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledHeading = styled(Heading, {
  marginLeft: '10px',
  color: '#ffbf00',
  fontSize: '16px',
  fontWeight: 'bold',
});

const PopoverContentWrapper = styled(PopoverContent, {
  width: '400px',
  height: '400px',
  overflowY: 'auto',
  padding: '20px',
  backgroundColor: 'white',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  border: '1px solid #ddd',
});

const ProductIconWithPopup: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <StyledAvatarButton>
          <Avatar.Root>
            <Avatar.AvatarImage 
              style={{ border: 'none', borderRadius: '0 10px 10px 0' }} 
              src={`chrome-extension://${chrome.runtime.id}/icons/icon48.png`} 
            />
          </Avatar.Root>
        </StyledAvatarButton>
      </PopoverTrigger>
      <PopoverContent sideOffset={5}>
        <PopoverArrow />
        <PopoverContentWrapper>
          <button onClick={() => setOpen(false)} style={{ float: 'right', fontSize: '16px' }}>✖</button>
          <Flex style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={`chrome-extension://${chrome.runtime.id}/icons/icon48.png`} 
              alt="Logo" 
              className="object-cover rounded-full shadow-lg"
              style={{ width: '40px', height: '40px', border: 'none' }}
            />
            <StyledHeading>BelkaScope</StyledHeading>
          </Flex>
          {data.map((product: Product) => (
            <ProductCard 
              key={product.id} 
              prices={product.prices} 
              name={product.name} 
              image={product.image} 
            />
          ))}
        </PopoverContentWrapper>
      </PopoverContent>
    </Popover>
  );
};

export default ProductIconWithPopup;
