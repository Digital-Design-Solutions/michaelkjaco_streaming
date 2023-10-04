import React from "react";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import { home, logOutOutline, settings } from "ionicons/icons";

import "./header.css";
import { useAppDispatch } from "../../hooks/reduxHook";
import { logoutUser } from "../../features/slice/user.slice";
import logo from "../../assets/logo.png";

export const Header = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const router = useIonRouter();
  const dispatch = useAppDispatch();

  const [present, dismiss] = useIonLoading();

  const handleLogout = async () => {
    await present("Logging out...");
    dispatch(logoutUser());
    setTimeout(() => {
      dismiss();
      router.push("/", "root");
    }, 50);
  };

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonRow>
            <IonMenuToggle>
              <IonButton
                fill="clear"
                color="dark"
                routerLink="/app"
                routerDirection="root"
              >
                <IonIcon slot="start" icon={home}></IonIcon>
                Home
              </IonButton>
            </IonMenuToggle>
          </IonRow>
          <IonRow>
            <IonMenuToggle>
              <IonButton
                fill="clear"
                color="dark"
                routerLink="/app/settings"
                routerDirection="root"
              >
                Settings
                <IonIcon slot="start" icon={settings}></IonIcon>
              </IonButton>
            </IonMenuToggle>
          </IonRow>
          <IonRow>
            <IonButton
              fill="clear"
              color="dark"
              onClick={handleLogout}
              routerDirection="root"
            >
              Logout
              <IonIcon slot="start" icon={logOutOutline}></IonIcon>
            </IonButton>
          </IonRow>
        </IonContent>
      </IonMenu>

      <IonHeader id="main-content" className="mobile-header">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* md header */}
      <IonRow className="header ion-align-items-center">
        <IonCol size="2" className="ion-align-items-center">
          <IonRow style={{ justifyContent: "flex-start" }}>
            <img
              src={logo}
              width="50px"
            />
            <h4 style={{ marginLeft: "12px", marginTop: "12px" }}>{title}</h4>
          </IonRow>
        </IonCol>
        <IonCol size="9" className="ion-text-left">
          <IonButton
            fill="clear"
            color="dark"
            routerLink="/app"
            routerDirection="root"
            style={{ textTransform: "none" }}
          >
            Home
          </IonButton>
          <IonButton
            fill="clear"
            color="dark"
            routerLink="/app/settings"
            routerDirection="root"
            style={{ textTransform: "none" }}
          >
            Settings
          </IonButton>
        </IonCol>
        <IonCol size="1">
          <IonButton
            fill="clear"
            color="dark"
            onClick={handleLogout}
            routerDirection="root"
            style={{ textTransform: "none" }}
          >
            Logout
          </IonButton>
        </IonCol>
      </IonRow>
      {children}
    </>
  );
};
