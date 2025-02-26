import React from "react";
import EditorsProductsCard from "../components/homePage/EditorsProductsCard";
import BestSellerProductsCard from "../components/homePage/BestSellerProductsCard";
import SliderSection from "../components/SliderSection";
import BottomHero from "../components/homePage/BottomHero";
import FeaturedProductsCard from "../components/homePage/FeaturedProductsCard";


const HomePage = () => {

    return (
        <div className="overflow-x-hidden">
            <SliderSection />
            <EditorsProductsCard />
            <BestSellerProductsCard/>
            <SliderSection />
            <BottomHero />
            <FeaturedProductsCard />
        </div>
    )
}

export default HomePage;