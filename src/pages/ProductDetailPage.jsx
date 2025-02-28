import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../store/actions/productActions';
import DetailHero from '../components/detailPage/DetailHero';
import Description from '../components/detailPage/Description';
import BestSellerProductsCard from '../components/homePage/BestSellerProductsCard';
import Brands from '../components/shopPage/Brands';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { productLoading } = useSelector(state => state.product);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId]);

  if (productLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <DetailHero />
      <Description/>
      <BestSellerProductsCard/>
      <Brands />
    </div>
  );
};

export default ProductDetailPage;