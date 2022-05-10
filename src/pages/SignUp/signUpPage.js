import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const SignUp = () => {
  let [fade, setFade] = useState("");
  let [bgFade, setBgFade] = useState("");
  let [buttonState, setButtonState] = useState("");
  let [inputName, setInputName] = useState("");
  let [inputEmail, setInputEmail] = useState("");
  let [inputPw, setInputPw] = useState("");
  let [inputPwValidate, setInputPwValidate] = useState("");
  const [errors, setErrors] = useState(false);

  const check =
    inputEmail.includes("@") &&
    inputPw.length > 3 &&
    inputPwValidate.length > 3;

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleInputPwValidate = (e) => {
    setInputPwValidate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: inputName,
      email: inputEmail,
      pssword: inputPw,
    };

    if (inputPw !== inputPwValidate) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
      setErrors(true);
    }

    if (errors) {
      setInputPw("");
      setInputPwValidate("");
    }
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
    if (check) {
      setButtonState("able-button");
    }
    return () => {
      setButtonState("");
    };
  }, [check]);

  return (
    <div className={"login-bg bg-start " + bgFade}>
      {errors === true && <h2>Cannot log in with provided credentials</h2>}
      <div className="logo-box">
        <img className="logo" src="img/넷플릭스.png" />
      </div>
      <div className="box"></div>
      <div className="login-body">
        <div id="main-holder" className={"start " + fade}>
          <h1 className="login-header">회원가입</h1>
          <form id="login-form" onSubmit={onSubmit}>
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
              value={inputEmail}
              onChange={handleInputEmail}
              type="email"
              name="email"
              id="password-field"
              className="login-form-field"
              placeholder="E-mail"
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
            <input
              value={inputPwValidate}
              onChange={handleInputPwValidate}
              type="password"
              name="password"
              id="password-field"
              className="login-form-field"
              placeholder="Password"
            />
            <input
              disabled={!check}
              type="submit"
              value="회원가입"
              className={"disable-button " + buttonState}
            />
            <p>
              이미 계정이 있으신가요? <Link to={"/loginpage"}>로그인</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
