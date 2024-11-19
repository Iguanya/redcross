import React from 'react';
import Header from '../Header';
import AnalyticsCard from '../components/AnalyticsCard';
import UserCard from '../components/UserCard';
import OrderTable from '../components/OrderTable';
import Reminder from '../components/Reminder';

const Dashboard = () => (
  <main>
    <Header />
    <section className="analyse">
      <div className="analytics-card success">
        <h3 className="card-title">Total Emergencies</h3>
        <p className="card-value">124</p>
        <p className="card-percentage">+15%</p>
      </div>
      <div className="analytics-card">
        <h3 className="card-title">Active Alerts</h3>
        <p className="card-value">45</p>
        <p className="card-percentage">-3%</p>
      </div>
      <div className="analytics-card primary">
        <h3 className="card-title">Centers Prepared</h3>
        <p className="card-value">78</p>
        <p className="card-percentage">+10%</p>
      </div>
    </section>

    <section className="new-users">
      <h2 className="section-title">New Users</h2>
      <div className="user-list">
        <div className="user-card">
          <img src="path/to/jack.jpg" alt="Jack" className="user-image" />
          <h3 className="user-name">Jack</h3>
          <p className="user-time">54 Min Ago</p>
        </div>
        <div className="user-card">
          <img src="path/to/amir.jpg" alt="Amir" className="user-image" />
          <h3 className="user-name">Amir</h3>
          <p className="user-time">3 Hours Ago</p>
        </div>
        <div className="user-card">
          <img src="path/to/ember.jpg" alt="Ember" className="user-image" />
          <h3 className="user-name">Ember</h3>
          <p className="user-time">6 Hours Ago</p>
        </div>
        <div className="user-card">
          <img src="path/to/more.jpg" alt="More" className="user-image" />
          <h3 className="user-name">More</h3>
          <p className="user-time">8 Hours Ago</p>
        </div>
      </div>
    </section>

    <section className="recent-orders">
      <h2>Recent Reports</h2>
      <OrderTable />
      <button className="btn-link">Show All</button>
    </section>
    <section className="reminders">
      <div className="header">
        <h2>Reminders</h2>
        <span>🔔</span>
      </div>
      <Reminder title="Emergency Drill" time="08:00 AM - 12:00 PM" />
      <Reminder title="Safety Training" time="01:00 PM - 03:00 PM" />
      <div className="add-reminder">
        <div>➕ Add Reminder</div>
      </div>
    </section>
  </main>
);

export default Dashboard;
