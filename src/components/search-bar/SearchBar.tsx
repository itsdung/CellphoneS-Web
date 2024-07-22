'use client';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './style.scss'
import { IoCloseOutline } from 'react-icons/io5';

interface SearchBarProps {
  onClick: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCloseSearch: () => void;
  searchTerm: string;
}

export default function SearchBar({ onClick, onChange, onCloseSearch, searchTerm }: SearchBarProps) {
  return (
      <div className='header-search' onClick={onClick}>
          <div className='search-container'>
              <FaSearch className='search-icon'/>
              <input 
                  className='search-input' 
                  type="text" 
                  placeholder="Bạn cần tìm gì?" 
                  onChange={onChange} 
                  value={searchTerm}
              />
              {searchTerm && (
                <IoCloseOutline 
                  className='close-icon' 
                  onClick={onCloseSearch} 
                  aria-label="Đóng tìm kiếm"
                />
              )}
          </div>
      </div>
  )
}