import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import ShoesList from '../components/ShoesList';

function Home() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    // Fetch shoe data from the backend API
    axios.get('/api/shoes')
      .then(response => {
        setShoes(response.data);
      })
      .catch(error => {
        console.error('Error fetching shoe data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to Shoes Store</h1>
      <SearchBar />
      <ShoesList shoes={shoes} />
    </div>
  );
}

export default Home;
