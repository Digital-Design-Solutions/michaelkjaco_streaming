import React from "react";

import YoutubeLogo from "../../assets/logo/youtube_logo.png";
import CabLogo from "../../assets/logo/cab_logo.png";
import InstaLogo from "../../assets/logo/insta_logo.png";
import FbLogo from "../../assets/logo/fb_logo.png";
import TwitterLogo from "../../assets/logo/twitter_logo.png";
import TelegramLogo from "../../assets/logo/telegram_logo.png";

export const SideSocialLinks = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        right: 0,
        backgroundColor: "#C7C7C7",
        padding: "8px 4px 0px 12px",
        display: "flex",
        flexDirection: "column",
        borderTopLeftRadius: "8px",
        borderBottomLeftRadius: "8px",
      }}
    >
      <div
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50px",
          backgroundColor: "rgba(0,255,0,0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <img
          src={YoutubeLogo}
          style={{ width: "25px", height: "25px" }}
          alt="logo"
        />
        <div
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50px",
            position: "absolute",
            backgroundColor: "rgba(0,255,0,0.7)",
          }}
        />
      </div>
      <LogoContainer
        bgColor="rgba(255,255,255,1)"
        imgUrl={CabLogo}
        imagStyle={{
          width: "35%",
          height: "35%",
        }}
      />
      <LogoContainer bgColor="rgba(66, 103, 178, 1)" imgUrl={FbLogo} />
      <div
        style={{
          width: "50px",
          height: "35px",
          display: "block",
          marginBottom: "12px",
          marginLeft: "-10px",
        }}
      >
        <img
          src={InstaLogo}
          style={{ width: "100%", height: "100%" }}
          alt="logo"
        />
      </div>
      <div
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <img
          src={TwitterLogo}
          style={{ width: "100%", height: "100%" }}
          alt="logo"
        />
      </div>
      <div
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <img
          src={TelegramLogo}
          style={{ width: "100%", height: "100%" }}
          alt="logo"
        />
      </div>
    </div>
  );
};

const LogoContainer = ({
  bgColor,
  imgUrl,
  imagStyle,
}: {
  bgColor: string;
  imgUrl: string;
  imagStyle?: any;
}) => {
  return (
    <div
      style={{
        width: "35px",
        height: "35px",
        borderRadius: "50px",
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "12px",
      }}
    >
      <img
        src={imgUrl}
        style={{ width: "25px", height: "25px", ...imagStyle }}
        alt="logo"
      />
    </div>
  );
};
