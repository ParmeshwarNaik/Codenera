import React from 'react'
import c1 from "../Assets/Imges/c1.jfif"
import Product  from './Product';
const Productlist = () => {
    const products = [
        { name: 'ProductA', imageUrl: c1 },
        { name: 'ProductB', imageUrl: c1 },
        { name: 'ProductC', imageUrl: c1 },
        { name: 'ProductA', imageUrl: c1 },
        { name: 'ProductB', imageUrl: c1 },
       
      ];
    
      return (
        <div>
          
          <div className="product-list" style={{display:"flex" }}>
            {products.map((product, index) => (
              <Product key={index} name={product.name} imageUrl={product.imageUrl} />
            ))}
          </div>
        </div>
      );
            }

export default Productlist;