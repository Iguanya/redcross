// src/pages/SettingsAndHelp.js
import React from 'react';

const SettingsAndHelp = () => {
  return (
    <main className="settings-help-container">
      <h1 className="page-title">Settings & Help</h1>
      <p className="page-description">
        Manage user roles, permissions, and application settings. Access FAQs, user manuals, and support contacts.
      </p>

      {/* User Roles & Permissions Section */}
      <section className="user-roles-section">
        <h2 className="section-title">User Roles & Permissions</h2>
        <button className="btn">Add New User Role</button>
        <div className="roles-list">
          <div className="role-card">
            <h3 className="role-title">Administrator</h3>
            <p className="role-description">Full access to manage all application settings and data.</p>
          </div>
          <div className="role-card">
            <h3 className="role-title">Editor</h3>
            <p className="role-description">Can edit and manage content but cannot access user settings.</p>
          </div>
          <div className="role-card">
            <h3 className="role-title">Viewer</h3>
            <p className="role-description">Read-only access to view content without editing permissions.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3 className="faq-question">How do I reset my password?</h3>
          <p className="faq-answer">
            To reset your password, go to the login page and click on "Forgot Password." Follow the instructions sent to
            your email.
          </p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">How can I contact support?</h3>
          <p className="faq-answer">
            You can contact support by emailing us at <a href="mailto:support@example.com">support@example.com</a>.
          </p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">How do I update application settings?</h3>
          <p className="faq-answer">
            Navigate to the "Settings" section and update your preferences as needed.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SettingsAndHelp;
