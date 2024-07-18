import { footerpayData } from '@/constants/FooterPayConstants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './style.scss';


export default function FooterForm() {
  return (
    <div className='footer-form-wrapper'>
        <div className="call-center">
          <div className='call-center-title'>
            <p className='call-center-title-text'>Tổng đài hỗ trợ miễn phí</p>
          </div>
          <p className='call-center-item'>Gọi mua hàng <strong>1800.2097</strong> (7h30 - 22h00)</p>
          <p className='call-center-item'>Gọi khiếu nại <strong>1800.2063</strong> (8h00 - 21h30)</p>
          <p className='call-center-item'>Gọi bảo hành <strong>1800.2064</strong> (8h00 - 21h00)</p>
        </div>
        <div className='pay-method'>
            <p className='pay-method-title'>Phương thức thanh toán</p>
            <div className='pay-method-icon'>
            {footerpayData.map((item, index) => (
            <Link key={index} href={item.link}>
                <Image src={item.img} alt='pay-method' />
            </Link>
          ))}
            </div>
        </div>
        <div className="subcribe-form">
          <p className="subcribe-title">
            Đăng kí nhận tin khuyến mãi
          </p>
          <p className="subcribe-title-text-red">
            (*) Nhận ngay voucher 10%
          </p>
          <p className="subcribe-tip">
            *Voucher sẽ được gửi sau 24h, chỉ áp dụng cho khách hàng mới
          </p>
          <div className='subcribe-email'>
            <input type="text" placeholder='Email*' required />
          </div>
          <div className='subcribe-phone'>
            <input type="text" placeholder='Số điện thoại' required />
          </div>
        </div>
        <div className="subcribe-rule">
          <input type="checkbox" disabled checked />
          <Link href='https://cellphones.com.vn/tos?part=privacy-policy'>
            <p className="subcribe-rule-text">Tôi đồng ý với điều khoản của CellphoneS</p>
          </Link>
        </div>
        <div className="register-btn">
          <button className='register-btn-content'>Đăng ký ngay</button>
        </div>
    </div>
  )
}
