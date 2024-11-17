import insertComponent from './injectComponent';

if (window.location.hostname.includes('wildberries.ru')) {
  window.onload = () => {
    insertComponent();
    console.log('component inserted in product cards!')
  };
}
