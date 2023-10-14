import React, { useEffect, useRef, useState } from "react";
import {
  IonButton,
  IonCardContent,
  IonCardHeader,
  IonCheckbox,
} from "@ionic/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import "./Subscription.css";
import LeaveWings from "../../assets/leaves_wings.png";
import PlayButtonRight from "../../assets/play_button_right.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Slider.css';

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

export const Subscription = () => {
  const [showSwiper, setShowSwiper] = useState(false);

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
        <div className="slider-outer-container">
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

            <>
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
                modules={[EffectCoverflow, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="mySwiper"
                initialSlide={1}
                ref={swiperRef}
              >
                <SwiperSlide>
                  <SubscriptionCard
                    header={"IWC Silver Membership"}
                    body={listData1}
                    footer={"$145.00 Per Video"}
                    headerColor="#00000029"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SubscriptionCard
                    header={"IWC Pay-Per-Video"}
                    body={listData}
                    footer={"$5.00 Per Video"}
                    headerColor=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SubscriptionCard
                    header={"IWC Gold Membership"}
                    body={listData1}
                    footer={"$287.50 Per Video"}
                    headerColor="rgba(255,215,0, 0.5)"
                  />
                </SwiperSlide>
              </Swiper>
            </>

            <IonButton onClick={onForwardClick} fill="default">
              <img
                src={PlayButtonRight}
                style={{ width: "25px", height: "25px" }}
              />
            </IonButton>
          </div>
        </div>
      )}
    </div>
  );
};

type IProps = {
  header: string;
  body: string[];
  footer: string;
  headerColor: string;
};

const SubscriptionCard = ({ header, body, footer, headerColor }: IProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      padding: "15px 0px 25px 0px",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      backgroundColor: "#fff",
      width: "100%",
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
