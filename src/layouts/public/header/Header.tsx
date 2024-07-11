import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import logoText from '@/assets/logos/cellphones.png';
import cateLogo from '@/assets/logos/category.png'
import './style.scss';
import { CiLocationOn } from 'react-icons/ci';
import { GoChevronDown } from 'react-icons/go';
import { FaSearch } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { PiHandbag } from 'react-icons/pi';
import { FaRegCircleUser } from 'react-icons/fa6';

export default function Header() {
  return (
    <header className='header-container'>
        <div className='header-content'>
            <div className='header-logo'>
                <Link href={'/'}>
                    <Image 
                    src={logoText}
                    alt='Logo'
                    className='logo'
                    />
                </Link>
            </div>

            <div className='header-category'>
                <Image 
                    src={cateLogo}
                    alt='category'
                    className='category-logo'
                    width={20}
                    height={20}
                />
                <div className='category-text'>
                    <p>Danh mục</p>
                </div>
            </div>

            <div className='header-location'>
                <CiLocationOn className='location-icon' />
                <div className='location-content'>
                    <p className='content-see-more'>
                        Xem giá tại
                        <GoChevronDown className='location-content-items-arrow' />
                    </p>
                    <p className='content-name-text'>Hồ Chí Minh</p>
                </div>
            </div>

            <div className='header-search'>
                <form>
                    <div className='search-container'>
                        <FaSearch className='search-icon'/>
                        <input className='search-input' type="text" placeholder="Bạn cần tìm gì?"></input>
                    </div>
                </form>
            </div>

            <div className='header-contact'>
                <Link className='contact-link' href="tel:19006969">
                    <FiPhone className='header-contact-icon' />
                    <div className='header-contact-content'>
                        <p className='content-text'>Gọi mua hàng<br/><strong>1800.2097</strong></p>
                    </div>
                </Link>
            </div>

            <div className='header-store'>
                <Link className='store-link' href={'/'}>
                    <CiLocationOn className='store-icon' />
                    <div className='store-content'>
                        <p className='store-text'>Cửa hàng gần bạn</p>
                    </div>
                </Link>
            </div>

            <div className='header-order'>
                <Link className='order-link' href={'/'}>
                    <LiaShippingFastSolid className='order-icon' />
                    <div className='order-content'>
                        <p className='order-text'>Tra cứu đơn hàng</p>
                    </div>
                </Link>
            </div>

            <div className='header-cart'>
                <Link className='cart-link' href={'/'}>
                    <PiHandbag className='cart-icon' />
                    <div className='cart-content'>
                        <p className='cart-text'>Giỏ hàng</p>
                    </div>
                </Link>
            </div>

            <div className='header-user'>
                <Link className='user-link' href={'/'}>
                    <FaRegCircleUser className='user-icon' />
                    <div className='user-content'>
                        <p className='user-text'>Đăng nhập</p>
                    </div>
                </Link>
            </div>
        </div>
    </header>
  )
}
