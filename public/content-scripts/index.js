import insertComponent from './injectComponent';

const addTailwindStyles = () => {
  const link = document.createElement('link');
  link.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'; 
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

const handlePageLoad = () => {
  addTailwindStyles();
  insertComponent();
  console.log('BelkaScope extension initialized successfully!');
};

if (window.location.hostname.includes('wildberries.ru') ||
    window.location.hostname.includes('ozon.ru') ||
    window.location.hostname.includes('lamoda.ru') ||
    window.location.hostname.includes('market.yandex.ru')
  ) {
  window.onload = handlePageLoad;
}
