import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';

export default function App() {

  const [query, setquery] = useState('');

  return (
    <div className="main-container">
      <input 
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
    </div>
  )
}
