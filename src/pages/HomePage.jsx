import React from "react";
import EditorsProductsCard from "../components/HomePage/EditorsProductsCard";
import BestSellerProductsCard from "../components/HomePage/BestSellerProductsCard";
import SliderSection from "../components/SliderSection";
import BottomHero from "../components/HomePage/BottomHero";
import FeaturedProductsCard from "../components/HomePage/FeaturedProductsCard";


const HomePage = () => {

    return (
        <>
            <SliderSection />
            <EditorsProductsCard />
            <BestSellerProductsCard/>
            <SliderSection />
            <BottomHero />
            <FeaturedProductsCard />
        </>
    )
}

export default HomePage;