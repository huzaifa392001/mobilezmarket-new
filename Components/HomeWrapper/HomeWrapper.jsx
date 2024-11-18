"use client";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "../../Redux/Store";
import { PersistGate } from "redux-persist/integration/react";

function HomeWrapper({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main className="wrapper">{children}</main>
      </PersistGate>
    </Provider>
  );
}

export default HomeWrapper;
