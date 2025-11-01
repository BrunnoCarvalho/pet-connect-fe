import { useOutletContext } from "react-router-dom";
import { PetDetailsWidget } from "../ui/PetDetailsWidget";
import styles from './Vacinas.module.css';

export function Vacinas() {
  const {pet} = useOutletContext()
const petId = '123';
  return (
    <div className={styles.container}>
      {petId ? <PetDetailsWidget petId={petId} /> : <p>ID do pet não encontrado.</p>}
    </div>
  );
}