import React from 'react'
import TileCard from "./Component/TileCard";
import mcDonald from './Assets/mcDonald.jpg'
import sixSigma from './Assets/ATS_Six_Sigma.jpg'
import sixSigma2 from './Assets/402220484.jpg'
import sixSigma3 from './Assets/3.jpg'
import building from './Assets/building.jpg'
import puzzle from './Assets/puzzle.jpg'
import bitcoin from './Assets/bitcoin.jpeg'
import '../src/Tile.css'

function Tile() {
    return(
        <div className='tile-container'>
            {/*<div className='inner-tile-container'>*/}
                <TileCard id='one'
                    title = '6 unexpected ways Six Sigma can benefit your company'
                    content = 'Six Sigma is a management methodology which allows companies to use data to eliminate
                defects in any process. For a process to have achieved Six Sigma, a process must not produce a defect
                 - that is anything outside of customer specifications
                 - more often than 3.4 times per million opportunities.'
                    path='/news'
                />
                <TileCard id='two'
                    imgUrl = {sixSigma}
                />
                <TileCard id='three'
                    imgUrl = {bitcoin}
                />
                <TileCard id='four'
                    title = 'Coinbase, Executives, Investors Hit With Lawsuit Over Nasdaq Listing'
                    content = 'A class-action lawsuit has been filed against cryptocurrency exchange Coinbase,
                    its executives, and investors over the company’s direct listing on Nasdaq. “According to the
                    complaint, the registration statement and prospectus used to effectuate the company’s offering
                    were false and misleading,” the lawsuit alleges.'
                    path='/news'
                />
            {/*</div>*/}
        </div>

    )
}
export default Tile