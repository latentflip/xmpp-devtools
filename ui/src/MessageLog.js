import React, { Component } from 'react';

const MessageLog = ({ log }) => (
  <ul>
    {log.map((log) => (
      <li>{log.msg}</li>
    ))}
  </ul>
);

export default MessageLog;
