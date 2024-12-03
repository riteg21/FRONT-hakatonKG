import React, { useState } from "react";
import "./styles.css";
import SignInForm from "./SignIn";
import SignUpForm from "../SignUp";

export default function App() {
  const [type, setType] = useState("signIn");
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">
      <div className={containerClass} id="container">
        <SignUpForm />
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Добро пожаловать!</h1>
              <p>Введите свои персональные данные</p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Войти
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Привет, Друг!</h1>
              <p></p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
