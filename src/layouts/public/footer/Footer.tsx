import React from 'react'
import FooterForm from './footer-form/FooterForm'
import FooterInformation from './footer-infomation/FooterInformation'
import FooterService from './footer-service/FooterService'
import FooterContact from './footer-contact/FooterContact'
import FooterBottom from './footer-bottom/FooterBottom'
import './style.scss'

export default function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className="info-section">
          <FooterForm/>
          <FooterInformation />
          <FooterService/>
          <FooterContact/>
        </div>
        <div className="company-section">
          <FooterBottom/>
        </div>
    </div>
  )
}
