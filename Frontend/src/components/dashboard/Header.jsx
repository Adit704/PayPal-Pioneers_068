import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

export const Header = ({ OpenSidebar, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
            type='text' 
            value={searchQuery} 
            onChange={handleSearchChange} 
            placeholder='Search...' 
            className='search-input'
          />
          <button type='submit' className='search-button' style={{ color:"white"}}>
            <BsSearch className='icon'/>
          </button>
        </form>
      </div>
      <div className='header-right' style={{display:"flex",justifyContent:"center",alignItems:"center", gap:"20px", color:"white"}}>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  );
};
