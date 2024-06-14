import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './dashstyle/dash.css';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Home } from './Home';
import { Product } from './Product';

export const DashBoard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://paypal-pioneers-068.onrender.com/Products')
      .then(response => response.json())
      .then(data => {
        setOriginalData(data);
        setFilteredData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = originalData.filter(item =>
      item.title.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredData(filtered);
  };

  return (
    <div className='grid-container' style={{ display: 'grid', height: '100vh' }}>
      <Sidebar OpenSidebar={openSidebar} openSidebarToggle={openSidebarToggle} />
      <div className='main-content' style={{ backgroundColor: '#f0f2f5' }}>
        <Header OpenSidebar={openSidebar} onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home data={filteredData} />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </div>
    </div>
  );
};
