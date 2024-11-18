// UserCard.js
import React from 'react';

const UserCard = ({ name, time }) => (
  <div className="user">
    <img src={`${name.toLowerCase()}.jpg`} alt={name} />
    <p>{name}</p>
    {time && <small>{time}</small>}
  </div>
);

export default UserCard;
