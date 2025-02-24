import React from 'react'
import DetailHero from '../components/detailPage/DetailHero'
import Description from '../components/detailPage/Description'
import BestSellerProductCard from '../components/homePage/BestSellerProductsCard'
import Brands from '../components/shopPage/Brands';

const ProductDetailPage = () => {
  return (
    <div>
        <DetailHero/>
        <Description/>
        <BestSellerProductCard/>
        <Brands />
    </div>
  )
}


export default ProductDetailPage;