import React from "react";

export const SliderDots = ({ activeIndex }: { activeIndex?: number }) => {
  const active = activeIndex ?? 1;
  
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: active === 0 ? "#5C5C5C" : "#BEBEBE",
          height: "12px",
          width: "12px",
          borderRadius: "50px",
        }}
      />
      <div
        style={{
          backgroundColor: active === 1 ? "#5C5C5C" : "#BEBEBE",
          height: "12px",
          width: "12px",
          borderRadius: "50px",
          margin: "40px 4px",
        }}
      />

      <div
        style={{
          backgroundColor: active === 2 ? "#5C5C5C" : "#BEBEBE",
          height: "12px",
          width: "12px",
          borderRadius: "50px",
        }}
      />
    </div>
  );
};
