import React, { useEffect, useState } from 'react'
import './Home.css'

const data = [
  { materialName: 'Silk', category: 'Men', unitPrice: 75, inStock: 850, discount: 3, totalValue: 61200, inSite: 'Dindigul' },
  { materialName: 'Cryon', category: 'Women', unitPrice: 76, inStock: 600, discount: 2, totalValue: 44400, inSite: 'Madurai' },
  { materialName: 'Cryon', category: 'Kids', unitPrice: 305, inStock: 50, discount: 5, totalValue: 15000, inSite: 'Trichy' },
  { materialName: 'Silk', category: 'Men', unitPrice: 3200, inStock: 6, discount: 200, totalValue: 18000, inSite: 'Dindigul' },
  { materialName: 'Cotton', category: 'Women', unitPrice: 3100, inStock: 4, discount: 100, totalValue: 12000, inSite: 'Madurai' },
  { materialName: 'Cotton', category: 'Others', unitPrice: 4100, inStock: 5.5, discount: 100, totalValue: 22550, inSite: 'Madurai' },
];

export const Home = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [selectedRow, setSelectedRow] = useState(null);

  const filteredData = data
    .filter(item => item.materialName.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(item => (filterCategory ? item.category === filterCategory : true))
    .sort((a, b) => {
      if (sortConfig.key) {
        if (sortConfig.direction === 'asc') {
          return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
        } else {
          return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
        }
      }
      return data;
    });

  const requestSort = key => { 
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="App">
      <h2>Inventory Summary</h2>
      <div className="controls">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select onChange={e => setFilterCategory(e.target.value)} value={filterCategory}>
          <option value="">All Categories</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div className="sort-buttons">
        <button onClick={() => requestSort('unitPrice')}>Sort by Unit Price</button>
        <button onClick={() => requestSort('inStock')}>Sort by In Stock</button>
        <button onClick={() => requestSort('discount')}>Sort by Discount</button>
        <button onClick={() => requestSort('totalValue')}>Sort by Total Value</button>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Material Name</th>
            <th>Category</th>
            <th>Unit Price</th>
            <th>In Stock</th>
            <th>Discount</th>
            <th>Total Value</th>
            <th>In Site</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => setSelectedRow(item)}
                  checked={selectedRow === item}
                />
              </td>
              <td>{item.materialName}</td>
              <td>{item.category}</td>
              <td>₹{item.unitPrice}</td>
              <td>{item.inStock}</td>
              <td>₹{item.discount}</td>
              <td>₹{item.totalValue}</td>
              <td>{item.inSite}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedRow && (
        <div className="details">
          <h3>Details:</h3>
          <p>Material Name: {selectedRow.materialName}</p>
          <p>Category: {selectedRow.category}</p>
          <p>Unit Price: ₹{selectedRow.unitPrice}</p>
          <p>In Stock: {selectedRow.inStock}</p>
          <p>Discount: ₹{selectedRow.discount}</p>
          <p>Total Value: ₹{selectedRow.totalValue}</p>
          <p>In Site: {selectedRow.inSite}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
