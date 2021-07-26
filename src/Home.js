import React from 'react';
import HeroSection from "./HeroSection";
import Tile from "./Tile";
import Clients from "./Clients";
function Home(){
    return(
        <>
            <HeroSection />
            <Tile/>
            <Clients />
        </>
    )
}
export default Home