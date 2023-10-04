import React from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { checkmarkDoneOutline } from "ionicons/icons";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./Register.css";
import { AuthWrapper } from "../../components/AuthWrapper";
import { isValidString } from "../../utils/validators";

const addUserSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().email("Enter valid email").required("Email is required"),
    password: Yup.string().when("isEditForm", {
      is: false,
      then: (schema) => Yup.string().required("Enter valid password"),
      otherwise: (schema) => Yup.string(),
    }),
    role: Yup.string().required("Select role"),
    isEditForm: Yup.boolean(),
  });

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: ''
  }
const Register: React.FC = () => {
  const router = useIonRouter();

  const registerUserForm = useFormik({
    initialValues,
    validationSchema: addUserSchema,
    onSubmit: () => {},
    validateOnMount: true,
  })
  const doRegister = (event: any) => {
    event.preventDefault();
    console.log("doRegister");
    router.goBack();
  };

  return (
    <IonPage>
      <AuthWrapper>
        <IonRow class="ion-justify-content-center">
          <IonCol sizeMd="12" sizeLg="10" sizeXl="10">
            <IonCard>
              <IonCardContent>
                <form onSubmit={doRegister}>
                  <IonInput
                    type="text"
                    placeholder="First name"
                    value={registerUserForm.values.firstname}
                    onIonInput={e=>registerUserForm.setFieldValue('firstname',e.target.value)}
                    onIonBlur={registerUserForm.handleBlur('firstname')}
                  />
                  <IonInput
                    className="ion-margin-top"
                    type="text"
                    placeholder="Last name"
                    value={registerUserForm.values.lastname}
                    onIonInput={e=>registerUserForm.setFieldValue('lastname',e.target.value)}
                    onIonBlur={registerUserForm.handleBlur('lastname')}
                  />
                  <IonInput
                    className="ion-margin-top"
                    type="email"
                    placeholder="Email"
                    value={registerUserForm.values.email}
                    onIonInput={e=>registerUserForm.setFieldValue('email',e.target.value)}
                    onIonBlur={registerUserForm.handleBlur('email')}
                  />
                  <IonInput
                    className="ion-margin-top"
                    type="password"
                    placeholder="Password"
                    value={registerUserForm.values.password}
                    onIonInput={e=>registerUserForm.setFieldValue('password',e.target.value)}
                    onIonBlur={registerUserForm.handleBlur('password')}
                  />
                  
                  <IonButton
                    type="submit"
                    expand="block"
                    className="ion-margin-top"
                  >
                    Create my account
                    <IonIcon icon={checkmarkDoneOutline} slot="end" />
                  </IonButton>
                </form>
                {/* {isValidString(errorMessage) ? (
                  <span style={{ color: "red" }}>{errorMessage}</span>
                ) : null} */}
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </AuthWrapper>
    </IonPage>
  );
};

export default Register;
