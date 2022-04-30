import React from 'react';
import ProductInfo from '@components/ProductInfo';
import styles from '@styles/ProductDetail.module.scss';
import Image from 'next/image';
import iconClose from '@icons/icon_close.png';

const ProductDetail = () => {
  return (
    <aside className={styles.ProductDetail}>
      <div className={styles['ProductDetail-close']}>
        <Image src={iconClose} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
