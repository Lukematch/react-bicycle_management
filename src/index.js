// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';


// 加载样式文件
import 'antd/dist/antd.less'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <HashRouter>
        <App />
    </HashRouter>
)