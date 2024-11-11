// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome.jsx';

const App = () => (
  <div>
    <Welcome/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
