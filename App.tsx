import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './home/page';
import InvestPage from './invest/page';
import AgentsPage from './home/AgentsPage';
import LoginPage from './auth/LoginPage';
import SignupPage from './auth/SignupPage';

import PartnerFormPage from './partner-form/form/page';

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
        <Route path="/partner-form" element={<PartnerFormPage />} />
        <Route path="/form" element={<PartnerFormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
