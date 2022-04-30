import React, { useContext } from 'react';
import iconClose from '@icons/icon_close.png';
import AppContext from '@context/AppContext';
import Image from 'next/image';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product, index }) => {
  const { removeFromCart } = useContext(AppContext);
  return (
    <div className={styles.OrderItem}>
      <figure>{product?.images[0] && <Image src={product?.images[0]} alt={product?.title} height={60} width={60} />}</figure>
      <p>{product?.title}</p>
      <p>{`$${product?.price ?? 0}`}</p>
      <Image src={iconClose} alt="close" onClick={() => removeFromCart(index)} />
    </div>
  );
};

export default OrderItem;
