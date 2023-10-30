import React from "react";
import {
  IonButton,
  IonCol,
  IonHeader,
  IonIcon,
  IonRow,
  useIonRouter,
} from "@ionic/react";
import { personCircle, searchCircle } from "ionicons/icons";

import "./Home.css";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/slice/user.slice";

export const Header = () => {
  const dispatch = useDispatch();
  const router = useIonRouter();

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
          className="header-menu"
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
          // sizeLg="5"
          // sizeSm="12"
          sizeLg="5"
          sizeSm="12"
          sizeXs="12"
        >
          <li>LIVE SCHEDULE</li>
          <li>IWC MERCH</li>
          <li>IWC SOCIAL</li>
          <li>ABOUT</li>
          <li>EVENTS</li>
          <li>CONTACT</li>
        </IonCol>

        <IonCol
          className="header-logo"
          sizeLg="5"
          sizeSm="8"
          sizeXs="8"
          style={{ display: "flex", alignSelf: "center" }}
        >
          <img
            src={require("../../assets/logo.png")}
            style={{ width: "150px", top: "-40px", position: "absolute" }}
          />
        </IonCol>
        <IonCol
          className="header-signup"
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          sizeLg="2"
          sizeSm="4"
          sizeXs="4"
        >
          <IonIcon icon={searchCircle} className="nav-icon"></IonIcon>
          <IonIcon icon={personCircle} className="nav-icon"></IonIcon>
          <IonButton
            className="signup-btn"
            onClick={() => {
              dispatch(logoutUser());
              router.push("/", "root");
            }}
          >
            sign up now
          </IonButton>
        </IonCol>
      </IonRow>
    </IonHeader>
  );
};
