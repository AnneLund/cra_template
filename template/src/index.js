import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './Styles/GlobalStyle';
import {BrowserRouter} from 'react-router-dom'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Modal from "./Components/Modal/Modal";
import { Flashmessage } from './Components/FlashMessages/FloatingAlerts.Styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle/>
    <Flashmessage/>
    <Modal/>
    <Header/>
    <App />
    <Footer/>
  </BrowserRouter>
);
