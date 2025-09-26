import React from 'react';

const fertilizerData = [
  { id: 1, name: 'Urea', price: 'Rs 1,200', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'DAP', price: 'Rs 2,500', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Potash', price: 'Rs 800', image: 'https://via.placeholder.com/150' },
];

function Fertilizers() {
  return (
    <div className="fertilizers-page">
      <h2>Fertilizers</h2>
      <div className="product-list">
        {fertilizerData.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fertilizers;
