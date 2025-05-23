import React, { useState } from "react";

const mockData = [
  {
    name: "Protein Bowl",
    category: "Main Course",
    calories: 520,
    allergens: "None",
    cost: 259,
    overhead: 77.7,
    subtotal: 336.7,
    profit: 168.35,
    price: 505.05,
  },
  {
    name: "Grilled Chicken Salad",
    category: "Salad",
    calories: 350,
    allergens: "Gluten, Egg",
    cost: 215,
    overhead: 64.5,
    subtotal: 279.5,
    profit: 139.75,
    price: 419.25,
  },
  {
    name: "Quinoa Veggie Bowl",
    category: "Vegetarian Bowl",
    calories: 430,
    allergens: "Sesame, Legumes",
    cost: 126,
    overhead: 37.8,
    subtotal: 163.8,
    profit: 81.9,
    price: 245.7,
  },
];

function App() {
  const [search, setSearch] = useState("");

  const filtered = mockData.filter((dish) =>
    dish.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>Well-Fit Menu Dashboard</h1>
      <input
        type="text"
        placeholder="Search dish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '8px', marginBottom: '20px', width: '300px' }}
      />
      <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Calories</th>
            <th>Allergens</th>
            <th>Cost (KES)</th>
            <th>Overhead</th>
            <th>Subtotal</th>
            <th>Profit</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((dish, idx) => (
            <tr key={idx}>
              <td>{dish.name}</td>
              <td>{dish.category}</td>
              <td>{dish.calories}</td>
              <td>{dish.allergens}</td>
              <td>{dish.cost}</td>
              <td>{dish.overhead}</td>
              <td>{dish.subtotal}</td>
              <td>{dish.profit}</td>
              <td>{dish.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;