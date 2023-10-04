import React from "react";
import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";

import logo from "../../assets/logo.png";

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <IonRow style={{ height: "100vh" }}>
      <IonCol
        sizeXl="8"
        sizeXs="0"
        sizeMd="0"
        sizeLg="8"
        style={{
          backgroundImage: `url(https://octodev.net/wp-content/uploads/2019/05/music-app-4-1024x684.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="mobile-bg"
      />
      <IonCol sizeXl="4" sizeLg="4" sizeMd="12" sizeXs="12">
        <IonContent className="ion-padding" scrollY={false}>
          <IonGrid>
            <IonRow class="ion-justify-content-center">
              <IonCol size="12" sizeMd="12" sizeLg="8" sizeXl="8">
                <div className="ion-text-center ion-padding">
                  <img src={logo} alt="Streaming App Logo" width={"50%"} />
                </div>
              </IonCol>
            </IonRow>
            {children}
          </IonGrid>
        </IonContent>
      </IonCol>
    </IonRow>
  );
};
