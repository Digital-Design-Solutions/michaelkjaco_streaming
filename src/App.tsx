import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import Menu from "./pages/Menu";
import { useAppSelector } from "./hooks/reduxHook";
import { selectIsAuthenticated } from "./features/slice/user.slice";
import Home from "./pages/Home";
import "./App.css";

setupIonicReact({
  // mode: 'ios',
  // animated: false,
});

const App: React.FC = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet className="ion-no-margin">
          {!isAuthenticated ? (
            <>
              <Route component={Login} path="/" />
              <Route component={Register} path="/register" exact />
              <Route exact path="*">
                <Redirect to="/" />
              </Route>
            </>
          ) : (
            <>
            <Route component={Home} path="/home" />
              <Route component={Menu} path="/app" />
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </>
          )}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
