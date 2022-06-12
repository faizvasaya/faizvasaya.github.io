import React, { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from "../../data/portfolio.json";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const renderPortfolio = (portfolioData) => {
    return (
      portfolioData && (
        <div className="images-container">
          {portfolioData.map((portfolio, idx) => {
            return (
              <div className="image-box" key={portfolio.id}>
                <img
                  src={portfolio.cover}
                  alt={portfolio.title}
                  className="porfolio-image"
                />
                <div className="content">
                  <p className="title">{portfolio.title}</p>
                  <h4 className="description">{portfolio.description}</h4>
                </div>
              </div>
            );
          })}
        </div>
      )
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            idx={15}
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
