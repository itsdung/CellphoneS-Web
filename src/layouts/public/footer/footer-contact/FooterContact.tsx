import IcYoutube from '@/assets/icons/footer-contact/cellphones-youtube.png';
import IcFacebook from '@/assets/icons/footer-contact/cellphones-facebook.png';
import IcInstagram from '@/assets/icons/footer-contact/cellphones-instagram.png';
import IcTiktok from '@/assets/icons/footer-contact/cellphones-tiktok.png';
import IcZalo from '@/assets/icons/footer-contact/cellphones-zalo.png';
import dienthoaivui from '@/assets/icons/footer-contact/dienthoaivui.png';
import careS from '@/assets/icons/footer-contact/Logo_CareS_1.png';
import SChannel from '@/assets/icons/footer-contact/schanel.png';
import SForum from '@/assets/icons/footer-contact/sforum.png';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import './style.scss';

export default function FooterContact() {
  return (
    <div className='footer-contact-wrapper'>
        <p className="contact-title">Kết nối với CellphoneS</p>
        <div className="contact-icon-list">
          <Link href='https://www.youtube.com/@CellphoneSOfficial'>
            <Image className='contact-icon-list-item' src={IcYoutube} alt='Youtube'/>
          </Link>
          <Link href='https://www.facebook.com/CellphoneSVietnam'>
            <Image className='contact-icon-list-item' src={IcFacebook} alt='Facebook'/>
          </Link>
          <Link href='https://www.instagram.com/cellphonesvn/'>
            <Image className='contact-icon-list-item' src={IcInstagram} alt='Instagram'/>
          </Link>
          <Link href='https://www.tiktok.com/@cellphones.official'>
            <Image className='contact-icon-list-item' src={IcTiktok} alt='Tiktok'/>
          </Link>
          <Link href='https://oa.zalo.me/3894196696036261863'>
            <Image className='contact-icon-list-item' src={IcZalo} alt='Zalo'/>
          </Link>
        </div>
        <p className="contact-title">Website thành viên</p>
        <p className="service-maintain">Hệ thống bảo hành sửa chữa Điện thoại - Máy tính</p>
        <Link href='/'>
          <Image className='service-logo' src={dienthoaivui} alt='dienthoaivui'/>
        </Link>
        <p className="service-maintain">Trung tâm bảo hành uỷ quyền Apple</p>
        <Link href='/'>
          <Image className='service-logo' src={careS} alt='dienthoaivui'/>
        </Link>
        <p className="service-maintain">Kênh thông tin giải trí công nghệ cho giới trẻ</p>
        <Link href='/'>
          <Image className='service-logo' src={SChannel} alt='dienthoaivui'/>
        </Link>
        <p className="service-maintain">Trang thông tin công nghệ mới nhất</p>
        <Link href='/'>
          <Image className='service-logo' src={SForum} alt='dienthoaivui'/>
        </Link>
    </div>
  )
}
