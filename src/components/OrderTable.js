// src/components/OrderTable.js
import React from 'react';

const OrderTable = () => (
  <table>
    <thead>
      <tr>
        <th>Report Name</th>
        <th>Report ID</th>
        <th>Urgency</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Flood Alert</td>
        <td>1245</td>
        <td>High</td>
        <td><span className="danger">Critical</span></td>
        <td>Details</td>
      </tr>
      <tr>
        <td>Fire Incident</td>
        <td>1246</td>
        <td>Medium</td>
        <td><span className="warning">Pending</span></td>
        <td>Details</td>
      </tr>
      <tr>
        <td>Earthquake</td>
        <td>1247</td>
        <td>Severe</td>
        <td><span className="success">Handled</span></td>
        <td>Details</td>
      </tr>
    </tbody>
  </table>
);

export default OrderTable;
