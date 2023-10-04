import React, { useState } from "react";
import {
  IonButton,
  IonCardContent,
  IonCardHeader,
  IonCheckbox,
} from "@ionic/react";

import "./Subscription.css";
import { SliderDots } from "./SliderDots";
import LeaveWings from "../../assets/leaves_wings.png";
import PlayButtonRight from "../../assets/play_button_right.png";

const listData = [
  "Access to IWC Social Platform",
  "IWC Private Livestreams",
  "IWC Member-Exclusive Videos",
  "Save 5% off Michael Jaco`s Master-Level Courses",
  "Save 5% off Michael Jac`s Gear",
];

const listData1 = [
  "Access to IWC Social Platform",
  "IWC Private Livestreams",
  "IWC Member-Exclusive Videos",
  "Save 10% off Michael Jaco`s Master-Level Courses",
  "Save 10% off Michael Jac`s Gear",
];

const initialData = {
  primary: {
    header: "IWC Pay-Per-Video",
    footer: "$5.00 Per Video",
    listData,
  },
  left: {
    header: "IWC Silver Membership",
    footer: "$145.00 Per Video",
    listData: listData1,
  },
  right: {
    header: "IWC Gold Membership",
    footer: "$287.50 Per Video",
    listData: listData1,
  },
};
export const Subscription = () => {
  const [getListData, setListData] = useState(initialData);

  const onBackClick = () => {
    let payload = getListData;
    if (getListData.primary.header === "IWC Pay-Per-Video") {
      payload = {
        primary: getListData.right,
        left: getListData.primary,
        right: getListData.left,
      };
    } else if (getListData.primary.header === "IWC Gold Membership") {
      payload = {
        primary: getListData.left,
        left: getListData.right,
        right: getListData.primary,
      };
    } else {
      payload = initialData;
    }
    setListData(payload);
  };

  const onForwardClick = () => {
    const isPayPerPrimary = getListData.primary.header === "IWC Pay-Per-Video";
    let payload = getListData;
    if (isPayPerPrimary) {
      payload = {
        primary: getListData.left,
        left: getListData.right,
        right: getListData.primary,
      };
    } else if (getListData.primary.header === "IWC Silver Membership") {
      payload = {
        primary: getListData.right,
        left: getListData.primary,
        right: getListData.left,
      };
    } else {
      payload = initialData;
    }
    setListData(payload);
  };

  return (
    <div style={{ margin: "7% 0px 3% 0px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            padding: "0px",
            margin: "0px",
            fontSize: "36px",
            fontWeight: "bold",
          }}
        >
          Membership and Plans for All
        </h2>
        <span style={{ fontSize: "14px", color: "gray" }}>
          Diverse pricing for everyone
        </span>
        <img
          src={LeaveWings}
          alt="leave+wings"
          style={{ width: "150px", height: "50px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          position: "relative",
          alignItems: "center",
          margin: "2% 5%",
        }}
      >
        <IonButton onClick={onBackClick} fill="default">
          <img
            src={PlayButtonRight}
            style={{
              width: "25px",
              height: "25px",
              transform: "rotate(180deg)",
            }}
          />
        </IonButton>

        <SubscriptionCard
          header={getListData.left.header}
          body={getListData.left.listData}
          footer={getListData.left.footer}
          headerColor="#00000029"
          isPrimary={false}
        />
        <div
          style={{
            position: "absolute",
            width: "80%",
            height: "100%",
            alignItems: "center",
            top: "8%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <SubscriptionCard
              header={getListData.primary.header}
              body={getListData.primary.listData}
              footer={getListData.primary.footer}
              headerColor=""
              isPrimary={true}
            />
          </div>
        </div>

        <SubscriptionCard
          header={getListData.right.header}
          body={getListData.right.listData}
          footer={getListData.right.footer}
          headerColor="rgba(255,215,0, 0.5)"
          isPrimary={false}
        />

        <IonButton onClick={onForwardClick} fill="default">
          <img
            src={PlayButtonRight}
            style={{ width: "25px", height: "25px" }}
          />
        </IonButton>
      </div>
      <SliderDots />
    </div>
  );
};

type IProps = {
  header: string;
  body: string[];
  footer: string;
  headerColor: string;
  isPrimary: boolean;
};

const SubscriptionCard = ({
  header,
  body,
  footer,
  headerColor,
  isPrimary,
}: IProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "30%",
      padding: "15px 0px 25px 0px",
      ...(isPrimary && { background: "#fff", zIndex: 9 }),
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
    }}
  >
    <IonCardHeader
      style={{
        backgroundColor: headerColor || "#1A315C",
        marginLeft: "-3%",
        width: "105%",
        padding: "10px 0px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "24px" }}>{header}</p>
    </IonCardHeader>

    <IonCardContent
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "5% 0%",
        alignSelf: "center",
        height: "100%",
      }}
    >
      {body?.map((item) => (
        <IonCheckbox
          style={{ margin: "2% 0px" }}
          labelPlacement="end"
          justify="start"
          key={item}
        >
          {item}
        </IonCheckbox>
      ))}
    </IonCardContent>
    <div
      style={{
        backgroundColor: "#1A315C",
        marginLeft: "-3%",
        width: "103%",
        padding: "10px 0px",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "22px" }}>{footer}</p>
    </div>
  </div>
);
