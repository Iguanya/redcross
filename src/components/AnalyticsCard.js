// AnalyticsCard.js
import React from 'react';

const AnalyticsCard = ({ title, value, percentage, type }) => (
  <div className={`analytics-card ${type}`}>
    <div className="status">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
    <div className="progresss">
      <svg><circle cx="35" cy="35" r="35"></circle></svg>
      <div className="percentage">{percentage}</div>
    </div>
  </div>
);

export default AnalyticsCard;
