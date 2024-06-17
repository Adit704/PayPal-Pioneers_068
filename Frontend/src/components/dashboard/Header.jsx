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
        <div className="landing_page_header_login">
              <div className="landing_page_header_login_dropdown_parent">
                {!localStorage.getItem("user") && <FontAwesomeIcon
                  style={{color:"white"}}
                  className="landing_page_header_icons_children"
                  icon={faUser}
                  />}
                {localStorage.getItem("user") && <div style={{color:"white"}}>{JSON.parse(localStorage.getItem("user")).name}</div> }
              </div>
                

              <div className="landing_page_header_icons_login_dropdown">
                {!localStorage.getItem("user") && <div className="landing_page_header_icons_login_dropdown_children">
                  <Link to="/login">
                    {" "}
                    <p>Log In</p>
                  </Link>
                  <Link to="/register">
                    {" "}
                    <p>Sign Up</p>
                  </Link>
                </div>}
                {localStorage.getItem("user") &&  <div className="landing_page_header_icons_login_dropdown_children">
                  <p><Link to="/">Main Page</Link></p>
                  <p onClick={()=>{
                    localStorage.removeItem("user");
                    setReRender(prev =>!prev);
                  }} ><Link to='/login'>Sign out</Link></p>
                   </div>}
              </div>
            </div>
        {/* <BsPersonCircle className='icon' style={{ fontSize: '24px', cursor: 'pointer' }} />  */}
      </div>
    </header>
  );
};
