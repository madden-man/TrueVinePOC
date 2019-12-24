import React from 'react';
import ChatList from '../ChatList';
import MessageList from '../MessageList';
import MessageModal from '../MessageModal';

import './dashboard.css';

export const Dashboard = () =>
  <section className="dashboard">
    <ChatList />
    <MessageList />
    <MessageModal />
  </section>;

export default Dashboard;
