import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';

export default function App() {

  const [query, setquery] = useState('');

  const search = async (e) => {
    if(e.key === 'Enter') {
      const data = await fetchWeather(query)

      console.log(data);
    }
  }

  return (
    <div className="main-container">
      <input 
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setquery(e.target.value)}
        onKeyPress={search}
      />
    </div>
  )
}
