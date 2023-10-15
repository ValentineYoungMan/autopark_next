'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import axios from 'axios';
import { autoItem } from './../../automobiles/page';
import { GetStaticProps } from 'next';
import { useParams } from 'react-router-dom';

type paramsType = {
  params: string;
};

async function getData(id: string) {
  const res = await fetch(`https://64fc8074605a026163ae8fe7.mockapi.io/automobiles/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const AutoItem = async ({ params }: any) => {
  console.log(params);
  const data = await getData(params.id);

  const onDeleteAuto = () => {
    if (window.confirm('Are you sure you want to remove?')) {
      axios
        .delete(`https://64fc8074605a026163ae8fe7.mockapi.io/automobiles/${params.id}`)
        .then((res) => {
          console.log(res);
          console.log('yeho');
          window.location.reload();
          window.location.pathname = '/';
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.img}>
          <Image src={data.img} alt="" priority={true} width={500} height={300} />
        </div>
        <div className={styles.name}>{data.name}</div>
        <div className={styles.name}>{data.category}</div>
        <div className={styles.model}>{data.model}</div>
        <div className={styles.price}>$ {data.price}</div>
        <div className={styles.description}>{data.desc}</div>
        <button className={styles.button} onClick={onDeleteAuto}>
          Delete Item
        </button>
      </div>
    </main>
  );
};

export default AutoItem;
