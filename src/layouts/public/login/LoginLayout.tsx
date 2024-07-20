import React from 'react';
import Header from '../header/Header';
import LoginContent from './login-content/LoginContent';
import './style.scss';
import ModalSearchTrending from '@/components/modal/modal-search-trending/ModalSearchTrending';

export default function LoginLayout() {
  return (
    <div className='login-layout'>
        <Header/>
        <LoginContent/>
    </div>
  )
}
