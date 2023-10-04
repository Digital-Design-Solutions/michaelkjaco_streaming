import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";
import { Provider } from "react-redux";
import store from "../../features/store";

test("Page should have a title of Sign In to Your Account", async () => {
  const { queryByText } = render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  expect(queryByText("Sign In to Your Account")).not.toBeNull();
});
