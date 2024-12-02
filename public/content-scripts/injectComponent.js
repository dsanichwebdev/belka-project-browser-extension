import React from 'react';
import ReactDOM from 'react-dom';
import ProductIconWithPanel from '@components/ProductIconWithPanel';
import ProductDetailsWidget from '@components/ProductDetailsWidget';
import ProductIconWithPopup from '@components/ProductIconWithPopup';

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
  constructor({ name, productCardConfigs, sideDetailsSelectors, customCardFilter }) {
    this.name = name;
    this.productCardConfigs = productCardConfigs;
    this.sideDetailsSelectors = sideDetailsSelectors;
    this.customCardFilter = customCardFilter;
  }

  insertProductIcons() {
    this.productCardConfigs?.forEach(({ selector, component, wrapperClassName = 'belka-scope-button-wrapper', name
   }) => {
      const productCards = document.querySelectorAll(selector);
      productCards.forEach((card) => {
        if (this.customCardFilter && !this.customCardFilter(card)) return;
        if (!card.querySelector(`.${wrapperClassName}`)) {
          card.style.position = 'relative';
          if (name = 'Lamoda') {
            const productsImages = document.querySelectorAll('.x-product-card__pic')
            productsImages.forEach((image) => {
              image.style.zIndex = 0
            })
          }
          const wrapper = this.createWrapper(wrapperClassName, { position: 'absolute' });
          card.appendChild(wrapper);
          ReactDOM.render(React.createElement(component), wrapper);
        }
      });
    });
  }

  insertSideWidgets() {
    this.sideDetailsSelectors?.forEach(({ selector, className, widgetProps }) => {
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
  productCardConfigs: [
    { selector: '.product-card__wrapper', component: ProductIconWithPanel },
  ],
  sideDetailsSelectors: [
    { selector: '.product-page__aside-sticky', className: 'belka-scope-widget-wrapper-right', widgetProps: { view: 'default' } },
    { selector: '.product-page__sticky-wrap', className: 'belka-scope-widget-wrapper-left', widgetProps: { view: 'grid' } },
  ],
});

const ozonPlatform = new Platform({
  name: 'Ozon',
  productCardConfigs: [
    { selector: '.tile-root', component: ProductIconWithPopup },
  ],
  sideDetailsSelectors: [
    { selector: '[data-widget="customHtml"]', className: 'belka-scope-widget-wrapper-left', widgetProps: { view: 'grid' } },
    { selector: '[data-widget="webSale"]', className: 'belka-scope-widget-wrapper-right', widgetProps: { view: 'default' } },
  ],
});

const lamodaPlatform = new Platform({
  name: 'Lamoda',
  productCardConfigs: [
    { selector: '.x-product-card__link', component: ProductIconWithPopup },
  ],
  sideDetailsSelectors: [
    { selector: '._stickyContainer_9cmlz_113', className: 'belka-scope-widget-wrapper-right', widgetProps: { view: 'default' } },
  ],
})

export default function insertComponent() {
  new WidgetInserter([wildberriesPlatform, ozonPlatform, lamodaPlatform]);
}
