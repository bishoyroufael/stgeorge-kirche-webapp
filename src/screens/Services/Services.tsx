import React from "react"


export const Services = () => {
    return (
        <div className="mx-auto max-w-screen-xl">
            <div className="pt-20"></div>
            <h2 className="text-4xl font-bold mb-4">Dienste</h2>
            {/* Text Column */}
            <div data-aos="fade-left">

                {/* Header Text */}
                <h3 className="text-3xl font-bold mb-2"> Koptische Hymnen und Bibelstunde </h3>

                {/* Long Description */}
                <p className="text-gray-600 mb-4">
                    Die Mitglieder der St. Georg Kirche in Sachsen treffen sich jeden Sonntag um 19:30 Uhr bis 20:00 Uhr auf Skype und üben gemeinsam koptische und arabische Hymnen.
                    Sie können gerne dabei sein, in dem Sie eine Anfrage zu der Gruppe schicken.
                </p>

                <p className="text-gray-600 mb-4">
                    Die Mitglieder der St. Georg Kirche in Sachsen treffen sich jeden Sonntag um 20:00 Uhr auf Skype und lesen gemeinsam in der Bibel. Sie können gerne dabei sein, in dem Sie eine Anfrage zu der Gruppe schicken.
                    Sie können gerne dabei sein, in dem Sie eine Anfrage zu der Gruppe schicken.
                </p>

                <h3 className="text-3xl font-bold mb-2"> Gebetstunde </h3>
                <p className="text-gray-600 mb-4">
                    Die Mitglieder der St. Georg Kirche in Sachsen treffen sich jeden Mittwoch um 20:30 Uhr auf Skype und beten gemeinsam aus der Agbeya, ein koptisch orthodoxisches Gebetsbuch. Sie können gerne dabei sein, in dem Sie eine Anfrage zu der Gruppe schicken.
                    <br /><br />


                    Der Name der Kirche auf Skype lautet: <b>st.george.ld</b>

                </p>
            </div>
        </div>
    )
}