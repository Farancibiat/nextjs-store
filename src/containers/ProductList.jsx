import React from 'react';
import useGetProducts from '@hooks/useGetProducts';
import ProductItem from '@components/ProductItem';
import styles from '@styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {products.map((product) => {
          if (product.images.length > 0 && product.images[0] !== '') {
            return <ProductItem key={product.id} product={product} />;
          }
        })}
      </div>
    </section>
  );
};

export default ProductList;
