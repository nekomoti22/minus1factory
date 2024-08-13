import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PostCreate from './components/PostCreate';
import Notifications from './components/Notifications';
import Account from './components/Account'; // アカウント画面のコンポーネント
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<PostCreate />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
