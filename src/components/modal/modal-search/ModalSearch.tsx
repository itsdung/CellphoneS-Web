import { allProductData } from '@/constants/all-products/AllProductConstants';
import React, { useEffect, useState } from 'react';
import './style.scss';
import Link from 'next/link';
import Image from 'next/image';


interface SearchModalProps {
    searchTerm: string;
    onClose: () => void;
}

export default function SearchModal({searchTerm, onClose} : SearchModalProps) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredData = allProductData.filter(item => 
        item.name.toLowerCase().includes(lowerCaseSearchTerm)
    ).slice(0, 5);

    const suggestedItems = allProductData.filter(item =>
        item.suggest === true && item.name.toLowerCase().includes(lowerCaseSearchTerm)
    ).slice(0, 10);

    return (
        <div className='search-modal' onClick={onClose}>
            <div className="search-modal-wrapper" onClick={(e) => e.stopPropagation()}>
                {filteredData.length > 0 && (
                    <div className="search-modal-title">
                        <p>Có phải bạn muốn tìm</p>
                    </div>
                )}
                <div className="search-modal-content">
                    {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                            <Link href='/'>
                                <div key={index} className="search-modal-item">
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className='no-product-text'>Không tìm thấy sản phẩm</p>
                    )}
                </div>

                {suggestedItems.length > 0 && (
                    <div className="search-modal-suggestions">
                        <div className="search-modal-suggestions-title">
                            <p>Sản phẩm gợi ý</p>
                        </div>
                        <div className="search-modal-suggestions-content">
                            {suggestedItems.map((item) => (
                                <Link key={item.id} href='/'>
                                    <div className="search-modal-suggestion-item">
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                        />
                                        <div className="search-modal-suggestion-details">
                                            <p className="suggestion-name">{item.name}</p>
                                            <div className="suggestion-price">
                                                <p className="suggestion-newprice">{item.newpri.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                                <p className="suggestion-oldprice">{item.oldpri.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
