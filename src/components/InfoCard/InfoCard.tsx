import React from "react";
import { FaAngleRight } from "react-icons/fa";


export const InfoCard = ({ image, headerText, pa, pb, pc, pd, url, fw}:
    { image: string, headerText:string, pa:string, pb:string, pc?:string, pd?:string, url?: string, fw? : boolean}): React.JSX.Element => {
    return (
        <div className={ fw ? "bg-c-background flex border font-roboto rounded-md p-6 shadow-md" : "bg-c-background flex border font-roboto rounded-md p-6 shadow-md w-1/2"}>

            <div className="flex-shrink-0 mr-4">
                <img src={image} alt="Church image" className="w-46 h-46 object-cover" />
            </div>

            <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-2">{headerText}</h2>

                <div className="mb-1">{pa}</div>
                <div className="mb-1">{pb}</div>
                <div className="mb-1">{pc}</div>
                <div className="mb-1">{pd}</div>

                {url &&
                    <div className="flex items-center gap-x-2">
                        <a href={url} className="text-c-main hover:underline">Directions</a>
                        <FaAngleRight size={15} />
                    </div>
                }
            </div>
        </div>
    )
}
