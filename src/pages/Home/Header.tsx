import React from "react";
import { IonButton, IonCol, IonHeader, IonIcon, IonRow } from "@ionic/react";
import { menu, personCircle, searchCircle } from "ionicons/icons";

import "./Home.css";

export const Header = () => {
  return (
    <IonHeader
      style={{
        // padding: "1vh",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        alignItems: "flex-end",
      }}
    >
      <IonRow
        class="ion-padding"
        style={{
          alignItems: "flex-end",
          paddingLeft: "4vh",
          paddingRight: "4vh",
        }}
      >
        <IonCol
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
          sizeLg="5"
          sizeSm="12"
        >
          <li>LIVE SCHEDULE</li>
          <li>IWC MERCH</li>
          <li>IWC SOCIAL</li>
          <li>ABOUT</li>
          <li>EVENTS</li>
          <li>CONTACT</li>
        </IonCol>

        <IonCol
          sizeLg="5"
          sizeSm="0"
          style={{ display: "flex", alignSelf: "center" }}
        >
          <img
            src={require("../../assets/logo.png")}
            style={{ width: "150px", top: "-40px", position: "absolute" }}
          />
        </IonCol>
        <IonCol
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          sizeLg="2"
          sizeSm="0"
        >
          <IonIcon icon={searchCircle} className="nav-icon"></IonIcon>
          <IonIcon icon={personCircle} className="nav-icon"></IonIcon>
          {/* <div
              style={{
                backgroundColor: "#FFA903",
                borderRadius: "20px",
                height: "34px",
                width: "34px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IonIcon icon={menu} className="menu-icon"></IonIcon>
            </div> */}
          <IonButton className="signup-btn">sign up now</IonButton>
        </IonCol>
      </IonRow>
    </IonHeader>
  );
};
