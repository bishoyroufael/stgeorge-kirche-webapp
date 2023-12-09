import { AddressesSummary } from "@components/AddressesSummary";
import React from "react";

export const AboutUs = () => {
    return (
        <div>
            <div className="pt-20"></div>
            <h2 className="text-5xl font-bold mb-4">Über Uns</h2>
            <div className="mx-auto mt-8 p-6 bg-white rounded-md">
                <h2 className="text-2xl font-semibold mb-4"> Church was doing what he often did when dropped An  About Us </h2>
                <p className="text-gray-700"> This is a description about the church and so onHerzlich willkommen auf der Startseite der koptischen Gemeinde St. Georg in Sachsen (in Dresden und Leipzig)! Der Besuch auf unserer Homepage ermöglicht Ihnen, unsere Aktivitäten näher kennenzulernen und uns bei Interesse zu kontaktieren. Des Weiteren können Sie die kommenden Termine und den jeweiligen Ort der heiligen Messe in Dresden und Leipzig einsehen.
                    Möge diese Seite ein Segen für ihre Besucher sein - mit der Kraft unseres Herrn und Erlösers Jesus Christus, seiner Heiligen Mutter, der Jungfrau Maria, und des Schutzpatrons der Kirche, des Heiligen Georg.</p>
            </div>
            <AddressesSummary title={"Wo Finden Sie Uns?"} />
        </div>
    )
}