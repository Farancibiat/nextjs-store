import React, { useContext } from 'react';
import styles from '@styles/ProductItem.module.scss';
import Image from 'next/image';
import addToCartImg from '@icons/bt_add_to_cart.svg';
import addedToCartImg from '@icons/bt_added_to_cart.svg';
import AppContext from '@context/AppContext';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);
  const handleCart = (item) => {
    addToCart(item);
  };
  return (
    <div className={styles.ProductItem}>
      <Image src={product.images[0]} alt={product.title} width="100%" height="100%" layout="responsive" />
      <div className={styles['product-info']}>
        <div>
          <p>{`$${product.price}`}</p>
          <p>{product.title}</p>
        </div>
        <button className={styles['more-clickable-area']} onClick={() => handleCart(product)}>
          {state.cart.includes(product) ? (
            <Image className={(styles['disabled'], styles['add-to-cart-btn'])} src={addedToCartImg} alt="added_to_cart" />
          ) : (
            <Image className={(styles['add-to-cart-btn'], styles.pointer)} src={addToCartImg} alt="add_to_cart" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
