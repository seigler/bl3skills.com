import { Component } from 'preact';
import { Router } from 'preact-router';

import Nav from '@components/Nav';
import Footer from '@components/Footer';

import Home from 'async!@pages/Home';
import Zane from 'async!@pages/Zane';

import style from './index.css';

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <Router>
          <Home path="/" />
          <Zane path="/operative" />
        </Router>
      </main>

      <Footer />
    </div>
  );
}
