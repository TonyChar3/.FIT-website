import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './container/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import ScrollToTop from './container/scroll_top/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>
    
)
