import React from "react";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import "./Main.css";

function Main() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  let [bgFade, setBgFade] = useState("");

  async function getMovies() {
    const res = await fetch("http://127.0.0.1:8000/movies/genre/액션", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(res);
    const movies = await res.json();
    setMovies(movies);
    console.log(movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    setBgFade("mainBg-end");
    return () => {
      setBgFade("");
    };
  }, []);

  return (
    <div className={"mainBg-start " + bgFade}>
      <div className="main-body">
        <div>
          <Header />
        </div>
          <h1 id="main-h1">메인페이지</h1>
        </div>
    </div>
  );
}

export default Main;
