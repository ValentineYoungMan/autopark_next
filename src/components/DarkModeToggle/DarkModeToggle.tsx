import { useContext } from 'react';
import { DaytimeContext } from '../../app/context/DaytimeContext';
import styles from './DarkModeToggle.module.scss';

const DarkModeToggle = () => {
  const { mode, toggle } = useContext(DaytimeContext);

  return (
    <div className={styles.container} onClick={() => toggle(mode)}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === 'light' ? { left: '2px' } : { right: '2px' }}></div>
    </div>
  );
};

export default DarkModeToggle;
