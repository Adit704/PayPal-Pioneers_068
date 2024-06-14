import React, { useState, useEffect } from 'react';
import './dashstyle/dash.css';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Home } from './Home';

export const DashBoard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [stats, setStats] = useState({
    products: 0,
    categories: 27, // Assuming a static value for demo purposes
  });

  useEffect(() => {
    fetch('https://paypal-pioneers-068.onrender.com/catalog')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setFilteredData(data); // Initialize filteredData with all data
        setStats({
          products: data.length,
          categories: 27,
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = data.filter(item => item.title.toLowerCase().includes(lowercasedQuery));
    setFilteredData(filtered);
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} onSearch={handleSearch} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home data={filteredData} stats={stats} />
    </div>
  );
};
