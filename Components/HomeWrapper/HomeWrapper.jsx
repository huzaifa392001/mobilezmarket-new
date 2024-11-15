"use client";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../../Redux/Store";

function HomeWrapper({ children }) {
  return (
    <Provider store={store}>
      <main className="wrapper">{children}</main>
    </Provider>
  );
}

export default HomeWrapper;
