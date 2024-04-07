import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import
import HelloWorld from './HelloWorld'; 
import AdminPortal from './components/AdminPortal';
import JobPost from './components/Admin Portal/JobPost';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="/main" element={<AdminPortal />} />
        <Route path="/admin" element={<JobPost />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
