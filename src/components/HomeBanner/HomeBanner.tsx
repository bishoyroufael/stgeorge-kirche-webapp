import React from "react";

export const HomeBanner = ({image, quote, eventCard}): React.JSX.Element => {
    return (
        <div className="relative flex justify-center bg-cover bg-center min-h-[650px]">
            {/* Image with Opacity */}
            <img
                className="absolute inset-0 bg-cover bg-center w-full"
                src={ image }
                style={{ opacity: 0.2 }}
            />

            {/* Centered Column */}
            <div className="text-white text-center relative z-10 space-y-20 pt-40">

                {/* Quote */}
                <blockquote className="italic text-4xl text-c-black font-bold">
                    {quote}
                </blockquote>
                
               {eventCard} 

            </div>
        </div>

    )
}