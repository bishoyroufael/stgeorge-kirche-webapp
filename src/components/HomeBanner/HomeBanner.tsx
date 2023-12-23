import React from "react";
import { ThreeDots } from "react-loader-spinner";


export const HomeBanner = ({ image, quote, eventCard }): React.JSX.Element => {
    return (
        <div className="relative flex justify-center bg-cover bg-center items-center h-[60vh]">
            {/* Image with Opacity */}
            <img
                className="absolute inset-0 bg-center w-full rounded-xl opacity-10 h-full object-cover"
                src={image}
            />

            {/* Centered Column */}
            <div className="text-white text-center z-10 space-y-10" data-aos="fade-in">

                {/* Quote */}
                <blockquote className="italic text-2xl lg:text-4xl text-c-main font-bold">
                    {quote}
                </blockquote>

                {eventCard == undefined ? <div className="flex items-center justify-center"> <ThreeDots width={50}/> </div> :
                    <div className="w-full flex justify-center">
                        <div className="w-[80%] md:w-[50%]">
                            {eventCard}
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}