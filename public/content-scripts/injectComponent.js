import React from 'react';
import ReactDOM from 'react-dom';
import ProductIconWithPanel from '@components/ProductIconWithPanel';
import ProductDetailsWidget from '@components/ProductDetailsWidget';
import ProductIconWithPopup from '@components/ProductIconWithPopup';

class WidgetManager {
  constructor(platforms) {
    this.platforms = platforms;
    this.mutationObserver = new MutationObserver(this.handleDomChanges.bind(this));
    this.setupObserver();
  }

  setupObserver() {
    this.mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  handleDomChanges() {
    this.platforms.forEach(platform => {
      platform.renderProductIcons();
      platform.renderSideWidgets();
    });
  }
}

class Platform {
  constructor({ name, productCardConfigurations, sideWidgetSelectors, customCardFilter }) {
    this.name = name;
    this.productCardConfigurations = productCardConfigurations;
    this.sideWidgetSelectors = sideWidgetSelectors;
    this.customCardFilter = customCardFilter;
  }

  renderProductIcons() {
    this.productCardConfigurations?.forEach(({ selector, component, wrapperClassName = 'product-icon-wrapper', platformName }) => {
      const selectors = Array.isArray(selector) ? selector : [selector];

      selectors.forEach(sel => {
        const productCards = document.querySelectorAll(sel);
        productCards.forEach(card => {
          if (this.customCardFilter && !this.customCardFilter(card)) return;

          if (!card.querySelector(`.${wrapperClassName}`)) {
            this.adjustCardForPlatform(card, platformName);
            const wrapper = this.createWrapper(wrapperClassName, { position: 'absolute' });
            card.appendChild(wrapper);
            ReactDOM.render(React.createElement(component), wrapper);
          }
        });
      });
    });
  }

  adjustCardForPlatform(card, platformName) {
    if (platformName === 'Lamoda') {
      const productImages = document.querySelectorAll('.x-product-card__pic');
      productImages.forEach(image => {
        image.style.zIndex = 0;
      });
    }
    card.style.position = 'relative';
  }

  renderSideWidgets() {
    this.sideWidgetSelectors?.forEach(({ selector, className, widgetProps }) => {
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

// Platform configurations
const wildberriesPlatform = new Platform({
  name: 'Wildberries',
  productCardConfigurations: [
    { selector: '.product-card__wrapper', component: ProductIconWithPanel, platformName: 'Wildberries' },
  ],
  sideWidgetSelectors: [
    { selector: '.product-page__aside-sticky', className: 'product-widget-right', widgetProps: { view: 'default' } },
    { selector: '.product-page__sticky-wrap', className: 'product-widget-left', widgetProps: { view: 'grid' } },
  ],
});

const ozonPlatform = new Platform({
  name: 'Ozon',
  productCardConfigurations: [
    { selector: '.tile-root', component: ProductIconWithPopup, platformName: 'Ozon' },
  ],
  sideWidgetSelectors: [
    { selector: '[data-widget="customHtml"]', className: 'product-widget-left', widgetProps: { view: 'grid' } },
    { selector: '[data-widget="webSale"]', className: 'product-widget-right', widgetProps: { view: 'default' } },
  ],
});

const lamodaPlatform = new Platform({
  name: 'Lamoda',
  productCardConfigurations: [
    { selector: '.x-product-card__link', component: ProductIconWithPopup, platformName: 'Lamoda' },
  ],
  sideWidgetSelectors: [
    { selector: '._stickyContainer_9cmlz_113', className: 'product-widget-right', widgetProps: { view: 'default' } },
    { selector: '._content_9cmlz_61', className: 'product-widget-left', widgetProps: { view: 'grid' } },
  ],
});

const yandexMarketPlatform = new Platform({
  name: 'YandexMarket',
  productCardConfigurations: [
    // Uncomment and configure once implemented
    // { selector: 'a[href*="https://market.yandex.ru/product--"]', component: ProductIconWithPanel, platformName: 'YandexMarket' },
  ],
  sideWidgetSelectors: [
    { selector: '#cardAddButton', className: 'product-widget-right', widgetProps: { view: 'default' } },
    { selector: '#\\/content\\/page\\/fancyPage\\/defaultPage\\/kkmCarousel\\/kkmCarousel\\/content', className: 'product-widget-left', widgetProps: { view: 'grid' } },
  ],
});

// Main function to initialize widget insertion
export default function initializeWidgets() {
  new WidgetManager([wildberriesPlatform, ozonPlatform, lamodaPlatform, yandexMarketPlatform]);
}
