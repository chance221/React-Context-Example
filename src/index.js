import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './paltrows-power-toes/App';
import AppLang from './lang-context/AppLang';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
<BrowserRouter>
    <AppLang />
</BrowserRouter>,

document.getElementById('root'));
