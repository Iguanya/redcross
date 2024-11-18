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
      <AnalyticsCard title="Total Emergencies" value="124" percentage="+15%" type="success" />
      <AnalyticsCard title="Active Alerts" value="45" percentage="-3%" type="danger" />
      <AnalyticsCard title="Centers Prepared" value="78" percentage="+10%" type="primary" />
    </section>
    <section className="new-users">
      <h2>New Users</h2>
      <div className="user-list">
        <UserCard name="Jack" time="54 Min Ago" />
        <UserCard name="Amir" time="3 Hours Ago" />
        <UserCard name="Ember" time="6 Hours Ago" />
        <UserCard name="More" />
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
