// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import PopupLayout from './components/PopupLayout.jsx';

const App = () => (
  <div>
    <PopupLayout/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
