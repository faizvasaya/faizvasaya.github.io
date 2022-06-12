import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Layout from "./components/Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route
            path="resume"
            component={() => {
              window.location.href =
                "https://drive.google.com/file/d/1s73J6y4s3OcwGjvKey_GdR2WYF2xCvb3/view?usp=sharing";
              return null;
            }}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
