import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass] = useState("text-animate-hover");
  const nameArray = [" ", "F", "a", "i", "z", "a", "l", ","];
  const jobArray = [
    "a",
    " ",
    "f",
    "u",
    "l",
    "l",
    " ",
    "s",
    "t",
    "a",
    "c",
    "k",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={letterClass}>i,</span>
            <br />
            <span className={letterClass}>I</span>
            <span className={letterClass}>'m</span>
            {nameArray.map((letter) => (
              <span className={letterClass}>{letter}</span>
            ))}
            <br />
            {jobArray.map((letter) => (
              <span className={letterClass}>{letter}</span>
            ))}
          </h1>
          <h2>Full stack developer / Dapp developer / LinkedIn Influencer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
