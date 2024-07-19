import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import chibi from '@/assets/logos/chibi2.png'
import './style.scss';

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  return (
    <div className="modal-wrapper" onClick={onClose}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <div className='modal-background'></div>
        <div className='modal-smember'>
          <div className='modal-smember-title'>S-member</div>
          <Image className='modal-smember-image' src={chibi} alt='chibi-logo'/>
        </div>
        <p className="modal-desc">Vui lòng đăng nhập tài khoản Smember để<br/> xem ưu đãi và thanh toán dễ dàng hơn.</p>
        <div className='modal-btn'>
          <Link href='/'>
            <button className='register-btn'>Đăng kí</button>
          </Link>
          <Link href='/login'>
            <button className='login-btn'>Đăng nhập</button>
          </Link>
        </div>
        <button className='modal-close-btn' onClick={onClose}></button>
      </div>
    </div>
  )
}
