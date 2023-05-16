import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/projectSize/proSize.css';
import '../components/projectSize/prostyle.css';
import PRODUCTS from '../data2.js';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SingleProduct = () => {
  const [selectedTopping, setSelectedTopping] = useState('');

  useEffect(() => {
    const savedTopping = localStorage.getItem('selectedTopping');
    if (savedTopping) {
      setSelectedTopping(savedTopping);
    }
  }, []);

  const handleToppingChange = (e) => {
    const topping = e.target.value;
    setSelectedTopping(topping);
    localStorage.setItem('selectedTopping', topping);
  };

  const filteredProducts = selectedTopping
    ? PRODUCTS.filter((product) => product.topping === selectedTopping)
    : PRODUCTS;

  return (
    <main>
      <div className="container content">
        <div className="row products-row">
          <FormControl variant="outlined" className="topping-select">
            <InputLabel id="topping-label">Filter by Topping</InputLabel>
            <Select
              labelId="topping-label"
              value={selectedTopping}
              onChange={handleToppingChange}
              label="Filter by Topping"
            >
              <MenuItem value="">All Toppings</MenuItem>
              {PRODUCTS.map((product) => (
                <MenuItem key={product.id} value={product.topping}>
                  {product.topping}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {filteredProducts.map(({ id, image, name, details, topping, price }) => (
            <div className="col-lg-4" key={id}>
              <div className="card">
                <div className="img-wrap">
                  <img src={image} alt="" className="fixed-size-image" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{details}</p>
                  <span>
                    Topping: <strong className="price">{topping}</strong>
                  </span>

                  <div className="d-flex justify-content-between align-items-center">
                    <span>
                      Price: <strong className="price">{price}</strong>
                    </span>

                    <Link to={`/products/${id}`} className="btn btn-primary btn-sm">
                      VIEW &#8594;
                    </Link>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
