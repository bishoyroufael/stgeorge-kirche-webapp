import React from "react";
import { EventCard } from "@components/EventCard";
import '@styles/globals.css';
import { HomeBanner } from "@components/HomeBanner";
import { ImageWithTitleAndDescription } from "@components/ImageWithTitleAndDescription";
import { EventsSummary } from "@components/EventsSummary";
import { AddressesSummary } from "@components/AddressesSummary";
import { Event } from "../../sheets/utils";

export const Home = ({ nextThreeEvents }: { nextThreeEvents?: Array<Event> }): React.JSX.Element => {
  return (
    <div>

      <HomeBanner
        image={require("@images/church-banner.png")}
        quote={"Gesegnet ist, wer im Namen des Herrn kommt. (Matthäus 9:21)"}
        eventCard={nextThreeEvents && nextThreeEvents.length != 0 ?
            <EventCard eventName={nextThreeEvents[0].Title}
              date={new Date(`${nextThreeEvents[0].Date} ${nextThreeEvents[0].Time}`)}
              location={nextThreeEvents[0].Location} /> : null}

      />
      {/* Uber Uns Section */}
      <ImageWithTitleAndDescription
        title={"Über Uns"}
        image={require("@images/people.png")}
        headerText={"Church was doing what he often did when dropped An oracle "}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Herzlich willkommen auf der Startseite der koptischen Gemeinde St. Georg in Sachsen (in Dresden und Leipzig)! Der Besuch auf unserer Homepage ermöglicht Ihnen, unsere Aktivitäten näher kennenzulernen und uns bei Interesse zu kontaktieren. Des Weiteren können Sie die kommenden Termine und den jeweiligen Ort der heiligen Messe in Dresden und Leipzig einsehen."}
        buttonText={"Mehr info"} />

      {nextThreeEvents && nextThreeEvents.length != 0 && <EventsSummary title={"Alle Veranstaltungen"} eventsData={nextThreeEvents} />}
      <AddressesSummary title={"Wo Finden Sie Uns?"} />
      {/* Empty Space */}
    </div>
  );
};
