import React, { useState, useEffect } from "react";
import NavBase from "../../components/Nav/NavBase";
import "./MainPage.css";

function MainPage() {
  let [bgFade, setBgFade] = useState("");

  useEffect(() => {
    setBgFade("mainBg-end");
    return () => {
      setBgFade("");
    };
  }, []);

  return (
    <div className={"mainBg-start " + bgFade}>
      <NavBase />
      <div className="main-body">
        <div>
          <h1> ㅎㅇㅎㅇㅎㅇㅎ ㅎㅇㅇㅇㅇㅇㅇㅇㅇㅇ</h1>


        </div>
      </div>
    </div>
  );
}

export default MainPage;
