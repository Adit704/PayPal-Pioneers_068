import React, { useState } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Header = ({ OpenSidebar, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <header className='header' style={{ backgroundColor: '#1d2634', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft:"13%", boxShadow: '0 6px 7px -3px rgba(0, 0, 0, 0.35)', height: '60px' }}>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} style={{ fontSize: '20px', cursor: 'pointer' }} />
      </div>
      <div className='header-left'>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type='text'
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder='Search...'
            className='search-input'
            style={{ padding: '8px', marginRight: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px', color: '#333', backgroundColor: '#fff' }}
          />
          <button type='submit' className='search-button' style={{ padding: '8px 12px', border: '1px solid', color: 'black', borderRadius: '5px', cursor: 'pointer', marginLeft:"10px", backgroundColor:"white"}}>
            <BsSearch className='icon' style={{ fontSize: '20px' }} />
          </button>
        </form>
      </div>
      <div className='header-right' style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <BsFillBellFill className='icon' style={{ fontSize: '24px', cursor: 'pointer' }} />
        <BsFillEnvelopeFill className='icon' style={{ fontSize: '24px', cursor: 'pointer' }} />
        <Link to='/login'><BsPersonCircle className='icon' style={{ fontSize: '24px', cursor: 'pointer' }} /> </Link>
      </div>
    </header>
  );
};
