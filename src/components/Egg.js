import React from 'react'
import eggimg from '../assets/desktop/image-transform.jpg';

function Egg() {
    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-6/12 flex">
                <div className="flex flex-col p-8 md:p-32 justify-center items-center text-center md:text-left md:items-baseline">
                    <h1 className="font-fraunces text-4xl font-black">Transform your <br /> brand</h1>
                    <p className="font-barlow text-base text-gray py-8">We are a full-service creative agency specializing in helping
                        brands grow fast. Engage your clients through compelling visuals
                        that do most of the marketing for you.
                    </p>
                    <div className="flex p-1">
                        <div className="font-fraunces text-sm font-black bg-gradient-to-t from-yellow-100 via-white to-white px-2 hover:from-yellow-100 cursor-pointer">
                            LEARN MORE
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-6/12 bg-yellow-300">
                <img src={eggimg} alt={"eggimg"} />
            </div>
        </div>
    )
}

export default Egg
