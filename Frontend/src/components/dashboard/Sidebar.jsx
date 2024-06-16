import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from 'react-icons/bs';

export const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  const navigate = useNavigate();

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item' onClick={() => navigate('/dashboard')}>
          <BsGrid1X2Fill className='icon' /> Dashboard
        </li>
        <li className='sidebar-list-item' onClick={() => navigate('/products')}>
          <BsFillArchiveFill className='icon' /> Products
        </li>
        <li className='sidebar-list-item' onClick={() => navigate('/categories')}>
          <BsFillGrid3X3GapFill className='icon' /> Categories
        </li>
        <li className='sidebar-list-item' onClick={() => navigate('/customers')}>
          <BsPeopleFill className='icon' /> Customers
        </li>
        <li className='sidebar-list-item' onClick={() => navigate('/inventory')}>
          <BsListCheck className='icon' /> Inventory
        </li>
        <li className='sidebar-list-item' onClick={() => navigate('/reports')}>
          <BsMenuButtonWideFill className='icon' /> Reports
        </li>
        <li className='sidebar-list-item' onClick={() => navigate('/settings')}>
          <BsFillGearFill className='icon' /> Settings
        </li>
      </ul>
    </aside>
  );
};
