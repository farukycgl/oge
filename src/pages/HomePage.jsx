import React from "react";
import EditorsProductsCard from "../components/temp/EditorsProductsCard";
import BestSellerProductsCard from "../components/temp/BestSellerProductsCard";
import SliderSection from "../components/SliderSection";
import BottomHero from "../components/temp/BottomHero";
import FeaturedProductsCard from "../components/temp/FeaturedProductsCard";


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