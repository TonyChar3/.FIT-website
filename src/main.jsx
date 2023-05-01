import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './container/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import ScrollToTop from './container/scroll_top/ScrollToTop';
import { store } from './store/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <ScrollToTop />
            <App />
        </Provider>
    </BrowserRouter>
    
)
