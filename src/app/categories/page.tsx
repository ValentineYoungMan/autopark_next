'use client';

import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';
import { categories } from '../new_auto/page';

const Categories = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Choose a category</h1>
        <div className={styles.items}>
          {categories.map((item, index) => {
            return (
              <Link key={index} href={`/categories/${item}`} className={styles.item}>
                <span className={styles.category_name}>{item}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
