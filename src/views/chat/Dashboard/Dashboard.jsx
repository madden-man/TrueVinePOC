import React from 'react';
import ChatList from 'components/ChatList';
import MessageList from 'components/MessageList';

import './dashboard.css';

export const Dashboard = () =>
  <section className="dashboard">
    <ChatList />
    <MessageList />
  </section>;

export default Dashboard;
