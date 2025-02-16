import React from 'react'
import ProductCollection from '../components/shopPage/ProductCollection';
import ProductsListing from '../components/shopPage/ProductsListing';
import ProductFilter from '../components/shopPage/ProductFilter';
import Brands from '../components/shopPage/Brands';

const ShopPage = () => {

  return (
    <div>
        <ProductCollection />
        <ProductFilter />
        <ProductsListing />
        <Brands />
    </div>
  )
}

export default ShopPage;