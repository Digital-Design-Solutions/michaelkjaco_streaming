import React from "react";
import { IonCol, IonIcon, IonRow } from "@ionic/react";
import { chatboxEllipsesOutline, ellipse, mailOutline } from "ionicons/icons";

import "./Home.css";
import "./About.css";
import LiveTv from "../../assets/live_tv.png";
import TvPlus from "../../assets/tv_plus.png";
import SnowMountain from "../../assets/snow_mountain.png";
import PlayButtonTop from "../../assets/play_button_top.png";
import DiscoverOrangeBg from "../../assets/discover_orange_bg.png";
import LeaveWings from "../../assets/leaves_wings.png";
import MichaelJaco from "../../assets/michael_jaco.png";

export const About = () => {
  return (
    <div style={{ position: "relative", marginLeft: "8.4%" }}>
      <IonRow
        style={{
          marginLeft: "6%",
          backgroundImage: `url(${DiscoverOrangeBg})`,
          backgroundSize: "75% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* content section */}
        <IonCol style={{ flex: 1, marginTop: "5%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "80%",
            }}
          >
            <h1>About Intuitive Warrior Channel</h1>
            <img
              src={LeaveWings}
              alt="wings_logo"
              style={{ width: "110px", height: "40px" }}
            />
            <h3 style={{ fontWeight: "normal", fontSize: "16px" }}>
              Retired veteran with over 22 years in Naval Special Warfare and
              over two years in Naval Diving and Salvage. Over 11 years as a
              contract and direct contract security operative for US State
              Department and CIA Operations in Combat Zones. Dedicated a total
              of 35 years serving the US Government in high-risk environments.
              <br />
              <br />
              Exceptional interpersonal and public relations skills with
              documented success in leadership and management roles and an
              extraordinary ability to determine group dynamics that allow a
              strong rapport at all levels. Extensive background in both basic
              and advanced SEAL tactics, High Risk Training and Inter-agency
              Programs with proven expertise in risk management, risk
              mitigation, and conflict resolution.
            </h3>
          </div>
        </IonCol>
        {/* image section */}
        <IonCol
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            maxWidth: "60%",
            justifyContent: "center",
            marginRight: "-7%",
          }}
        >
          <img
            src={MichaelJaco}
            alt="michael_jaco"
            style={{ width: "65%", height: "auto" }}
          />
        </IonCol>
      </IonRow>
      <IonRow
        style={{
          position: "relative",
          justifyContent: "space-evenly",
          color: "#fff",
          width: "100vw",
          alignItems: "center",
          marginTop: "-3%",
        }}
      >
        <img
          src={SnowMountain}
          style={{
            position: "absolute",
            width: "100vw",
            height: "auto",
          }}
        />
        <IonCol         
          size-xs="10"
          size-sm="10"
          size-md="4"
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#000",
            padding: "1rem",
          }}
        >
          <h2 style={{ fontSize: "2.5em" }}>
            Watch Us Live
            <br />
            Upcoming Streaming Sessions
          </h2>
          <span style={{ fontSize: "14px", margin: "0px 0px 2% 0px" }}>
            Home is behind, the world ahead and there are many paths to tread
            through shadows to the edge
          </span>

          <span
            style={{
              border: "1.5px solid #fff",
              backgroundColor: "#1A315C",
              borderRadius: "4px",
              alignSelf: "flex-start",
              padding: "8px 4%",
              color: "#fff",
              fontSize: "12px",
            }}
          >
            VIEW SCHEDULE
          </span>
        </IonCol>

        <IonCol
          size-xs="12"
          size-sm="12"
          size-md="7"
          className="scheduleCardContent"          
        >
          <div style={{ marginRight: "7%", position: "relative" }}>
            <div style={{ position: "relative", opacity: 0.85 }}>
              <ScheduleCard
                eventDate={{ day: "THURS", date: "09", month: "AUG" }}
                type="secondary"
              />
            </div>
            <br />
            <div style={{ position: "relative", opacity: 0.85 }}>
              <ScheduleCard
                eventDate={{ day: "THURS", date: "28", month: "AUG" }}
                type="secondary"
              />
            </div>

            <div style={{ position: "absolute", top: "25%" }}>
              <ScheduleCard
                eventDate={{ day: "THURS", date: "17", month: "AUG" }}
                type="primary"
              />
            </div>
          </div>
          <SliderNav />
        </IonCol>
      </IonRow>
    </div>
  );
};

