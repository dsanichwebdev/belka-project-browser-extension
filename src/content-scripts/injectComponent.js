import React from 'react';
import ReactDOM from 'react-dom';
import ProductIconWithPanel from '../components/ProductIconWithPanel';

const insertComponent = () => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      const productCards = document.querySelectorAll('.product-card__wrapper');

      productCards.forEach((card) => {
        if (!card.querySelector('.belka-scope-button-wrapper')) {
          card.style.position = 'relative';
          const wrapper = document.createElement('div');
          wrapper.classList.add('belka-scope-button-wrapper');
          wrapper.style.position = 'absolute';
          card.appendChild(wrapper);
          ReactDOM.render(<ProductIconWithPanel />, wrapper);
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

export default insertComponent;
