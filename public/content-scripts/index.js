import insertComponent from './injectComponent';


const addTailwindStyles = () => {
  const link = document.createElement('link');
  link.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'; 
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

if (window.location.hostname.includes('wildberries.ru')) {
  window.onload = () => {
    addTailwindStyles();
    insertComponent();
    console.log('component inserted in product cards!')
  };
}
