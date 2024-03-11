import { AddressesSummary } from "@components/AddressesSummary";
import React from "react";

export const AboutUs = () => {
    return (
        <div>
            <div className="pt-20"></div>
            <h2 className="text-4xl font-bold mb-4">Über Uns</h2>
            <div className="mx-auto mt-8 p-6 bg-white rounded-md space-y-10" data-aos="fade-right">
                <div>
                    <h2 className="text-3xl font-semibold mb-4"> Die Gründung </h2>
                    <p className="text-gray-700"> Die koptische St. Georg Gemeinde ist über ganz Sachsen verstreut. Sie hat am 1998 in Leipzig angefangen.
                        Zweimal im Monat trifft sie sich zur Messe, abwechselnd in Leipzig nd Dresden. Die Messe ist nur ein Teil des Gemeindelebens.
                        Hinterher essen und reden wir gemeinsam. Für die Kinder machen auch kindergutsdienst.
                        Wir nutzen den modernen Kommunikationsmitteln (Skype und Whatsapp) für unsere Aktivitäten (Gebetstreffen, Bibelstunde und Üben der Hymnen).</p>
                </div>
                <div>

                    <h2 className="text-3xl font-semibold mb-4"> Wer sind die Kopten? </h2>
                    <p className="text-gray-700">Die Kopten sind Christen in Ägypten und Ägypter. Das Wort "Kopten" ist eine abgewandelte Form des griechischen Wortes Aigyptios sowie des arabischen Wortes Alqipt. </p>
                </div>

                <div>

                    <h2 className="text-3xl font-semibold mb-4"> Welche Sprache wird bei der koptischen Messefeier gesprochen und welche Musikinstrumente verwendet? </h2>
                    <p className="text-gray-700">Bei der koptischen Messefeier wird Koptisch in Form des bohairischen unterägyptischen Dialektes, Arabisch sowie im Ausland die jeweilige Landessprache gesprochen. Die verwendeten Musikinstrumente sind altägyptisch Zimbeln und Triangel. </p>
                </div>

                <div>

                    <h2 className="text-3xl font-semibold mb-4"> Wie ist die Lage der Kopten in Deutschland? </h2>
                    <p className="text-gray-700">In Deutschland leben momentan ca. 7000 koptische Christen mit Gemeinden in Düsseldorf, Berlin, Frankfurt am Main, Ham-burg, Bremen, Bitburg, Stuttgart, München, Nürnberg und Hannover. Durch den Zuzug von Flüchtlingen und Asylanten aus Syrien und Agypten vergrößern sich die Gemeinden ständig.
                        Außerdem bestehen in Deutschland zwei koptische Klöster: das Sankt Antonius Kloster in Waldsolms-Kröffelbach im Taunus, das am 18.11.1990 durch Papst Schenuda III geweiht wurde sowie das koptisch orthodoxe Kloster der Heiligen Mauritius in Höxter Brenkhausen, das von der koptischen Kirche im Jahre 1993 als verfallene Klosterruine erworben und aufwendig unter Mithilfe koptisch-orthodoxer Diakone aus Ägypten unter Denkmalge-sichtspunkten restauriert wurde. </p>
                </div>

                <div>

                    <h2 className="text-3xl font-semibold mb-4"> Worin besteht das Nor-malformular der koptischen Messfeier? </h2>
                    <p className="text-gray-700"> Das Normalformular der koptischen Messfeier beruht auf der Basilius Liturgie, die auf dem Hochgebet des Basilius beruht: aus dem Setzungsbericht, der Epiklese, dem Memento und der Doxologie. Die koptische Liturgie besteht aus folgenden der Teilen: der Vormesse, die Gabenbe-reitung, dem Wortgottesdienst Lesungen und Predigt, der Eucharistiefeier sowie der Anaphora, dem Hochgebet der Gläubigen Der Messfeier voraus gehen die abendliche und morgendliche Weihrauchdarbringung sowie das Mitternachts-gebet. </p>
                </div>

            </div>
            <AddressesSummary title={"Wo Finden Sie Uns?"} />
        </div>
    )
}