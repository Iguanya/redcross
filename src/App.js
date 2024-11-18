// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import EmergencyManagement from './pages/EmergencyManagement';
import PeopleAndCenters from './pages/PeopleAndCenters';
import SettingsAndHelp from './pages/SettingsAndHelp';
import "./App.css";

const App = () => (
  <Router>
    <div className="container">
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/emergency-management" element={<EmergencyManagement />} />
          <Route path="/people-and-centers" element={<PeopleAndCenters />} />
          <Route path="/settings" element={<SettingsAndHelp />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;
