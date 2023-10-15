import React, { useEffect, useRef, useState } from "react";
import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";
import { chatboxEllipsesOutline, mailOutline } from "ionicons/icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow } from "swiper/modules";

import "./Home.css";
import "./About.css";
import LiveTv from "../../assets/live_tv.png";
import TvPlus from "../../assets/tv_plus.png";
import SnowMountain from "../../assets/snow_mountain.png";
import PlayButtonTop from "../../assets/play_button_top.png";
import DiscoverOrangeBg from "../../assets/discover_orange_bg.png";
import LeaveWings from "../../assets/leaves_wings.png";
import MichaelJaco from "../../assets/michael_jaco.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SliderDots } from "./SliderDots";
// import "./Slider.css";

export const About = () => {
  const [showSwiper, setShowSwiper] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  const swiperRef = useRef<any>();

  useEffect(() => {
    setTimeout(() => {
      setShowSwiper(true);
    }, 100);
  }, []);

  const onBackClick = () => {
    const currentActiveIndex = swiperRef?.current?.swiper?.activeIndex;
    if (currentActiveIndex >= 1) {
      swiperRef?.current.swiper.slideTo(currentActiveIndex - 1);
    } else {
      swiperRef?.current.swiper.slideTo(0);
    }
  };

  const onForwardClick = () => {
    const currentActiveIndex = swiperRef?.current?.swiper?.activeIndex;
    if (currentActiveIndex <= 1) {
      swiperRef?.current.swiper.slideTo(currentActiveIndex + 1);
    } else {
      swiperRef?.current.swiper.slideTo(2);
    }
  };

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

        {!showSwiper ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: "18px", color: "black" }}>Loading...</h1>
          </div>
        ) : (
          <IonCol
            size-xs="12"
            size-sm="12"
            size-md="7"
            className="scheduleCardContent"
          >
            <div
              style={{
                marginRight: "7%",
                position: "relative",
                width: "50%",
                height: "100%",
              }}
            >
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                spaceBetween={0}
                slidesPerView={3}
                modules={[EffectCoverflow]}
                navigation
                direction="vertical"
                className="mySwiper"
                initialSlide={1}
                ref={swiperRef}
                onSlideChange={(swiper: any) =>
                  setActiveSlide(swiper?.activeIndex)
                }
              >
                <SwiperSlide>
                  <ScheduleCard
                    eventDate={{ day: "THURS", date: "09", month: "AUG" }}
                    isActive={activeSlide == 0}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ScheduleCard
                    eventDate={{ day: "THURS", date: "17", month: "AUG" }}
                    isActive={activeSlide == 1}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ScheduleCard
                    eventDate={{ day: "THURS", date: "28", month: "AUG" }}
                    isActive={activeSlide == 2}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <SliderNav
              onBackClick={onBackClick}
              onForwardClick={onForwardClick}
              currentActiveIndex={activeSlide}
            />
          </IonCol>
        )}
      </IonRow>
    </div>
  );
};

const SliderNav = ({
  onBackClick,
  onForwardClick,
  currentActiveIndex,
}: {
  onBackClick: () => void;
  onForwardClick: () => void;
  currentActiveIndex: number;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10%",
      }}
    >
      <IonButton onClick={onBackClick} fill="default">
        <img
          src={PlayButtonTop}
          style={{
            width: "25px",
            height: "25px",
            filter: "brightness(255) invert(1)",
          }}
        />
      </IonButton>
      <div
        style={{
          padding: "16px 0px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {new Array(3).fill(0).map((item, index) => (
          <SliderDots
            color={currentActiveIndex === index ? "#000" : "rgba(0,0,0,0.4)"}
            uniqueKey={index}
          />
        ))}
      </div>
      <IonButton onClick={onForwardClick} fill="default">
        <img
          src={PlayButtonTop}
          style={{
            width: "25px",
            height: "25px",
            filter: "brightness(255) invert(1)",
            transform: "rotate(180deg)",
          }}
        />
      </IonButton>
    </div>
  );
};

const ScheduleCard = ({
  eventDate,
  isActive,
}: {
  eventDate: { day: string; date: string; month: string };
  isActive: boolean;
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
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#1A315C",
        boxShadow: isActive ? "12px 0px 25px 12px rgba(200,0,0,0.7)" : "",
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
        <img src={LiveTv} alt="live_tv" className="live-icon" />
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
          left: 0,
          top: "25%",
          height: "50%",
          width: "1%",
          backgroundColor: isActive ? "red" : "rgba(255,255,255,0.6)",
        }}
      />
    </IonRow>
  );
};
