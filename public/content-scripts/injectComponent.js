import React from 'react';
import ReactDOM from 'react-dom';
import ProductIconWithPanel from '@components/ProductIconWithPanel';
import ProductDetailsWidget from '@components/ProductDetailsWidget';

const insertComponent = () => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      const productCards = document.querySelectorAll('.product-card__wrapper');
      const detailsWrapperRightSide = document.querySelector('.product-page__aside-sticky');
      const detailsWrapperLeftSide = document.querySelector('.product-page__sticky-wrap');

      if (productCards.length) {
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
      }

      if (detailsWrapperRightSide && !detailsWrapperRightSide.querySelector('.belka-scope-widget-wrapper-right')) {
        detailsWrapperRightSide.style.position = 'relative';
        const wrapper = document.createElement('div');
        wrapper.classList.add('belka-scope-widget-wrapper-right');
        detailsWrapperRightSide.appendChild(wrapper);
        ReactDOM.render(<ProductDetailsWidget view="default"/>, wrapper);
      }

      if (detailsWrapperLeftSide && !detailsWrapperLeftSide.querySelector('.belka-scope-widget-wrapper-left')) {
        // detailsWrapperLeftSide.style.position = 'relative';
        const wrapper = document.createElement('div');
        wrapper.classList.add('belka-scope-widget-wrapper-left');
        detailsWrapperLeftSide.appendChild(wrapper);
        ReactDOM.render(<ProductDetailsWidget view="grid"/>, wrapper);
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

export default insertComponent;
