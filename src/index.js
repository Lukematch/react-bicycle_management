// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
// import store from './store'
import store from './store'
import { Provider } from 'react-redux';

// 加载样式文件
import 'antd/dist/antd.less'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>

)