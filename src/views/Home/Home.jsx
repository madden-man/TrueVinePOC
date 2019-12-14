import React from 'react';
import Header from 'components/Header';
import ChatList from 'components/ChatList';

export const Home = () =>
  <>
    <Header />
    <section className="dashboard">
      <ChatList />
    </section>
  </>;

export default Home;
