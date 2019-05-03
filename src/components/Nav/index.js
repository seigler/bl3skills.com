import { Component } from 'preact';
import { Link } from 'preact-router';
import style from './index.css';

export default function Nav (props) {
  return (
    <nav class={ style.nav }>
      <ul class={ style.links }>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/operative">Zane</Link></li>
        <li><Link href="/siren">Amara</Link></li>
        <li><Link href="/beastmaster">FL4K</Link></li>
        <li><Link href="/bot-jock">Moze</Link></li>
      </ul>
    </nav>
  );
}
