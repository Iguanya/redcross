import React, { useState } from "react";

const predefinedIncidents = [
  { type: "🔥 Fire", location: "City Center", severity: "High" },
  { type: "🌊 Flood", location: "Region A", severity: "Medium" },
  { type: "🌎 Earthquake", location: "Zone C", severity: "Critical" },
  { type: "⚡ Power Outage", location: "Suburb B", severity: "Low" },
];

const ReportIncident = () => {
  const [reports, setReports] = useState(() => {
    const storedReports = localStorage.getItem("incidentReports");
    return storedReports ? JSON.parse(storedReports) : [];
  });

  const [customIncident, setCustomIncident] = useState({
    type: "",
    location: "",
    severity: "Medium",
  });

  const handleReport = (incident) => {
    const newReport = {
      ...incident,
      timestamp: new Date().toISOString(),
    };

    const updatedReports = [...reports, newReport];
    setReports(updatedReports);

    localStorage.setItem("incidentReports", JSON.stringify(updatedReports));
    alert(`Incident "${incident.type}" reported successfully!`);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (customIncident.type && customIncident.location) {
      handleReport(customIncident);
      setCustomIncident({ type: "", location: "", severity: "Medium" });
    } else {
      alert("Please fill out all fields for a custom incident!");
    }
  };

  return (
    <div className="report-incident-container">
      <h1>📢 Report an Emergency</h1>
      <p>Select an emergency from the options below or report a custom one.</p>

      {/* Predefined Incident Buttons */}
      <div className="incident-buttons">
        {predefinedIncidents.map((incident, index) => (
          <button
            key={index}
            className="incident-btn"
            onClick={() => handleReport(incident)}
          >
            {incident.type} - {incident.severity}
          </button>
        ))}
      </div>

      {/* Custom Incident Form */}
      <div className="custom-incident-form">
        <h2>✍️ Custom Emergency</h2>
        <form onSubmit={handleCustomSubmit}>
          <label>
            Incident Type:
            <input
              type="text"
              value={customIncident.type}
              onChange={(e) =>
                setCustomIncident({ ...customIncident, type: e.target.value })
              }
              placeholder="e.g., Gas Leak"
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              value={customIncident.location}
              onChange={(e) =>
                setCustomIncident({ ...customIncident, location: e.target.value })
              }
              placeholder="e.g., Building A"
            />
          </label>
          <label>
            Severity:
            <select
              value={customIncident.severity}
              onChange={(e) =>
                setCustomIncident({ ...customIncident, severity: e.target.value })
              }
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </label>
          <button type="submit" className="incident-btn custom-btn">
            ➕ Add Custom Emergency
          </button>
        </form>
      </div>

      {/* Reported Incidents */}
      <h2>📜 Reported Incidents</h2>
      <div className="reported-list">
        {reports.length > 0 ? (
          reports.map((report, index) => (
            <div key={index} className="report-card">
              <h3>{report.type}</h3>
              <p>Location: {report.location}</p>
              <p>Severity: {report.severity}</p>
              <p>Reported At: {new Date(report.timestamp).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>No incidents reported yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReportIncident;
