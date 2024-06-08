import React from 'react';

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      margin: '20px 0',
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <input 
        type="text" 
        placeholder="Search by title" 
        onChange={(e) => setFilterTitle(e.target.value)}
        style={{
          flex: 1,
          marginRight: '10px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px',
          transition: 'border-color 0.3s, box-shadow 0.3s'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#007bff';
          e.target.style.boxShadow = '0 0 5px rgba(0, 123, 255, 0.5)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#ccc';
          e.target.style.boxShadow = 'none';
        }}
      />
      <input 
        type="number" 
        placeholder="Search by rating" 
        onChange={(e) => setFilterRating(e.target.value)}
        style={{
          flex: 1,
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '16px',
          transition: 'border-color 0.3s, box-shadow 0.3s'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#007bff';
          e.target.style.boxShadow = '0 0 5px rgba(0, 123, 255, 0.5)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#ccc';
          e.target.style.boxShadow = 'none';
        }}
      />
    </div>
  );
};

export default Filter;
