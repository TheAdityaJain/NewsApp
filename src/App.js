import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <Router>
      <Navbar />
      <LoadingBar height={3} color="#000000" progress={progress} />
      <Routes>
        <Route
          path="/"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              category="general"
              sources="the-hindu,the-times-of-india,bbc-news,cnn"
              pageSize={15}
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              category="business"
              sources="business-insider,the-wall-street-journal"
              pageSize={15}
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              category="entertainment"
              sources="buzzfeed,entertainment-weekly,ign,mtv-news"
              pageSize={15}
            />
          }
        />
        <Route
          path="/general"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              category="general"
              sources="bbc-news,cnn,reddit-r-all"
              pageSize={15}
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              category="health"
              sources="medical-news-today"
              pageSize={15}
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              category="science"
              sources="national-geographic,new-scientist,next-big-future"
              pageSize={15}
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              category="bbc-sports"
              pageSize={15}
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              category="technology"
              sources="crypto-coins-news,techcrunch,the-verge,wired"
              pageSize={15}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
