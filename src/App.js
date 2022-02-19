import { React, Component } from "react";

import { Switch, Route } from "react-router-dom";
import { Routes, Router } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/header";
import Navigation from "./Components/Navigation/Navigation";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setings from "./Components/Setings/Setings";
import Home from "./Components/Home/Home";
import SideBar from "./Components/Navigation/SideBar/sideBar";
import DialogsContainer from "./Components/Dialogs/Dialogsconteiner";

const App = (props) => {
  return (
    
    <div className="app-wrapper">
      <Header />
      <Navigation sidebar={props.sidebar} />

      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dialogs"
            element={
              <DialogsContainer/>
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
           
                
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/setings" element={<Setings />} />
        </Routes>
      </div>
    </div>

  );
};

export default App;
