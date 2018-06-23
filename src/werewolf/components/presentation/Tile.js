import React, { Component } from 'react';

export default ({ image, text }) => (
  <div className="tile">
    <img src={image} />
    <p>{text}</p>
  </div>
);
