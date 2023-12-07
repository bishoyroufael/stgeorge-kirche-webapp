import { InfoCard } from "@components/InfoCard";
import React from "react";

export const AddressesSummary = ({title}): React.JSX.Element => {
    return(
        <div className="relative bg-white w-full pt-20">
            {/* Header Title */}
            <h2 className="text-5xl font-bold mb-4">{title}</h2>
            <div className="justify-between flex space-x-20">
            <InfoCard
                image={require("@images/church-icon.png")} 
                headerText={"Dresden"}
                pa={'St. Petrus Kirche'} 
                pb={"Dohnaer Str. 53,"} 
                pc={"01219, Dresden"}
                pd={""}
                url={"https://maps.app.goo.gl/vz7VeBBc594LojYC6"}/>

            <InfoCard
                image={require("@images/church-icon.png")} 
                headerText={"Leipzig"}
                pa={"St. Laurentius Kirche"}
                pb={'Stötteritzer Str. 47,'} 
                pc={"04317, Leipzig"} 
                pd={""}
                url={"https://maps.app.goo.gl/fLg2gTSSMXWNK6dq8"}/>
            </div>
        </div>
    )
}
