import { IonIcon, IonInput, IonItem, IonLabel } from "@ionic/react";
import React, { FocusEventHandler, useRef, useState } from "react";
import { person } from "ionicons/icons";

interface InputState {
  value: string;
  onChangeText: (value: string) => void;
  handleBlur: FocusEventHandler<any>;
  isError: boolean;
  errorMsg: string;
  isRequired: boolean;
  label: string;
  type: "text" | "email" | "password";
  prefixIcon?: React.ReactNode;
  suffixIcon?: (toggleSuffixIcon: boolean) => React.ReactNode;
  placeholder: string;
}
const CustomInput = ({
  value,
  onChangeText,
  handleBlur,
  isError,
  errorMsg,
  isRequired,
  label,
  type,
  prefixIcon,
  suffixIcon,
  placeholder,
}: InputState): JSX.Element => {
  const [getInputFocus, setInputFocused] = useState(false);
  const [toggleSuffixIcon, setToggleSuffixIcon] = useState(false);

  return (
    <div style={{ marginTop: "8px" }}>
      <IonLabel
        position="stacked"
        style={{ color: getInputFocus ? "#3880ff" : isError ? "red" : "gray" }}
      >
        {label}
        {isRequired ? "*" : ""}
      </IonLabel>
      <div
        style={{
          border: `2px solid ${
            getInputFocus ? "#3880ff" : isError ? "red" : "#DDDFE1"
          }`,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          marginBottom: isError ? "4px" : "0px",
          alignItems: "center",
        }}
      >
        {prefixIcon !== undefined ? (
          <div style={{ backgroundColor: "#6A707E1A", padding: "12px 0px 12px 12px" }}>{prefixIcon}</div>
        ) : null}
        <input
          onFocus={() => setInputFocused(true)}
          onBlur={(e) => {
            handleBlur && handleBlur(e);
            setInputFocused(false);
          }}
          value={value}
          onChange={(e) => onChangeText(e.target.value)}
          type={type ==='password' && toggleSuffixIcon ? 'text' : type}
          placeholder={placeholder}
          required={isRequired}
          style={{ border: "none", outline: "none", padding: "8px", flex: 1 }}
        />
        {suffixIcon !== undefined ? (
          <div style={{ padding: "12px" }} onClick={()=>setToggleSuffixIcon(!toggleSuffixIcon)}>{suffixIcon(toggleSuffixIcon)}</div>
        ) : null}
      </div>
      {isError ? (
        <IonLabel style={{ color: "red" }}>{errorMsg}</IonLabel>
      ) : null}
    </div>
  );
};

export default CustomInput;
