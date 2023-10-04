import React from "react";

import LeavesWings from "../../assets/leaves_wings.png";
import RootWellness from "../../assets/Jaco-Images/root_wellness.png";
import LifeWave from "../../assets/Jaco-Images/life_wave.png";
import C60EVO from "../../assets/Jaco-Images/c60_evo.png";
import C60EVO1 from "../../assets/Jaco-Images/c60_evo_1.png";
import C60EVO2 from "../../assets/Jaco-Images/c60_evo_2.png";
import C60EVO3 from "../../assets/Jaco-Images/c60_evo_3.png";
import { IonCol, IonRow } from "@ionic/react";

const listData = [
  {
    imageUrl: RootWellness,
    label: "Root Wellness",
  },
  {
    imageUrl: LifeWave,
    label: "LifeWave",
  },
  {
    imageUrl: C60EVO,
    label: "C60 EVO",
  },
  {
    imageUrl: C60EVO1,
    label: "C60 EVO",
  },
  {
    imageUrl: C60EVO2,
    label: "C60 EVO",
  },
  {
    imageUrl: C60EVO3,
    label: "C60 EVO",
  },
];
export const PartnerProducts = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        margin: "5% 0px 0px 0px"
      }}
    >
      <h1>Shop MJ❜s Partners and Save</h1>
      <span style={{ fontSize: "12px", textAlign: "center" }}>
        Home is behind, the world ahead and there are many paths <br />
        to tread through shadows to the edge.
      </span>
      <img
        src={LeavesWings}
        style={{ width: "100px", height: "45px", marginTop: "12px" }}
      />
      <IonRow
        style={{
          width: "80vw",
          marginTop: "2%",
          marginBottom: "3%",
          display: "flex",
          padding: "10",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {listData.map((item, index) => (
          <IonCol
            key={item.imageUrl}
            // sizeLg="2"
            // sizeXs="6"
            // sizeMd="3"
            // sizeSm="6"
            size-lg="2" 
            size-md="4"
            size-sm="6"
            style={{
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            <ImageCard imageUrl={item.imageUrl} label={item.label} />
          </IonCol>
        ))}
      </IonRow>
    </div>
  );
};

const ImageCard = ({
  imageUrl,
  label,
}: {
  imageUrl: string;
  label: string;
}) => {
  return (
    <div
      style={{
        background: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "130px",
        height: "130px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <span
          style={{
            backgroundColor: "rgba(255,255,255,0.6)",
            width: "100%",
            textAlign: "center",
            fontSize: "12px",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};
