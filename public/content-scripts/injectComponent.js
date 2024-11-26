import React from 'react';
import ReactDOM from 'react-dom';
import ProductIconWithPanel from '@components/ProductIconWithPanel';
import ProductDetailsWidget from '@components/ProductDetailsWidget';

class WidgetInserter {
  constructor(platforms) {
    this.platforms = platforms;
    this.observer = new MutationObserver(this.handleMutations.bind(this));
    this.initObserver();
  }

  initObserver() {
    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  handleMutations() {
    this.platforms.forEach((platform) => {
      platform.insertProductIcons();
      platform.insertSideWidgets();
    });
  }
}

class Platform {
  constructor({ name, productCardSelector, sideDetailsSelectors, customCardFilter }) {
    this.name = name;
    this.productCardSelector = productCardSelector;
    this.sideDetailsSelectors = sideDetailsSelectors;
    this.customCardFilter = customCardFilter;
  }

  insertProductIcons() {
    const productCards = document.querySelectorAll(this.productCardSelector);
    productCards.forEach((card) => {
      if (this.customCardFilter && !this.customCardFilter(card)) return;
      if (!card.querySelector('.belka-scope-button-wrapper')) {
        card.style.position = 'relative';
        const wrapper = this.createWrapper('belka-scope-button-wrapper', { position: 'absolute' });
        card.appendChild(wrapper);
        ReactDOM.render(<ProductIconWithPanel />, wrapper);
      }
    });
  }

  insertSideWidgets() {
    this.sideDetailsSelectors.forEach(({ selector, className, widgetProps }) => {
      const sideWrapper = document.querySelector(selector);
      if (sideWrapper && !sideWrapper.querySelector(`.${className}`)) {
        sideWrapper.style.position = 'relative';
        const wrapper = this.createWrapper(className);
        sideWrapper.appendChild(wrapper);
        ReactDOM.render(<ProductDetailsWidget {...widgetProps} />, wrapper);
      }
    });
  }

  createWrapper(className, styles = {}) {
    const wrapper = document.createElement('div');
    wrapper.className = className;
    Object.assign(wrapper.style, styles);
    return wrapper;
  }
}

const wildberriesPlatform = new Platform({
  name: 'Wildberries',
  productCardSelector: '.product-card__wrapper',
  sideDetailsSelectors: [
    { selector: '.product-page__aside-sticky', className: 'belka-scope-widget-wrapper-right', widgetProps: { view: 'default' } },
    { selector: '.product-page__sticky-wrap', className: 'belka-scope-widget-wrapper-left', widgetProps: { view: 'grid' } },
  ],
});

const ozonPlatform = new Platform({
  name: 'Ozon',
  productCardSelector: '.tile-root',
  sideDetailsSelectors: [
    { selector: '[data-widget="customHtml"]', className: 'belka-scope-widget-wrapper-left', widgetProps: { view: 'grid' } },
    { selector: '[data-widget="webSale"]', className: 'belka-scope-widget-wrapper-right', widgetProps: { view: 'default' } },
  ],
});


export default function insertComponent() {
  new WidgetInserter([wildberriesPlatform, ozonPlatform]);
}
