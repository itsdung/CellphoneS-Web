import React from 'react';
import Header from '../header/Header';
import LoginContent from './login-content/LoginContent';
import './style.scss';

export default function LoginLayout() {
  return (
    <div className='login-layout'>
        <Header/>
        <LoginContent/>
    </div>
  )
}
