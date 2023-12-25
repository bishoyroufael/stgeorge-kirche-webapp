import React from "react";
import { FaAngleRight } from "react-icons/fa";


export const InfoCard = ({ image, headerText, pa, pb, pc, pd, url, bgImage }:
    { image: string, headerText: string, pa: string, pb: string, pc?: string, pd?: string, url?: string, bgImage?: string }): React.JSX.Element => {
    return (
        <div className={"flex border font-roboto rounded-md p-6 shadow-md flex-row space-x-8 bg-c-background"}
            style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>

            <div>
                <img src={image} alt="Image" className="w-46 h-46 object-cover" />
            </div>

            <div className="flex flex-col drop-shadow-x">
                <h2 className="text-3xl font-bold mb-2">{headerText}</h2>

                <div className="mb-1">{pa}</div>
                <div className="mb-1">{pb}</div>
                <div className="mb-1">{pc}</div>
                <div className="mb-1">{pd}</div>

                {url &&
                    <div className="flex items-center gap-x-2">
                        <a href={url} className="text-c-main hover:underline">Karte</a>
                        <FaAngleRight size={15} />
                    </div>
                }
            </div>
        </div>
    )
}
