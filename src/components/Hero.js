import React from 'react'
import arrow from '../assets/icon-arrow-down.svg';

function Hero() {
    return (
        <div>
            <div className="flex justify-center items-center font-black text-white md:text-6xl text-4xl text-center font-fraunces tracking-widest pt-14 md:py-10">
                WE ARE CREATIVES
            </div>
            <div className="py-10">
                <img src={arrow} alt={"arrow"} className="m-auto" />
            </div>
        </div>
    )
}

export default Hero
