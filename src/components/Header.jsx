import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Menu from './Menu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);
  const router = useRouter();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleToggleMyOrders = () => {
    setToggleOrders(!toggleOrders);
  };

  return (
    <nav className={styles.Nav}>
      <img src={menu.src} alt="menu" className={styles.menu} />
      <div className={styles['navbar-left']}>
        <Image src={logo} alt="logo" className={styles['nav-logo']} priority onClick={() => router.push('/')} />

        <ul>
          <li>
            <Link href="/" passHref>
              All
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              Clothes
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              Electronics
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              Furnitures
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              Toys
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              Others
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li>
            <button className={styles['navbar-email']} onClick={() => handleToggle()}>
              platzi@example.com
            </button>
          </li>
          <li>
            <button className={styles['navbar-shopping-cart']} onClick={() => handleToggleMyOrders()}>
              <Image src={shoppingCart} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </button>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
