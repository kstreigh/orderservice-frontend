import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <header>
        <Link className={styles.logo} href="/">logo</Link>

        <input type="checkbox" id="menu-bar" className={styles.menubar}></input>
        <label for="menu-bar">menu</label>

        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/">about +</Link>
              <ul>
                <li>
                  <Link href="/orders">orders</Link>
                </li>
                <li>
                  <Link href="/orders/add">add order</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
