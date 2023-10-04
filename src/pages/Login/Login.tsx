import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCheckbox,
  IonCol,
  IonHeader,
  IonLabel,
  IonPage,
  IonRow,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";

import "./Login.css";
import CustomInput from "../../components/Form/CustomInput";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { loginUser } from "../../features/thunk/user.thunk";
import { RootState } from "../../features/store";
import { isValidString } from "../../utils/validators";
import { loginUserDefault, selectIsAuthenticated } from "../../features/slice/user.slice";
import bgURL from "../../assets/himalayas.avif";

const initialValues = {
  email: "",
  password: "",
};

const signinSchema = Yup.object().shape({
  email: Yup.string().email("Enter valid email").required("Email is required"),
  password: Yup.string().required("Enter valid password"),
});

const Login: React.FC = () => {
  const router = useIonRouter();
  const dispatch = useAppDispatch();
  const { errorMessage, isAuthenticating } = useAppSelector(
    (state: RootState) => state.user
  );
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const [present, dismiss] = useIonLoading();
  // const [loginForm, setLoginForm] = useState(initialValues);

  const loginForm = useFormik({
    initialValues,
    validationSchema: signinSchema,
    onSubmit: () => {},
    validateOnMount: true,
  });

  useEffect(() => {
    if (!isAuthenticating && isAuthenticated) {
      dismiss();
      router.push("/home", "root");
    } else if (isValidString(errorMessage)) {
      dismiss();
    }
  }, [isAuthenticating, isAuthenticated, errorMessage]);

  const doLogin = async (event: any) => {
    event.preventDefault();
    await present("Logging in...");
    // dispatch(loginUser(loginForm.values));
    dispatch(loginUserDefault());
  };

  const formContent = () => (
    <form onSubmit={doLogin} style={{ minWidth: "90%" }}>
      <CustomInput
        value={loginForm.values.email}
        onChangeText={(value) => loginForm.setFieldValue("email", value)}
        handleBlur={loginForm.handleBlur("email")}
        isError={
          (isValidString(loginForm.errors.email) &&
            loginForm.touched.email) as boolean
        }
        errorMsg={loginForm.errors.email as string}
        isRequired={true}
        label={"User Name"}
        type="text"
        placeholder={"User Name"}
        prefixIcon={
          <img
            src={require("../../assets/login_page/user.png")}
            style={{ width: "60%", height: "auto" }}
          />
        }
      />

      <CustomInput
        value={loginForm.values.password}
        onChangeText={(value) => loginForm.setFieldValue("password", value)}
        handleBlur={loginForm.handleBlur("password")}
        isError={
          (isValidString(loginForm.errors.password) &&
            loginForm.touched.password) as boolean
        }
        errorMsg={loginForm.errors.password as string}
        isRequired={true}
        label={"Password"}
        type="password"
        placeholder="Password"
        prefixIcon={
          <img
            src={require("../../assets/login_page/lock.png")}
            style={{ width: "60%", height: "auto" }}
          />
        }
        suffixIcon={(toggleSuffixIcon) => (
          <img
            src={require("../../assets/login_page/eyeclose.png")}
            style={{ width: "50%", height: "auto", float: "right" }}
          />
        )}
      />

      <IonRow style={{ paddingTop: "4px" }}>
        <IonCol sizeXs="12" sizeSm="6" sizeMd="6" sizeLg="6" sizeXl="6">
          <IonCheckbox labelPlacement="end">Keep me signed in</IonCheckbox>
        </IonCol>
        <IonCol
          sizeXs="12"
          sizeSm="6"
          sizeMd="6"
          sizeLg="6"
          sizeXl="6"
          style={{ textAlign: "right", color: "#1A315C" }}
        >
          <IonLabel>Forgot Password?</IonLabel>
        </IonCol>
      </IonRow>

      <button
        type="submit"
        style={{
          marginTop: "24px",
          background: "#1A315C  0% 0% no-repeat padding-box",
          color: "#fff",
          textAlign: "center",
          width: "100%",
          padding: "12px",
          textTransform: "uppercase",
        }}
        disabled={!loginForm.isValid}
      >
        Submit
      </button>
      <IonRow
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
        class="ion-padding-top"
      >
        <div
          style={{
            width: "15%",
            height: "2%",
            border: "1px solid #ccc",
          }}
        />
        <IonLabel style={{ margin: "0px 8px" }}>OR</IonLabel>
        <div
          style={{
            width: "15%",
            height: "2%",
            border: "1px solid #ccc",
          }}
        />
      </IonRow>

      <button
        type="submit"
        style={{
          marginTop: "16px",
          background: "#fff  0% 0% no-repeat padding-box",
          color: "#1A315C",
          textAlign: "center",
          width: "100%",
          padding: "12px",
          border: "1px solid #1A315C",
          textTransform: "uppercase",
        }}
      >
        Create account
      </button>
    </form>
  );

  return (
    <IonPage>
      <IonHeader
        style={{
          padding: "4vh",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
        }}
      >
        <img
          src={require("../../assets/logo.png")}
          style={{ width: "130px", position: "absolute", top: "0px" }}
        />
      </IonHeader>
      <IonRow
        class="ion-justify-content-center ion-align-items-center"
        style={{
          height: "100%",
          background: `url(${bgURL}) 0 0/100% 100% no-repeat`,
          overflow: 'scroll'
        }}
      >
        <IonCol sizeXs="12" sizeSm="8" sizeMd="10" sizeLg="6" sizeXl="4">
          <IonCard
            style={{
              padding: "24px",
              justifyContent: "center",
              // minHeight: "550px",
            }}
          >
            <IonCardTitle
              class="ion-padding"
              style={{
                justifyContent: "center",
                textAlign: "center",
                fontWeight: "700",
                color: "#464A53",
              }}
            >
              Sign In to Your Account
            </IonCardTitle>
            <IonCardContent
              class="ion-padding ion-justify-content-center"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {formContent()}
              {isValidString(errorMessage) ? (
                <span style={{ color: "red" }}>{errorMessage}</span>
              ) : null}
              <IonLabel
                style={{
                  color: "#ABAFB3",
                  fontSize: "0.7rem",
                  margin: "2vh 0px 0px 0px",
                }}
              >
                This page is protected by Google reCAPTCHA to ensure you’re not
                a bot. <span style={{ color: "#1A315C" }}>Learn more.</span>
              </IonLabel>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonPage>
  );
};

export default Login;
