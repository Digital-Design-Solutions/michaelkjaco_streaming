import React, { useState } from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { playCircle } from "ionicons/icons";

import "swiper/css";
import "@ionic/react/css/ionic-swiper.css";

import "./Home.css";
import watchText from "../../assets/watch_txt.png";
import sliderImg1 from "../../assets/slider_1.jpeg";
import { SliderDots } from "./SliderDots";
import PlayButtonRight from "../../assets/play_button_right.png";
import "./Slider.css";

const img1 = "";
const img2 = "";
const img3 = sliderImg1;

export const Slider = () => {
  const [getSlider, setSlider] = useState({ img1, img2, img3 });

  const onBackClick = () => {
    let payload = getSlider;
    if (getSlider.img3 !== "") {
      payload = {
        ...payload,
        img1: payload?.img3,
        img3: "",
      };
    } else if (getSlider.img1 !== "") {
      payload = {
        ...payload,
        img1: "",
        img2: payload?.img1,
      };
    } else {
      payload = {
        ...payload,
        img2: "",
        img3: payload?.img2,
      };
    }
    setSlider(payload);
  };

  const onForwardClick = () => {
    let payload = getSlider;
    if (getSlider.img3 !== "") {
      payload = {
        ...payload,
        img2: payload?.img3,
        img3: "",
      };
    } else if (getSlider.img2 !== "") {
      payload = {
        ...payload,
        img2: "",
        img1: payload?.img2,
      };
    } else {
      payload = {
        ...payload,
        img1: "",
        img3: payload?.img1,
      };
    }
    setSlider(payload);
  };

  const currentActiveIndex =
    getSlider?.img1 !== "" ? 0 : getSlider?.img3 !== "" ? 1 : 2;
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={watchText} style={{ width: "40%", height: "auto" }} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          position: "relative",
          margin: "0px 2% 0px 2%"
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
        <ThumbnailCard imageUrl={getSlider?.img1} />
        <ThumbnailCard imageUrl={getSlider?.img2} />
        <div
          style={{
            position: "absolute",
            margin: "auto",
            left: "35%",
            bottom: "-12%",
          }}
        >
          <ThumbnailCard imageUrl={getSlider?.img3} />
        </div>
        <IonButton onClick={onForwardClick} fill="default">
          <img
            src={PlayButtonRight}
            style={{ width: "25px", height: "25px" }}
          />
        </IonButton>
      </div>
      <SliderDots activeIndex={currentActiveIndex} />

      <div className="watchmore-btn-outer-container">
        <button className="watchmore-btn-inner-container">
        <span className="watchmore-btn"></span>
        </button>
      </div>
    </>
  );
};

export const ThumbnailCard = ({ imageUrl }: { imageUrl?: string }) => {
  return (
    <div
      style={{
        borderRadius: "8px",
        height: "30vh",
        width: "30vw",
        ...(imageUrl && {
          backgroundImage: `url( ${imageUrl} )`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }),
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#3E4952",
      }}
    >
      <div
        style={{
          display: "flex",
          float: "right",
          margin: "10px",
          backgroundColor:
            imageUrl !== "" ? "#3E4952" : "rgba(92, 79, 92, 0.8)",
          color: "#fff",
          padding: "4px 16px",
          borderRadius: "4px",
          alignSelf: "end",
        }}
      >
        <span>01:34:45</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          margin: "16px",
        }}
      >
        <div style={{ padding: "8px" }}>
          <h4
            style={{
              color: imageUrl !== "" ? "#fff" : "grey",
              fontSize: "16px",
              padding: "0px",
              margin: "0px",
            }}
          >
            Admin Panel
          </h4>
          <span
            style={{
              fontSize: "12px",
              color: imageUrl !== "" ? "#C7C7C7" : "grey",
            }}
          >
            Start saving your time with Framer Wireframe Web UI Kit.
          </span>
        </div>

        <IonIcon
          icon={playCircle}
          style={{ fontSize: "56px", color: "#fff" }}
        ></IonIcon>
      </div>
    </div>
  );
};
