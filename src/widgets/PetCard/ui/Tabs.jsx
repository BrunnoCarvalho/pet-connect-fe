import { NavLink, useParams } from 'react-router-dom';
import styles from './Tabs.module.css';

export function Tabs() {
  const { id } = useParams();

  const tabs = [
    { label: 'Informações gerais', path: 'informacoes' },
    { label: '💉Vacinas', path: 'vacinas' },
    { label: '📄Histórico clínico', path: 'historico' },
  ];

  return (
    <div className={styles.tabs}>
      {tabs.map(tab => (
        <NavLink
          key={tab.path}
          to={`/pet/${id}/${tab.path}`}
          className={({ isActive }) =>
            `${styles.tab} ${isActive ? styles.active : ''}`
          }
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}
