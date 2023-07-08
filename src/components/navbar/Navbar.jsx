"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
      title: "Public",
        url: "/public",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>abe</Link>
      <div className={styles.links}>
      <DarkModeToggle />
        {links.map((link) => {
          return (
            <Link href={link.url} key={link.id} className={styles.link}>
              {link.title}
            </Link>
          )
        })}
      </div>
      <button
      className={styles.logout}
        onClick={() => {
          console.log('log out')
        }}>
          Log Out
      </button>
    </div>
  )
}

export default NavBar