import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import PostCreate from './components/PostCreate';
import Footer from './components/Footer';
// import ShareButton from './components/ShareButton'; // インポート文を修正


function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<><Home /><Footer /></>} />
            <Route path="/create" element={<><PostCreate /><Footer /></>} />

            <Route path="/FileUploadUI" element={<FileUploadUI />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
