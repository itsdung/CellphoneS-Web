import React from 'react';
import './style.scss'
import Link from 'next/link';

export default function FooterInformation() {
  return (
    <div className='footer-info-wrapper'>
        <p className="footer-info-title">Thông tin và chính sách</p>
        <div className='info-list'>
            <Link href='/'>
                <p className="info-list-item">Mua hàng và thanh toán Online</p>
            </Link>
            <Link href='/'>
                <p className="info-list-item">Mua hàng trả góp Online</p>
            </Link>
            <Link href='/'>
                <p className="info-list-item">Mua hàng trả góp bằng thẻ tín dụng</p>
            </Link>
            <Link href='/'>
                <p className="info-list-item">Chính sách giao hàng</p>
            </Link>
            <Link href='/'>
                <p className="info-list-item">Tra điểm Smember</p>
            </Link>
            <Link href='/'>
                <p className="info-list-item">Xem ưu đãi Smember</p>
            </Link>
            <Link href='/'>
                <p className="info-list-item">Tra thông tin bảo hành</p>
            </Link>
            <Link href='/'>
                <p className="info-list-item">Tra cứu hoá đơn điện tử</p>
            </Link>
            <Link href='/'>
                <p className="info-list-item">Thông tin hoá đơn mua hàng</p>
            </Link>
            <Link href='/'>
                <p className="info-list-item">Trung tâm bảo hành chính hãng</p>
            </Link>
            <Link href='/'>
                <p className="info-list-item">Quy định về việc sao lưu dữ liệu</p>
            </Link>
            <Link href='/'>
                <p className="info-list-item">Chính sách khui hộp sản phẩm Apple</p>
            </Link>
        </div>
    </div>
  )
}
