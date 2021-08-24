import React from 'react'
import emily from '../assets/image-emily.jpg';
import thomas from '../assets/image-thomas.jpg';
import jennie from '../assets/image-jennie.jpg';

function Testimonial() {
    return (
        <div className="bg-red-50">
            <div className="flex flex-col justify-center items-center p-8 md:p-20">
                <h1 className="font-fraunces text-gray-400 text-base md:text-lg text-center tracking-testi">CLIENT TESTIMONIALS</h1>
                <div className="flex flex-col md:flex-row py-8 md:p-16">
                    <div className="flex flex-col justify-center items-center text-center px-2 md:px-5">
                        <img src={emily} alt={"emily"} className="w-16 rounded-full" />
                        <p className="font-barlow text-gray-700 py-8 md:py-16 leading-7">
                            We put our trust in Sunnyside and they delivered, 
                            making sure our needs were met and deadlines were always hit.
                        </p>
                        <h3 className="font-fraunces font-black text-base text-gray-800 pb-2">Emily R.</h3>
                        <p className="font-barlow text-xs text-gray-400">Marketing Director</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center px-2 md:px-5 py-8 md:py-0">
                        <img src={thomas} alt={"thomas"} className="w-16 rounded-full" />
                        <p className="font-barlow text-gray-700 py-8 md:py-16 leading-7">
                            Sunnyside’s enthusiasm coupled with their keen interest in our 
                            brand’s success made it a satisfying and enjoyable experience.
                        </p>
                        <h3 className="font-fraunces font-black text-base text-gray-800 pb-2">Thomas S.</h3>
                        <p className="font-barlow text-xs text-gray-400">Chief Operating Officer</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center px-2 md:px-5">
                        <img src={jennie} alt={"jennie"} className="w-16 rounded-full" />
                        <p className="font-barlow text-gray-700 py-8 md:py-16 leading-7">
                            Incredible end result! Our sales increased over 400% when we 
                            worked with Sunnyside. Highly recommended!
                        </p>
                        <h3 className="font-fraunces font-black text-base text-gray-800 pb-2">Jennie F.</h3>
                        <p className="font-barlow text-xs text-gray-400">Business Owner</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
