import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Member from "./components/Member";
import Event from "./components/Event";
import PostCreate from "./components/PostCreate";
import Footer from "./components/Footer";
import { PiMemberOf } from "react-icons/pi";

// import ShareButton from './components/ShareButton'; // インポート文を修正

function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <>
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/event"
              element={
                <>
                  <Event />
                  <Footer />
                </>
              }
            />
            <Route
              path="/member"
              element={
                <>
                  <Member />
                  <Footer />
                </>
              }
            />
            <Route
              path="/create"
              element={
                <>
                  <PostCreate />
                  <Footer />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
