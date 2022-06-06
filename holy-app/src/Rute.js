import "./App.css";
import React from "react";
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./components/LandingPage";
import Ticket from "./components/Ticket";
import News from "./components/News";
import Roster from "./components/Roster";
import Berita from "./components/Berita";
import NewsDetail from "./components/NewsDetail";
import Profile from "./components/Profile";
import Download from "./components/Download";
import Rankings from "./components/Rankings";
import PopUp from "./components/PopUp";
import Verify from "./components/Verify";
import Match from "./components/Match";
import Payment from "./components/Payment";
import Atlet from "./components/Atlet";
import Watch from "./components/Watch";
import Event from "./components/Event";
import Video from "./components/Video";
import Register from "./components/Register";
import "../src/style/LandingPage.css";
import "../src/style/NavigationBar.css";
import "../src/style/BannerRoster.css";
import "../src/style/Upcoming.css";
import "../src/style/Footer.css";
import "../src/style/News.css";
import "../src/style/Berita.css";
import "../src/style/Latest.css";
import "../src/style/Profile.css";
import "../src/style/Download.css";
import "../src/style/NewsDetail.css";
import "../src/style/RosterCard.css";
import "../src/style/Rankings.css";
import "../src/style/Match.css";
import "../src/style/PopUp.css";
import "../src/style/Payment.css";
import "../src/style/Atlet.css";
import "../src/style/Result.css";
import "../src/style/Biography.css";
import "../src/style/Career.css";
import "../src/style/Other.css";
import "../src/style/Watch.css";
import "../src/style/Video.css";
import "../src/style/Register.css";
import "../src/style/Carousel.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Rute = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Roster" element={<Roster />} />
          <Route path="/News" element={<Berita />} />
          <Route path="/News_Detail" element={<NewsDetail />} />
          <Route path="/News_All" element={<News />} />
          <Route path="/Watch" element={<Watch />} />
          <Route path="/Schedule" element={<Ticket />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<PopUp />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Download" element={<Download />} />
          <Route path="/Atlet" element={<Atlet />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Rankings" element={<Rankings />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/Match" element={<Match />} />
          <Route path="/Video" element={<Video />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Rute;
