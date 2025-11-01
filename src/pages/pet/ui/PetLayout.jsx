import { Outlet } from 'react-router-dom';
import { Header } from "../../../widgets/PetCard/ui/Header";
import { Tabs } from "../../../widgets/PetCard/ui/Tabs";
import styles from './PetLayout.module.css';

// import { useParams } from 'react-router-dom';
// import { usePetCard } from '../../../features/petCard/model/usePetCard';

// export function PetLayout() {
//   const { id } = useParams();
//   const { petData, loading, error } = usePetCard(id);

//   if (loading) return <div>Carregando...</div>;
//   if (error) return <div>Erro ao carregar dados do pet.</div>;
//   if (!petData) return null;

//   return (
//     <div className={styles.page}>
//       <div className={styles.card}>
//         <Header name={petData.name} imageUrl={petData.imageUrl} />
//         <Tabs />
//         <Outlet context={{ pet: petData }} />
//       </div>
//     </div>
//   );
// }

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
