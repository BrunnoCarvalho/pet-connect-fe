import styles from './Header.module.css';

export function Header({ name, imageUrl }) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{name}</h2>
      <img src={imageUrl} alt={`Foto de ${name}`} className={styles.image} />
    </div>
  );
}
