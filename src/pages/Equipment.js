import React from 'react';

const equipmentData = [
  { id: 1, name: 'Tractor', price: 'Rs 5,00,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDUp8QZeuwhs35pCruDCikCu4BYDKjaFyDwg&s' },
  { id: 2, name: 'Plow', price: 'Rs 50,000', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Seeder', price: 'Rs 75,000', image: 'https://via.placeholder.com/150' },
];

function Equipment() {
  return (
    <div className="equipment-page">
      <h2>Agricultural Equipment</h2>
      <div className="product-list">
        {equipmentData.map(item => (
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

export default Equipment;
