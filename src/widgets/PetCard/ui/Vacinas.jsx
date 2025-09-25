import { useOutletContext } from "react-router-dom";
import styles from './Vacinas.module.css';

export function Vacinas() {
  const {pet} = useOutletContext()

  return (
    <div className={styles.container}>
      <h2>Vacinas do {pet.name}</h2>
    </div>
  );
}