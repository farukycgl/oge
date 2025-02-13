import React from "react";
import Hero from "../components/HomePage/Hero";
import EditorsProductsCard from "../components/HomePage/EditorsProductsCard";
import BestSellerProductsCard from "../components/HomePage/BestSellerProductsCard";

const HomePage = () => {

    return (
        <>
            <Hero />
            <EditorsProductsCard />
            <BestSellerProductsCard/>
        </>
    )
}

export default HomePage;