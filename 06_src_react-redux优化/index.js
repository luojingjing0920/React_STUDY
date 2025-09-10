import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <App />
</Provider>);

//react-redux无需再检测状态的改变，所以不用重新渲染App组件
