import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './style.scss'
import DetailContent from './product-detail-content/DetailContent'
import ProductNavigator from './product-navigator/ProductNavigator'

export default function ProductDetailLayout() {
  return (
    <div className='product-detail-layout'>
        <Header/>
        <ProductNavigator/>
        <DetailContent/>
        <Footer/>
    </div>
  )
}
