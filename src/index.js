import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import UserInformationProvider from "./components/hook/useAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));
axios.defaults.baseURL = "http://localhost:5000";

root.render(
  <BrowserRouter>
    <UserInformationProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserInformationProvider>
  </BrowserRouter>
);
