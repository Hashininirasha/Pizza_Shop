import React, { useState } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { Card, CardContent, CardMedia, Button } from '@material-ui/core';
import PRODUCTS from '../data2';
import '../components/projectSize/proSize.css'
import '../components/projectSize/prostyle.css'

const SingleProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { pathname } = useLocation();

  // get products with the same id
  const matchingProducts = PRODUCTS.filter((product) => product.id === parseInt(productId));

  // State to hold the selected topping name for filtering
  const [selectedTopping, setSelectedTopping] = useState('');

  // Filter matching products based on selected topping name
  const filteredProducts = selectedTopping
    ? matchingProducts.filter((product) => product.topping === selectedTopping)
    : matchingProducts;

  // Array of unique topping names for dropdown options
  const toppingNames = Array.from(new Set(PRODUCTS.map((product) => product.topping)));

  return (
    <main>
      <div className="container content">
        {/* Dropdown for selecting topping name */}
        <div className="row mb-3">
          <div className="col-lg-12">
            <select
              className="form-select"
              value={selectedTopping}
              onChange={(e) => setSelectedTopping(e.target.value)}
            >
              <option value="">All Toppings</option>
              {toppingNames.map((topping) => (
                <option key={topping} value={topping}>
                  {topping}
                </option>
              ))}
            </select>
            <br />
            <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
              BACK TO CATEGORY
            </Button>{' '}
            &nbsp;
          </div>
        </div>
        {filteredProducts.map((product) => (
          <div className="card fade-in-card">
          <div className="row" key={product.id}>
            <div className="col-lg-5">
              <Card>
                <CardMedia component="img" src={product.image} alt="" className="fixed-size-image" />
              </Card>
            </div>
            <div className="col-lg-7">
              <CardContent>
                <h2>{product.name}</h2>
                <p className="price">
                  <strong>{product.price}</strong>
                </p>
                <p>{product.details}</p>
                <br />
              </CardContent>
            </div>
            <hr />
          </div>
          </div>
        ))}
      </div>
      
    </main>
  );
};

export default SingleProduct;
