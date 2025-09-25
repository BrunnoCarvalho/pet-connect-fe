import { Outlet } from 'react-router-dom';
import { Header } from "../../../widgets/PetCard/ui/Header";
import { Tabs } from "../../../widgets/PetCard/ui/Tabs";
import styles from './PetLayout.module.css';


export function PetLayout({ pet }) {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <Header name={pet.name} imageUrl={pet.imageUrl} />
        <Tabs />
        <Outlet context={{pet}} />
      </div>
    </div>
  );
}
