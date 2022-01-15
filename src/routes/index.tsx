import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "../App";
import HomeScreen from "../pages/HomeScreen";
import LoginScreen from "../pages/LoginScreen";
import RecoverCodeScreen from "../pages/RecoverCodeScreen";
import RecoverEmailScreen from "../pages/RecoverEmailScreen";
import SignupScreen from "../pages/SignupScreen";

export default function Index(): ReactElement {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LoginScreen />} />
            <Route path="home" element={<HomeScreen />} />
            <Route path="signup" element={<SignupScreen />} />
            <Route path="recover" element={<RecoverEmailScreen />} />
            <Route path="recover-password" element={<RecoverCodeScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
