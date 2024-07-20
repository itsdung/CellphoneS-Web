import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './style.scss'

interface SearchBarProps {
    onClick: () => void;
}

export default function SearchBar({ onClick }: SearchBarProps) {
  return (
    <div className='header-search' onClick={onClick}>
        <div className='search-container'>
            <FaSearch className='search-icon'/>
            <input className='search-input' type="text" placeholder="Bạn cần tìm gì?"></input>
        </div>
    </div>
  )
}
