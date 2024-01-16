// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'


const rootElement = document.getElementById('root')
if(!rootElement) throw Error("connot find root element with that id")

ReactDOM.render(<React.StrictMode>
    <App />
</React.StrictMode>,rootElement);