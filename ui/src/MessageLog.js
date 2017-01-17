import React, { Component } from 'react';
import XMLViewer from './XMLViewer';

const MessageLog = ({ log }) => (
  <ul>
    {log.map((log) => (
      <XMLViewer xml={log.msg} />
    ))}
  </ul>
);

export default MessageLog;
