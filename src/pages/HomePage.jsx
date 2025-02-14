import React from "react";
import EditorsProductsCard from "../components/HomePage/EditorsProductsCard";
import BestSellerProductsCard from "../components/HomePage/BestSellerProductsCard";
import SliderSection from "../components/SliderSection";
import BottomHero from "../components/HomePage/BottomHero";

const HomePage = () => {

    return (
        <>
            <SliderSection />
            <EditorsProductsCard />
            <BestSellerProductsCard/>
            <SliderSection />
            <BottomHero />
        </>
    )
}

export default HomePage;