import React from "react";

export const SliderDots = ({
  uniqueKey,
  color,
}: {
  uniqueKey: number;
  color: string;
}) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: "12px",
        width: "12px",
        borderRadius: "50px",
        margin: "40px 4px",
      }}
    />
  );
};
