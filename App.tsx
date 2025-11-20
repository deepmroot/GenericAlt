import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './GenericAlternativesHome/page';
import InvestPage from './invest/page';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invest" element={<InvestPage />} />
      </Routes>
    </Router>
  );
};

export default App;
