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

      {/* Need to be refactored */}
      <HomeBanner
        image={require("@images/church-banner.png")}
        quote={"Gesegnet ist, wer im Namen des Herrn kommt. (Matthäus 9:21)"}
        eventCard={nextThreeEvents && nextThreeEvents.length != 0 ?
            <EventCard eventName={nextThreeEvents[0].title}
              date={new Date(`${nextThreeEvents[0].date} ${nextThreeEvents[0].time}`)}
              location={nextThreeEvents[0].location} /> : null}

      />

      {/* Uber Uns Section */}
      <ImageWithTitleAndDescription
        title={"Über Uns"}
        image={require("@images/people.png")}
        headerText={"Church was doing what he often did when dropped An oracle "}
        description={"Die koptische St. Georg Gemeinde ist über ganz Sachsen verstreut. Sie hat am 1998 in Leipzig angefangen. \
        Zweimal im Monat trifft sie sich zur Messe, abwechselnd in Leipzig nd Dresden. Die Messe ist nur ein Teil des Gemeindelebens. \
        Hinterher essen und reden wir gemeinsam. Für die Kinder machen auch kindergutsdienst."}
        buttonText={"Mehr info"} />

      {nextThreeEvents && nextThreeEvents.length != 0 && <EventsSummary title={"Nächste Veranstaltungen"} eventsData={nextThreeEvents} />}
      <AddressesSummary title={"Wo Finden Sie Uns?"} />
      {/* Empty Space */}
    </div>
  );
};
