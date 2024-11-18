import React, { useState, useRef, useEffect } from 'react';
import { styled } from '@stitches/react';
import { Button } from '@radix-ui/themes';
import * as Avatar from "@radix-ui/react-avatar";
import ProductCard from './ProductCard';
import fakeProducts from '../fakeProducts';
import { Flex, Heading } from '@radix-ui/themes';

const SlidingPanelButton = styled(Button, {
  backgroundColor: '#ffbf00',
  border: 'none',
  cursor: 'pointer',
  position: 'absolute',
  top: '32px',
  left: '0px',
  padding: '8px',
  fontSize: '16px',
  zIndex: '9',
  width: '40px',
  height: '40px',
});

const SlidingPanel = styled('div', {
  position: 'fixed',
  top: '0',
  right: '-100%',
  width: '400px',
  height: '100%',
  backgroundColor: '#fff',
  boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.2)',
  transition: 'right 0.3s',
  padding: '20px',
  '&.open': {
    right: '0',
  },
  zIndex: '9999'
});

const StyledHeading = styled(Heading, {
  marginLeft: '10px',
  color: '#ffbf00',
  fontSize: '16px',
  fontWeight: 'bold',
});

const ProductIconWithPanel = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleClickOutside = (event) => {
    if (panelRef.current && !panelRef.current.contains(event.target) && 
        buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsPanelOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <SlidingPanelButton ref={buttonRef} onClick={togglePanel}>
        <Avatar.Root>
          <Avatar.AvatarImage src={`chrome-extension://${chrome.runtime.id}/icons/icon48.png`} />
        </Avatar.Root>
      </SlidingPanelButton>
      <SlidingPanel ref={panelRef} className={isPanelOpen ? 'open overflow-auto' : 'overflow-auto'}>
        <button onClick={togglePanel} style={{ float: 'right', fontSize: '16px' }}>✖</button>
        <div>
        <Flex style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={`chrome-extension://${chrome.runtime.id}/icons/icon48.png`}
            alt="Logo" 
            className="object-cover rounded-full shadow-lg"
            style={{position: 'relative', width: '40px', height: '40px' }}
          />
          <StyledHeading>BelkaScope</StyledHeading>
        </Flex>
        </div>
        {fakeProducts.map(product => (
          <ProductCard key={product.id} prices={product.prices} name={product.name} image={product.image} />
        ))}
      </SlidingPanel>
    </div>
  );
};

export default ProductIconWithPanel;
