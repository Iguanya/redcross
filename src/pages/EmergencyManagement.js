// src/pages/EmergencyManagement.js
import React from 'react';

const EmergencyManagement = () => (
  <main>
    <h1 className="page-title">Emergency Management</h1>
    <p className="page-description">
      Track and manage emergency alerts, view locations on the map, create incident reports, and allocate resources.
    </p>

    <section className="emergency-section">
      {/* Current Alerts Card */}
      <div className="card alert-card">
        <h2 className="card-title">Current Alerts</h2>
        <p className="card-description">Monitor ongoing emergencies in real time.</p>
        <div className="alerts">
          <div className="alert">
            <h3 className="alert-title">Flood in Region A</h3>
            <p className="alert-severity">Severity: High</p>
            <button className="btn">View Details</button>
          </div>
          <div className="alert">
            <h3 className="alert-title">Fire in City B</h3>
            <p className="alert-severity">Severity: Medium</p>
            <button className="btn">View Details</button>
          </div>
        </div>
      </div>

      {/* Incident Reports Card */}
      <div className="card report-card">
        <h2 className="card-title">Incident Reports</h2>
        <p className="card-description">Create and view incident reports from the field.</p>
        <button className="btn add-report-btn">Add New Emergency Report</button>
        <div className="report-list">
          <div className="report">
            <h3 className="report-title">Power Outage</h3>
            <p className="report-time">Reported: 2 hours ago</p>
          </div>
          <div className="report">
            <h3 className="report-title">Evacuation Needed in Zone C</h3>
            <p className="report-time">Reported: 5 hours ago</p>
          </div>
        </div>
      </div>

      {/* Resource Allocation Card */}
      <div className="card resource-card">
        <h2 className="card-title">Resource Allocation</h2>
        <p className="card-description">Track and manage resources for emergency response.</p>
        <div className="resources">
          <div className="resource">
            <h3 className="resource-title">Medical Supplies</h3>
            <p className="resource-status">Status: In Transit</p>
          </div>
          <div className="resource">
            <h3 className="resource-title">Rescue Teams</h3>
            <p className="resource-status">Status: Deployed</p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default EmergencyManagement;
