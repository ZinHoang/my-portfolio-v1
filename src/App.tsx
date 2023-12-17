import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainContent } from './MainContent';
import { Contact } from './sections/contact/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
