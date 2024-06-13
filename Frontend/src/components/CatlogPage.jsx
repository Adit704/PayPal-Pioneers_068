import React, { useState, useEffect } from 'react';

const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};



const CatalogPage = () => {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      let res = await getData(url);
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData('https://paypal-pioneers-068.onrender.com/Products'); 
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default CatalogPage;
