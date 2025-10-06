import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/Background/Background";
import Hero from "./Components/Hero/Hero";
import WeatherForecast from "./Components/WeatherForecast/WeatherForecast";
// import Login from "./Components/SignUp/Login";
import StreamSociety from "./Components/Stream-society/StreamSociety";
import LearningResources from "./Components/Learning resources/LearningResources";
// import SignUpForm from "./Components/SignUp/SignUpForm";
// import Profile from './Components/SignUp/Profile';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  let heroData = [
    { text1: "Be prepared", text2: "for floods" },
    { text1: "Get real-time", text2: "weather updates" },
    { text1: "Know the steps to", text2: "ensure your safety" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Background playStatus={playStatus} heroCount={heroCount} />
                <Hero
                  setPlayStatus={setPlayStatus}
                  heroData={heroData[heroCount]}
                  heroCount={heroCount}
                  setHeroCount={setHeroCount}
                  playStatus={playStatus}
                />
              </div>
            }
          />
          <Route path="/weather" element={<WeatherForecast />} />
          {/* <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} /> */}
          <Route path="/StreamSociety" element={<StreamSociety />} />
          <Route path="/LearningResources" element={<LearningResources/>} />
        </Routes>
      </div>
      <ToastContainer/>
    </Router>
  );
};

export default App;
