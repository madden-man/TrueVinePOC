import React from 'react';
import ThreadPane from '../ThreadPane';
import MessagePane from '../MessagePane';
import MessageModal from '../MessageModal';

import './dashboard.css';

export const Dashboard = () =>
  <section className="dashboard">
    <ThreadPane />
    <MessagePane />
    <MessageModal />
  </section>;

export default Dashboard;
