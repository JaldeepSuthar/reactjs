import React from 'react';
import component from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
const root = component.createRoot(el);

root.render(<App/>);