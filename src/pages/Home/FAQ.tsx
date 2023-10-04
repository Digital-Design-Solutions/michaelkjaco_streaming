import React from "react";

import LeavesWings from "../../assets/leaves_wings.png";
import { IonIcon } from "@ionic/react";
import { addCircle } from "ionicons/icons";
import FAQBG from "../../assets/Jaco-Images/faq_bg.png";

const listData = [
  "When does Michael Jaco go Live?",
  "What are the different subscription plans available?",
  "How do I cancel my subscription service?",
  "What are the different subscription plans available?",
  "Are there any discounts or promotions available for subsriptions?",
];

export const FAQ = () => {
  return (
    <div
      style={{
        background: `url(${FAQBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: 'cover',
        width: "100%",
        height: "500px",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          alignItems: "center",
          padding: "2% 0px 0px 0px",
          alignSelf: "center",
          display: "flex",
          flexDirection: 'column'
        }}
      >
        <h2>Frequently Asked Questions</h2>
        <img src={LeavesWings} style={{ width: "100px", height: "45px" }} />
        {listData?.map((item) => (
          <FAQCard label={item} />
        ))}
      </div>
    </div>
  );
};

const FAQCard = ({ label }: { label: string }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px 12px 12px 20px",
        width: "100%",
        margin: "2% 0px 0px 0px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: '#fff'
      }}
    >
      <IonIcon
        icon={addCircle}
        style={{ fontSize: "32px", color: "#1A315C" }}
      />

      <span style={{ paddingLeft: "2%" }}>{label}</span>
    </div>
  );
};
