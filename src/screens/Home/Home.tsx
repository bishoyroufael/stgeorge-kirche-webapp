import React from "react";
import { Header } from "@components/Header"
import { EventCard } from "@components/EventCard";
import '@styles/globals.css';
import { HomeBanner } from "@components/HomeBanner";
import { ImageWithTitleAndDescription } from "@components/ImageWithTitleAndDescription";
import { EventsSummary } from "@components/EventsSummary";
import { InfoCard } from "@components/InfoCard";
import { AddressesSummary } from "@components/AddressesSummary";
import { Footer } from "@components/Footer";

export const Home = (): React.JSX.Element => {
  return (
    <div>
      <HomeBanner
        image={require("@images/church-banner.png")}
        quote={"This is a verse from the bible"}
        eventCard={<EventCard eventName={"Event Name"} date={new Date()} location={"Dresden"} />}
      />
      {/* Uber Uns Section */}
      <ImageWithTitleAndDescription
        title={"Über Uns"}
        image={require("@images/people.png")}
        headerText={"Church was doing what he often did when dropped An oracle "}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Herzlich willkommen auf der Startseite der koptischen Gemeinde St. Georg in Sachsen (in Dresden und Leipzig)! Der Besuch auf unserer Homepage ermöglicht Ihnen, unsere Aktivitäten näher kennenzulernen und uns bei Interesse zu kontaktieren. Des Weiteren können Sie die kommenden Termine und den jeweiligen Ort der heiligen Messe in Dresden und Leipzig einsehen."}
        buttonText={"Mehr info"} />

      <EventsSummary title={"Alle Veranstaltungen"} eventsData={[]}/>
      <AddressesSummary title={"Wo Finden Sie Uns?"}/>
      {/* Empty Space */}
      <div className="pt-20"></div>
    </div>
  );
};
