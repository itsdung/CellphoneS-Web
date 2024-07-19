'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import chibi from '@/assets/logos/chibi2.png';
import google from '@/assets/logos/google.png';
import zalo from '@/assets/logos/zalo.png';
import './style.scss';
import Link from 'next/link';

export default function LoginContent() {
    const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    localStorage.setItem('phone', phone);
    localStorage.setItem('password', password);
  };

  return (
    <div className='login-wrapper'>
        <div className="login-title">
            <Image className='login-title-image' src={chibi} alt='logo'/>
            <p className="login-title-text">Đăng nhập với</p>
        </div>
        <div className="login-method">
            <div className="login-google">
                <Image src={google} alt='google-logo' width={50}/>
                <p className="login-method-text">Google</p>
            </div>
            <div className="login-zalo">
                <Image src={zalo} alt='zalo-logo' width={50}/>
                <p className="login-method-text">Zalo</p>
            </div>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
            <div className="divider">
                <hr/><p>hoặc</p><hr />
            </div>
            <div className="form-input">
                <div className="phone-input">
                    <input type="text"
                        placeholder="Nhập số điện thoại"
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required
                    />
                    <label>Số điện thoại</label>
                </div>
                <div className="password-input">
                    <input type="password" 
                        placeholder="Nhập mật khẩu" 
                        value={password}  
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                    <label>Mật khẩu</label>
                </div>
            </div>
            <div className="forget-password">
                <p className='forget-password-text'>Quên mật khẩu</p>
            </div>
            <button className='login-btn'>Đăng nhập</button>
        </form>
        
        <div className="login-question">
            <p className='login-question-text'>Bạn chưa có tài khoản?</p>
            <Link href='/'>
                <p className='register-text'>Đăng ký ngay</p>
            </Link>
        </div>
        <Link href='/'>
            <p className='promotion-text'>Xem chính sách ưu đãi Smember</p>
        </Link>
    </div>
  )
}
