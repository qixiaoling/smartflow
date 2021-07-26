import React from 'react';
import HeroSection from "./HeroSection";
import Tile from "./Tile";
import Clients from "./Clients";
import Footer from "./Footer";

function Home(){
    return(
        <>
            <HeroSection />
            <Tile/>
            <Clients />
            <Footer />
        </>
    )
}
export default Home