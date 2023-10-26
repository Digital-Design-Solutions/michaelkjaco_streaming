import React, { useState } from "react";

import LeavesWings from "../../assets/leaves_wings.png";
import {
  IonAccordion,
  IonAccordionGroup,
  IonIcon,
} from "@ionic/react";
import { addCircle, removeCircle } from "ionicons/icons";
import FAQBG from "../../assets/Jaco-Images/faq_bg.png";

const listData = [
  "When does Michael Jaco go Live?",
  "What are the different subscription plans available?",
  "How do I cancel my subscription service?",
  "What are the different subscription plans available?",
  "Are there any discounts or promotions available for subsriptions?",
];

export const FAQ = () => {
  const [openedItem, setOpenedItem] = useState<null | number>(null);

  return (
    <div
      style={{
        background: `url(${FAQBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "cover",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <IonAccordionGroup
        style={{
          alignItems: "center",
          padding: "2% 0px 0px 0px",
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          width: "40%",
        }}
        className="faq-content"
      >
        <h2>Frequently Asked Questions</h2>
        <img src={LeavesWings} style={{ width: "100px", height: "45px" }} />
        {listData?.map((item, index) => (
          <IonAccordion
            value={index.toString()}
            style={{ backgroundColor: "transparent" }}
            onClick={() =>
              setOpenedItem((prevItem) => (prevItem === index ? null : index))
            }
          >
            <div slot="header">
              <FAQCard label={item} isOpened={openedItem === index || false} />
            </div>
            <div
              className="ion-padding"
              slot="content"
              style={{
                backgroundColor: "rgba(0,0,0,0.6)",
                color: "#fff",
                borderRadius: "8px",
              }}
            >
              Michael Jaco, Former Navy Seal & CIA Operative shares his
              life-altering experiences to make you better at leadership,
              business, personal relationships, health, fitness, and more. He
              can also open your mind to extremely powerful intuitive,
              spiritual, and cognitive training that helped him survive and
              thrive after his military and government service. From one on one
              coaching, video courses, books, events, and seminars, Michael can
              help you take your chosen path to the next level of success and
              happiness. As a master training specialist Michael has trained
              thousands of people in extremely high levels of personal
              development. Michael’s mission and life focus are to help anyone
              quickly and easily develop the skills for success in all aspects
              of human achievement.
            </div>
          </IonAccordion>
        ))}
      </IonAccordionGroup>
    </div>
  );
};

const FAQCard = ({ label, isOpened }: { label: string; isOpened: boolean }) => {
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
        backgroundColor: "#fff",
      }}
    >
      <IonIcon
        icon={isOpened ? removeCircle : addCircle}
        style={{ fontSize: "32px", color: "#1A315C" }}
      />

      <span style={{ paddingLeft: "2%" }}>{label}</span>
    </div>
  );
};
