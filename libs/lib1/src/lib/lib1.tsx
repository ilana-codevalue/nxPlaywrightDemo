import styles from './lib1.module.css';

export function Lib1() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Lib1!!</h1>
    </div>
  );
}

export default Lib1;
