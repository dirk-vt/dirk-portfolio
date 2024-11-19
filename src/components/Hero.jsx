import React from 'react'

import { ButtonPrimary, ButtonOutline } from './Button'

const Hero = () => {
  return (
   <section
    id="home"
    className="pt-28 lg:pt-36 items-center"
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

                <div className="flex items-center gap-1.5 text-zinc-900 text-sm tracking-wide">
                    <span className="relative w-1 h-3 rounded-full bg-blue-500">
                        <span className="absolute inset-0 rounded-full bg-sky-200 animate-ping"></span>
                    </span>

                    Available for work
                </div>
            </div>

            <div className="max-w-[100ch] sm:max-w-[100ch] lg:max-w-[40ch] mt-5 mb-8 lg:mb-10">
                <span className="headline-3">
                    Hi there
                </span>
                    <br />
                <span className="headline-3"> 
                    I'm <span className="headline-4">Dirk van Tonder</span>,
                </span>
                    <br />
                <span className="headline-4">
                    a Frontend Developer
                </span>
            </div>

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
                className="active:text-zinc-50"
                />
            </div>

        </div>
    </div>

   </section> 
  )
}

export default Hero
