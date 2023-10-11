import React, { useEffect, useRef, useState } from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { playCircle } from "ionicons/icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import watchText from "../../assets/watch_txt.png";
import sliderImg1 from "../../assets/slider_1.jpeg";
import PlayButtonRight from "../../assets/play_button_right.png";
import "./Slider.css";

export const Slider = () => {
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
        <>
          <div className="slider-outer-container">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                position: "relative",
                margin: "0px 2% 0px 2%",
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
                    slideShadows: true,
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
                    <ThumbnailCard imageUrl={""} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ThumbnailCard imageUrl={sliderImg1} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ThumbnailCard imageUrl={""} />
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

          <div className="watchmore-btn-outer-container">
            <button className="watchmore-btn-inner-container">
              <span className="watchmore-btn"></span>
            </button>
          </div>
        </>
      )}
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
