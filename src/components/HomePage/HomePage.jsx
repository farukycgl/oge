import React from "react";
import Hero from "./Hero";
import EditorsProductsCard from "./EditorsProductsCard";
import BestSellerProductsCard from "./BestSellerProductsCard";

const HomePage = () => {

    return (
        <>
            <Hero />
            <EditorsProductsCard />
            <BestSellerProductsCard />
        </>
    )
}

export default HomePage;