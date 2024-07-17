import { footerpayData } from '@/constants/FooterPayConstants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function FooterForm() {
  return (
    <div className='footer-form-wrapper'>
        <div className="call-center">
            <p>Gọi mua hàng <strong>1800.2097</strong> (7h30 - 22h00)</p>
            <p>Gọi khiếu nại <strong>1800.2063</strong> (8h00 - 21h30)</p>
            <p>Gọi bảo hành <strong>1800.2064</strong>(8h00 - 21h00)</p>
        </div>
        <div className='pay-method'>
            <p>Phương thức thanh toán</p>
            <div className='pay-method-icon'>
            {footerpayData.map((item, index) => (
            <Link key={index} href={item.link}>
                <Image src={item.img} alt='pay-method' />
            </Link>
          ))}
            </div>
        </div>
    </div>
  )
}
