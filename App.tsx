import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './home/page';
import InvestPage from './invest/page';
import AgentsPage from './home/AgentsPage';
import LoginPage from './auth/LoginPage';
import SignupPage from './auth/SignupPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invest" element={<InvestPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
