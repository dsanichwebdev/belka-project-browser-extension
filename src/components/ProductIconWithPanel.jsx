import React, { useState } from 'react';
import { styled } from '@stitches/react';
import { Button } from '@radix-ui/themes';

const SlidingPanelButton = styled(Button, {
  backgroundColor: '#ffbf00',
  border: 'none',
  cursor: 'pointer',
  position: 'absolute',
  top: '5px',
  left: '5px',
  padding: '4px',
  fontSize: '16px'
});

const SlidingPanel = styled('div', {
  position: 'fixed',
  top: '0',
  right: '-100%',
  width: '300px',
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

const ProductIconWithPanel = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <div style={{ position: 'relative' }}>
      <SlidingPanelButton onClick={togglePanel}>BelkaScope</SlidingPanelButton>
      <SlidingPanel className={isPanelOpen ? 'open' : ''}>
        <button onClick={togglePanel} style={{ float: 'right', fontSize: '16px' }}>✖</button>
        <h2>Hello World!</h2>
      </SlidingPanel>
    </div>
  );
};

export default ProductIconWithPanel;
