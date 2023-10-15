'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import sportcar from './../../public/sportcar.jpg';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.mainblock}>
          <div className={styles.mainblock__info}>
            <h1 className={styles.title}>The Future of AI in the next few years</h1>
            <p className={styles.desc}>
              {' '}
              Turning your Idea into Reality. We bring together the teams from the global tech
              industry.
            </p>
          </div>
          <div className={styles.mainblock__img}>
            <Image priority={true} src={sportcar} alt="main photo" className={styles.img} />
          </div>
        </div>
        <div className={styles.info}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium natus repudiandae
            saepe sapiente voluptatum sequi incidunt corporis consectetur temporibus, nihil, dolore
            numquam, inventore blanditiis reiciendis itaque sit laborum at? Tempora. Dolor
            praesentium earum magni. Pariatur minima fugiat fugit? Rem atque quas impedit? Sint
            sequi, quod, voluptas alias, repellat qui cum suscipit eveniet quidem magnam atque
            officiis quasi ullam! Sunt, nostrum!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium natus repudiandae
            saepe sapiente voluptatum sequi incidunt corporis consectetur temporibus, nihil, dolore
            numquam, inventore blanditiis reiciendis itaque sit laborum at? Tempora. Dolor
            praesentium earum magni. Pariatur minima fugiat fugit? Rem atque quas impedit? Sint
            sequi, quod, voluptas alias, repellat qui cum suscipit eveniet quidem magnam atque
            officiis quasi ullam! Sunt, nostrum!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium natus repudiandae
            saepe sapiente voluptatum sequi incidunt corporis consectetur temporibus, nihil, dolore
            numquam, inventore blanditiis reiciendis itaque sit laborum at? Tempora. Dolor
            praesentium earum magni. Pariatur minima fugiat fugit? Rem atque quas impedit? Sint
            sequi, quod, voluptas alias, repellat qui cum suscipit eveniet quidem magnam atque
            officiis quasi ullam! Sunt, nostrum!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium natus repudiandae
            saepe sapiente voluptatum sequi incidunt corporis consectetur temporibus, nihil, dolore
            numquam, inventore blanditiis reiciendis itaque sit laborum at? Tempora. Dolor
            praesentium earum magni. Pariatur minima fugiat fugit? Rem atque quas impedit? Sint
            sequi, quod, voluptas alias, repellat qui cum suscipit eveniet quidem magnam atque
            officiis quasi ullam! Sunt, nostrum!
          </p>
        </div>
        <Link href="/automobiles" className={styles.button}>
          See My Cars
        </Link>
      </div>
    </main>
  );
}
