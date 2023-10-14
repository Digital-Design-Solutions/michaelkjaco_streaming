import React from "react";
import { IonContent, IonPage } from "@ionic/react";

import "./Home.css";
import { Header } from "./Header";
import { Slider } from "./Slider";
import { Subscription } from "./Subscription";
import { PartnerProducts } from "./PartnerProducts";
import { FAQ } from "./FAQ";
import { About } from "./About";
import { SideSocialLinks } from "./SideSocialLinks";
import { Discover } from "./Discover";
import MountainImage from "../../assets/home_bg.png";

const Home = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <div>
        <img src={MountainImage} style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="content-container">
          <Slider />
          <About />
          <Subscription />
          <Discover />
          <PartnerProducts />
          <FAQ />
        </div>
        <SideSocialLinks />
      </IonContent>
    </IonPage>
  );
};

export default Home;
