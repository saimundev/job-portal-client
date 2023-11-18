import React from 'react'
import Marquee from "react-fast-marquee";

const TrustUs = () => {
    return (
        <div className='mt-20'>
            <h2 className='mb-8 text-4xl font-medium text-center'>DashJob is trusted by</h2>
            <div className=" py-6 bg-white rounded-lg">
                <Marquee speed={100} gradient gradientWidth={100} gradientColor="rgb(248,251,254)" className=" space-x-16">
                    <div className="flex gap-32">
                        <img src="https://jobjack.co.za/assets/img/companyLogos/kfcsmallt.png" alt="brand-image" className='grayscale w-28 h-28 object-cover' />
                        <img src="https://jobjack.co.za/assets/img/companyLogos/absolutepetssmall.png" alt="brand-image" className='grayscale w-28 h-28 object-cover' />
                        <img src="https://jobjack.co.za/assets/img/companyLogos/Engen%20Logo.png" alt="brand-image" className='grayscale w-28 h-28 object-cover' />
                        <img src="https://jobjack.co.za/assets/img/companyLogos/kauaismall.png" alt="brand-image" className='grayscale w-28 h-28 object-cover' />
                        <img src="https://jobjack.co.za/assets/img/companyLogos/Engen%20Logo.png" alt="brand-image" className='grayscale w-28 h-28 object-cover' />
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default TrustUs