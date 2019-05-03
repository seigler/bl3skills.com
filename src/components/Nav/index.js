import { Component } from 'preact';
import { Link } from 'preact-router';
import style from './index.css';

export default function Nav (props) {
  return (
    <nav class={ style.nav }>
      <ul class={ style.links }>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/Zane">Zane</Link></li>
        <li><Link href="/Amara">Amara</Link></li>
      </ul>
    </nav>
  );
}
