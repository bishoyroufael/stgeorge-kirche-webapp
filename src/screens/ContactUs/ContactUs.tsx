import { AddressesSummary } from "@components/AddressesSummary";
import { InfoCard } from "@components/InfoCard";
import React from "react";

export const ContactUs = () => {
    return (
        <div className="mx-auto max-w-screen-xl min-w-[100%]">
            <div className="pt-20"></div>
            <h2 className="text-4xl font-bold mb-4">Kontakt</h2>

            <div className="w-full"  data-aos="fade-right">
                <InfoCard
                    image={require('@images/vaterguirgis.png')}
                    headerText={"Vater Guirgis El Moharaki"}
                    pa={"E-Mail: girgiselmoharaky@hotmail.com"}
                    pb={"Mobil: +20 171 4360460"}
                    fw
                />
            </div>

            <div className="pt-2"></div>
            <div className="w-full"  data-aos="fade-left">

                <InfoCard
                    image={require('@images/drsameh.png')}
                    headerText={"Vorstand: Dr. Sameh Iskander"}
                    pa={"E-Mail: sameh.iskander@koptische-gemeinde.de"}
                    pb={"Mobil: +49 178 1581273"}
                    fw
                />
            </div>
            <AddressesSummary title={"Wo Finden Sie Uns?"} />
        </div>
    )
}