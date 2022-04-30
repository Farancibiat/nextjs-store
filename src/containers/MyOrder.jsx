import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import Link from 'next/link';
import flechita from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';
import Image from 'next/image';
import AppContext from '@context/AppContext';

const MyOrder = () => {
  const { state } = useContext(AppContext);
  const sumTotal = () => {
    return state.cart.reduce((prevTotal, current) => {
      return prevTotal + current.price;
    }, 0);
  };
  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={flechita} alt="arrow" />
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles['my-order-content']}>
        {state.cart.map((item, index) => {
          return <OrderItem product={item} key={`order-${index}`} index={index} />;
        })}
        <div className={styles['order']}>
          <p>
            <span>Total</span>
          </p>
          <p>{`$${sumTotal()}`}</p>
        </div>
        <Link href="/checkout" className={styles['primary-button']}>
          Checkout
        </Link>
      </div>
    </aside>
  );
};

export default MyOrder;
