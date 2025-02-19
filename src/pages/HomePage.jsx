import React from "react";

import BestSellerProductsCard from "../components/homePage/BestSellerProductsCard";
import SliderSection from "../components/SliderSection";
import BottomHero from "../components/homePage/BottomHero";
import FeaturedProductsCard from "../components/homePage/FeaturedProductsCard";


const HomePage = () => {

    return (
        <>
            <SliderSection />

            <BestSellerProductsCard/>
            <SliderSection />
            <BottomHero />
            <FeaturedProductsCard />
        </>
    )
}

export default HomePage;