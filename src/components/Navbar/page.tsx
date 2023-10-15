'use client';

import Link from 'next/link';
import styles from './page.module.scss';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Automobiles',
    url: '/automobiles',
  },
  {
    id: 3,
    title: 'Categories',
    url: '/categories',
  },
];

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          My Auto Park
        </Link>

        <div className={styles.links}>
          <DarkModeToggle />
          {links.map((link) => {
            return (
              <Link key={link.id} href={link.url} className={styles.link}>
                {link.title}
              </Link>
            );
          })}
          <Link href="/new_auto" className={styles.addAuto}>
            Add Auto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
