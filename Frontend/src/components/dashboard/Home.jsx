import React, { useState, useEffect } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

export const Home = ({ data }) => {
  const [categories, setCategories] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [stats, setStats] = useState({
    products: 0,
    categories: 0,
   
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const uniqueCategories = [...new Set(data.map(item => item.category))];
      setCategories(uniqueCategories);
      setFilteredData(data);
      setStats({
        products: data.length,
        categories: uniqueCategories.length,
       
      });
    }
  }, [data]);

  const handleCategoryFilter = (selectedCategory) => {
    if (selectedCategory === 'All') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => item.category === selectedCategory);
      setFilteredData(filtered);
    }
  };

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = data.filter(item =>
      item.title.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredData(filtered);
  };

  const chartData = filteredData.map((item) => ({
    name: item.title,
    price: item.Price,
    rating: item.rating,
  }));

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3 style={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif' }}>DASHBOARD</h3>
      </div>

      <div className='main-cards' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: '15px 0' }}>
        <div className='card' style={{ backgroundColor: '#2962ff', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '8px 15px', borderRadius: '5px' }}>
          <div className='card-inner' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontSize: '18px', margin: '0' }}>PRODUCTS</h3>
            <BsFillArchiveFill className='card_icon' style={{ fontSize: '25px' }} />
          </div>
          <h1 style={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontSize: '32px', margin: '0', textAlign: 'center' }}>{stats.products}</h1>
        </div>
        <div className='card' style={{ backgroundColor: '#ff6d00', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '8px 15px', borderRadius: '5px' }}>
          <div className='card-inner' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontSize: '18px', margin: '0' }}>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='card_icon' style={{ fontSize: '25px' }} />
          </div>
          <div>
            <select className='category-select' onChange={(e) => handleCategoryFilter(e.target.value)} style={{ color: '#ffffff', fontFamily: 'Montserrat, sans-serif', fontSize: '16px', backgroundColor: '#1d2634', border: '1px solid #ccc', borderRadius: '5px', padding: '8px', width: '100%' }}>
              <option value='All'>All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className='charts' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '60px', height: '300px', paddingRight:"10px" }}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#8884d8" />
            <Bar dataKey="rating" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="rating" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};
