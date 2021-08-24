import React from 'react'
import susu from '../assets/desktop/image-gallery-milkbottles.jpg'
import orange from '../assets/desktop/image-gallery-orange.jpg'
import cone from '../assets/desktop/image-gallery-cone.jpg'
import sugar from '../assets/desktop/image-gallery-sugarcubes.jpg'

function Image() {
    return (
        <div>
            <div className="md:flex grid grid-cols-2">
                <div className="w-full md:w-1/4">
                    <img src={susu} alt={"susu"} />
                </div>
                <div className="w-full md:w-1/4">
                    <img src={orange} alt={"orange"} />
                </div>
                <div className="w-full md:w-1/4">
                    <img src={cone} alt={"cone"} />
                </div>
                <div className="w-full md:w-1/4">
                    <img src={sugar} alt={"sugar"} />
                </div>
            </div>
        </div>
    )
}

export default Image
