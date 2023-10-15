import Link from 'next/link';
import styles from './page.module.scss';
import Image from 'next/image';

export type autoItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  desc: string;
  img: string;
};

async function getData() {
  const res = await fetch('https://64fc8074605a026163ae8fe7.mockapi.io/automobiles', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Automobiles = async () => {
  const data = await getData();
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.items}>
          {data.map((item: autoItem) => (
            <Link href={`/automobiles/${item.id}`} className={styles.auto}>
              <div className={styles.auto__img}>
                <Image priority={true} src={item.img} alt="car" width={200} height={150} />
              </div>
              <div className={styles.auto__info}>
                <div className={styles.auto__info__category}>
                  <span>{item.category}</span>
                </div>
                <div className={styles.auto__info__name}>{item.name}</div>
                <div className={styles.auto__info__description}>{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Automobiles;
