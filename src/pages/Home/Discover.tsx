import React from "react";

import LeaveWings from "../../assets/leaves_wings.png";
import DiscoverOrangeBg from "../../assets/discover_orange_bg.png";
import { IonCol } from "@ionic/react";

import DiscoverRedShirt from "../../assets/discover_red_tShirt.png";
import DiscoverPhysique from "../../assets/discover_physique.png";
import DisoverWarrior from "../../assets/discover_warrior.png";
import DiscoverBlacktShirt from "../../assets/disocver_black_tShirt.png";

import DiscoverWaterWave from "../../assets/water_wave.png";

export const Discover = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        position: 'relative',
        height: '95vh'
      }}
    >
        <img
        src={DiscoverWaterWave}
        alt="water_wave"
        style={{
          position: "absolute",
          width: '100%',
          height: '65%',
          top: "45%"
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          maxWidth: "80%",
          justifyContent: "flex-end",
          backgroundImage: `url(${DiscoverOrangeBg})`,
          backgroundSize: "75% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <IonCol sizeLg="6" sizeMd="12" sizeSm="12" sizeXs="12">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <ImageFrame
              imageUrl={DiscoverBlacktShirt}
              height="80%"
              width="30%"
            />
            <ImageFrame imageUrl={DiscoverRedShirt} height="80%" width="40%" />
          </div>
          <div
            style={{
              marginTop: "-15%",
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "center",
            }}
          >
            <ImageFrame imageUrl={DisoverWarrior} height="60%" width="35%" />
            <ImageFrame
              imageUrl={DiscoverPhysique}
              height="60%"
              width="38%"
              marginLeft="-3%"
            />
          </div>
        </IonCol>
        <IonCol
          sizeLg="6"
          sizeMd="12"
          sizeSm="12"
          sizeXs="12"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 style={{ fontSize: "32px" }}>Discover a World of Content</h2>
          <span style={{ fontSize: "14px" }}>
            Immerse Yourself in a Spectrum of Content
            <br />
            and Enjoy Access to a Private Social Media
            <br />
            Community, Direct Live Stream Interactions,
          </span>
          <img
            src={LeaveWings}
            style={{
              width: "120px",
              height: "50px",
              display: "block",
            }}
          />
        </IonCol>
      </div>
    
    </div>
  );
};

type IProps = {
  imageUrl: string;
  width: string;
  height: string;
  marginLeft?: string;
};

const ImageFrame = ({ imageUrl, width, height, marginLeft }: IProps) => {
  return (
    <div style={{ width, height, marginLeft: marginLeft || "0px" }}>
      <img src={imageUrl} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
