import { phoneSectionListData } from '@/constants/PhoneSectionListConstants'
import Link from 'next/link'
import React from 'react'
import './style.scss'

export default function PhoneSection() {
  return (
    <div className='wrapper-phone'>
        <div className='phone-header'>
            <Link href='./'>
                <h2>Điện thoại nổi bật nhất</h2>
            </Link>
            <ul className='phone-list'>
            {phoneSectionListData.map((phone, index) => (
                <li key={index} className='phone-list-item'>
                <Link href={`./${phone.name.toLowerCase()}`}>
                    {phone.name}
                </Link>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}
