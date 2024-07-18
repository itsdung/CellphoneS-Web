import React from 'react';
import Image from 'next/image';
import logo from '@/assets/icons/cellphones-small-logo.png'
import qrcode from '@/assets/icons/footer-service/QR_appGeneral.png';
import android from '@/assets/icons/footer-service/downloadANDROID.png';
import ios from '@/assets/icons/footer-service/downloadiOS.png';
import './style.scss';
import Link from 'next/link';

export default function FooterService() {
  return (
    <div className='footer-service-wrapper'>
        <p className="footer-service-title">Dịch vụ và thông tin khác</p>
        <div className="service-list">
            <Link href='/'>
                <p className="service-list-item">Khách hàng doanh nghiệp (B2B)</p>
            </Link>
            <Link href='/'>
                <p className="service-list-item">Ưu đãi thanh toán</p>
            </Link>
            <Link href='/'>
                <p className="service-list-item">Quy chế hoạt động</p>
            </Link>
            <Link href='/'>
                <p className="service-list-item">Chính sách bảo mật thông tin cá nhân</p>
            </Link>
            <Link href='/'>
                <p className="service-list-item">Chính sách Bảo hành</p>
            </Link>
            <Link href='/'>
                <p className="service-list-item">Liên hệ hợp tác kinh doanh</p>
            </Link>
            <Link href='/'>
                <p className="service-list-item">Tuyển dụng</p>
            </Link>
            <Link href='/'>
                <p className="service-list-item">Dịch vụ bảo hành mở rộng</p>
            </Link>
            <div className="service-list-item">
                <Image src={logo} className='s-member-logo' alt='logo'/>
                <Link href='/'>
                    <p className="s-member-text">Smember: Tích điểm & sử dụng ưu đãi</p>
                </Link>
            </div>
        </div>
        <div className='service-download'>
            <Image src={qrcode} className='download-qrcode' alt='qrcode'/>
            <div className="download-app">
                <Link href='/'>
                    <Image src={android} className='download-android' alt='android'/>
                </Link>
                <Link href='/'>
                    <Image src={ios} className='download-ios' alt='ios'/>
                </Link>
            </div>
        </div>
    </div>
  )
}
