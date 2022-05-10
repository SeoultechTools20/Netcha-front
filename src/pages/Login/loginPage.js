import "./loginPage.css";
import React, { useEffect, useState } from "react";
import SignUp from "../SignUp/signUpPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';


const LoginPage = () => {
  let [fade, setFade] = useState("");
  let [bgFade, setBgFade] = useState("");
  let [inputName, setInputName] = useState("");
  let [inputPw, setInputPw] = useState("");
  let [buttonState, setButtonState] = useState("");
  let navigate = useNavigate();

  const check = inputPw.length > 0 ;

  const loginSuccess = () => {
    navigate("/mainpage");
  }

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  useEffect(() => {
    setFade("end");
    setBgFade("bg-end");
    return () => {
      setFade("");
      setBgFade("");
    };
  }, []);

  useEffect(() => {
    if(check) {
      setButtonState("able-button")
    }
    return () => {
      setButtonState("")
    }
  })

  return (
    <div>
      <Routes>
        <Route path="./signup" element={<SignUp />} />
      </Routes>
      <div className={"login-bg bg-start " + bgFade}>
        <div className="logo-box">
          <img className="logo" src="img/넷플릭스.png" />
        </div>
        <div className="box"></div>
        <div className="login-body">
          <div className={"start " + fade} id="main-holder">
            <h1 className="login-header">환영합니다!</h1>
            <form id="login-form">
            <input
                value={inputName}
                onChange={handleInputName}
                type="text"
                name="username"
                id="username-field"
                className="login-form-field"
                placeholder="Username"
              />
              <input
                value={inputPw}
                onChange={handleInputPw}
                type="password"
                name="password"
                id="password-field"
                className="login-form-field"
                placeholder="Password"
              />
              <button onClick={loginSuccess} disabled={!check} className={"disable-button " + buttonState}> 로그인 </button>
              <p>
                아직 계정이 없나요? <Link to={`/signup`}>가입하세요!</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
