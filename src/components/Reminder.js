// src/components/Reminder.js
import React from 'react';

const Reminder = ({ title, time }) => (
  <div className="notification">
    <div className="icon">🔔</div>
    <div className="content">
      <p>{title}</p>
      <small>{time}</small>
    </div>
  </div>
);

export default Reminder;
