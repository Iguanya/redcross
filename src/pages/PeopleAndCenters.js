// src/pages/PeopleAndCenters.js
import React, { useState } from 'react';

const PeopleAndCenters = () => {
  const [volunteers] = useState([
    { name: 'John Doe', status: 'Active', role: 'Rescue Worker' },
    { name: 'Jane Smith', status: 'On Leave', role: 'Medical Staff' },
  ]);

  const [centers] = useState([
    { name: 'Center A', location: 'Downtown', status: 'Prepared' },
    { name: 'Center B', location: 'Suburb', status: 'Partially Prepared' },
  ]);

  const handleAddVolunteer = () => {
    console.log('New volunteer added!');
  };

  return (
    <main>
      <h1 className="page-title">People & Centers</h1>
      <p className="page-description">
        Manage registered volunteers, track their status, assign them to emergencies, and monitor center preparedness.
      </p>

      <button onClick={handleAddVolunteer} className="btn add-volunteer-btn">Add New Volunteer</button>

      <section className="volunteers-section">
        <h2 className="section-title">Registered Volunteers</h2>
        <div className="volunteer-list">
          {volunteers.map((volunteer, index) => (
            <div key={index} className="volunteer-card card">
              <h3 className="volunteer-name">{volunteer.name}</h3>
              <p className="volunteer-role">Role: {volunteer.role}</p>
              <p className="volunteer-status">
                Status: <span className={`status ${volunteer.status.toLowerCase()}`}>{volunteer.status}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="centers-section">
        <h2 className="section-title">Emergency Centers</h2>
        <div className="center-list">
          {centers.map((center, index) => (
            <div key={index} className="center-card card">
              <h3 className="center-name">{center.name}</h3>
              <p className="center-location">Location: {center.location}</p>
              <p className="center-status">
                Status: <span className={`status ${center.status.toLowerCase().replace(' ', '-')}`}>{center.status}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PeopleAndCenters;
