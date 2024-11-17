import React from 'react'

import { ButtonPrimary, ButtonOutline } from './Button'

const Hero = () => {
  return (
   <section
    id="home"
    className="pt-28 lg:pt-36"
   >

    <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div>

            <div className="flex items-center gap-3">
                <figure className="img-box w-9 h-9 rounded-full">
                    <img
                     src="/images/avatar-1.jpg"
                     width={40}
                     height={40}
                     alt="Dirk van Tonder portrait"
                     className="img-cover"
                     />
                </figure>

                <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                    <span className="relative w-1 h-3 rounded-full bg-emerald-400">
                        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                    </span>

                    Available for work
                </div>
            </div>

            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future    
            </h2>

            <div className="flex items-center gap-3">
                <ButtonPrimary
                    href="https://docs.google.com/document/d/e/2PACX-1vQGULmSDM0umoUjtfdhzeFtZHa046MeyErsoj2fWTHSeyMDqNcGbLp8Vr3Jv8Zo3z4DMvSYzuSM18ke/pub"
                    label="View Resume"
                    icon="download"
                />

                <ButtonOutline
                href="#about"
                label="Scroll donw"
                icon="arrow_downward"
                />
            </div>

        </div>
    </div>

   </section> 
  )
}

export default Hero
