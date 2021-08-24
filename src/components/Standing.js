import React from 'react'
import standimg from '../assets/desktop/image-stand-out.jpg';

function Standing() {
    return (
        <div className="flex flex-col-reverse md:flex-row-reverse">
            <div className="w-full md:w-6/12 flex">
                <div className="flex flex-col p-8 md:p-32 justify-center items-center text-center md:text-left md:items-baseline">
                    <h1 className="font-fraunces text-4xl font-black">Stand out to the <br /> right audience</h1>
                    <p className="font-barlow text-base text-gray py-8">
                        Using a collaborative formula of designers, researchers, 
                        photographers, videographers, and copywriters, we’ll build 
                        and extend your brand in digital places.
                    </p>
                    <div className="flex p-1">
                        <div className="font-fraunces text-sm font-black bg-gradient-to-t from-red-100 via-white to-white px-2 hover:from-red-100 cursor-pointer">
                            LEARN MORE
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-6/12 bg-red-400">
                <img src={standimg} alt={"standimg"} />
            </div>
        </div>
    )
}

export default Standing
