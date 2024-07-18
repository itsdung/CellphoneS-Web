import React from 'react';
import Link from 'next/link';
import img2 from '@/assets/icons/footer-contact/dmca_copyright_protected150c.png';
import img1 from '@/assets/icons/footer-contact/logoSaleNoti.png';
import './style.scss';
import Image from 'next/image';

export default function FooterBottom() {
  return (
    <div className='footer-bottom'>
        <div className='text-columns'>
            <Link href='/'>
                <p className="column-item">Back to School là gì  - Điện thoại  - Điện thoại iPhone</p>
            </Link>

            <Link href='/'>
                <p className="column-item">Điện thoại Vivo  - Điện thoại OPPO  - Điện thoại Xiaomi</p>
            </Link>

            <Link href='/'>
                <p className="column-item">Laptop  - Laptop Acer  - Laptop Dell  - Laptop HP</p>
            </Link>
            
            <Link href='/'>
                <p className="column-item">Nhà thông minh  - Máy hút bụi gia đình  - Cân điện tử</p>
            </Link>

            <Link href='/'>
                <p className="column-item">Điện thoại iPhone 15  - Điện thoại iPhone 15 Pro Max</p>
            </Link>

            <Link href='/'>
                <p className="column-item">Điện thoại Samsung Galaxy  - Samsung Galaxy A</p>
            </Link>

            <Link href='/'>
                <p className="column-item">Tivi  - Tivi Samsung  - Tivi Sony  - Tivi LG</p>
            </Link>

            <Link href='/'>
                <p className="column-item">Đồ gia dụng  - Nồi chiên không dầu giá rẻ  - Nồi cơm điện</p>
            </Link>
        </div>
        <p className="company-info">Công ty TNHH Thương Mại và Dịch Vụ Kỹ Thuật DIỆU PHÚC - GPĐKKD: 0316172372 cấp tại Sở KH & ĐT TP. HCM. Địa chỉ văn phòng: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</p>
        <div className="company-certify">
            <Link href='/'>
                <Image src={img1} alt='logo' />
            </Link>
            <Link href='/'>
                <Image src={img2} alt='logo' />
            </Link>
        </div>
    </div>
  )
}