const SliderNav = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10%",
      }}
    >
      <img
        src={PlayButtonTop}
        style={{
          width: "25px",
          height: "25px",
          filter: "brightness(255) invert(1)",
        }}
      />
      <div
        style={{
          padding: "16px 0px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {[
          "rgba(0,0,0,0.4)",
          "rgba(0,0,0,0.4)",
          "#000",
          "rgba(0,0,0,0.4)",
          "rgba(0,0,0,0.4)",
        ].map((item, index) => (
          <SliderDot color={item} uniqueKey={index} />
        ))}
      </div>
      <img
        src={PlayButtonTop}
        style={{
          width: "25px",
          height: "25px",
          filter: "brightness(255) invert(1)",
          transform: "rotate(180deg)",
        }}
      />
    </div>
  );
};

const SliderDot = ({
  color,
  uniqueKey,
}: {
  color: string;
  uniqueKey: number;
}) => {
  return (
    <IonIcon
      key={uniqueKey?.toString()}
      icon={ellipse}
      style={{
        color,
        fontSize: "16px",
        margin: "1px 0px",
      }}
    />
  );
};

const ScheduleCard = ({
  eventDate,
  type,
}: {
  eventDate: { day: string; date: string; month: string };
  type: "primary" | "secondary";
}) => {
  const { day, date, month } = eventDate;
  return (
    <IonRow
      style={{
        border: "none",
        borderTopLeftRadius: "6px",
        borderBottomLeftRadius: "6px",
        padding: "16px 16px 16px 5%",
        display: "flex",
        minWidth: "25vw",
        marginLeft: type === "primary" ? "-20%" : "0px",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#1A315C",
        boxShadow:
          type === "primary" ? "12px 0px 25px 12px rgba(200,0,0,0.7)" : "",
      }}
    >
      {/* date */}
      <IonCol style={{ flex: 1.5 }}>
        <h1
          style={{
            fontWeight: "400",
            fontSize: "3.5vh",
            padding: "0px",
            margin: "0px",
          }}
        >
          {day}
        </h1>
        <h1
          style={{
            fontWeight: "400",
            fontSize: "12vh",
            padding: "0px",
            margin: "0px",
          }}
        >
          {date}
        </h1>
        <h1
          style={{
            fontWeight: "400",
            fontSize: "6vh",
            padding: "0px",
            margin: "0px",
          }}
        >
          {month}
        </h1>
      </IonCol>

      {/* live info */}
      <IonCol style={{ flex: 1.5, display: "flex", flexDirection: "column" }}>
        {/* <IonIcon name={tvOutline} style={{ fontSize: "30px", color: "red" }} /> */}
        <img
          src={LiveTv}
          alt="live_tv"
          style={{
            width: "25px",
            height: "25px",
            margin: "15px 0px",
          }}
        />
        <h1
          style={{
            fontWeight: "400",
            padding: "0px 0px 0px 0px",
            margin: "0px 0px 0px 0px",
            fontSize: "3.4vh",
          }}
        >
          IWC LIVE
        </h1>
        <h1
          style={{
            fontWeight: "400",
            padding: "0px",
            margin: "2% 0px 6% 0px",
            fontSize: "3.4vh",
          }}
        >
          05:00 PM
        </h1>

        <span
          style={{
            border: "1.5px solid #fff",
            borderRadius: "4px",
            padding: "4px 16px",
            color: "#fff",
            fontSize: "12px",
            alignSelf: "self-start",
          }}
        >
          WATCH NOW
        </span>
      </IonCol>

      {/* nav links */}
      <IonCol
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={TvPlus}
          alt="tv_plus"
          style={{
            width: "50%",
            padding: "0px 0px 0px 0px",
            margin: "0px 0px 0px 0px",
            filter: "brightness(0) invert(1)",
          }}
        />
        <IonIcon icon={mailOutline} size="large"></IonIcon>
        <IonIcon
          icon={chatboxEllipsesOutline}
          size="large"
          style={{ marginTop: "8px" }}
        ></IonIcon>
      </IonCol>

      <div
        style={{
          position: "absolute",
          left: type === "primary" ? "-20%" : "0%",
          top: "25%",
          height: "50%",
          width: "1%",
          backgroundColor: type === "primary" ? "red" : "rgba(255,255,255,0.6)",
        }}
      />
    </IonRow>
  );
};
