import { useOutletContext } from "react-router-dom";
import styles from './InformacoesGerais.module.css';

export function InformacoesGerais() {
  const {pet} = useOutletContext()

  return (
    <div className={styles.container}>
      <div className={styles.fieldGroup}>
        <div>
          <label htmlFor="name" className={styles.label}>Nome</label>
          <input id="name" className={styles.input} value={pet.name} readOnly />
        </div>
        <div>
          <label htmlFor="birthdate" className={styles.label}>Data de nascimento</label>
          <input id="birthdate" className={styles.input} value={pet.birthdate} readOnly />
        </div>
        <div>
          <label htmlFor="microchip" className={styles.label}>Nº do microchip</label>
          <input id="microchip" className={styles.input} value={pet.microchipNumber} readOnly />
        </div>
        <div>
          <label htmlFor="sex" className={styles.label}>Sexo</label>
          <input id="sex" className={styles.input} value={pet.sex} readOnly />
        </div>
        <div>
          <label htmlFor="species" className={styles.label}>Espécie</label>
          <input id="species" className={styles.input} value={pet.species} readOnly />
        </div>
        <div>
          <label htmlFor="weight" className={styles.label}>Peso Kg</label>
          <input id="weight" className={styles.input} value={pet.weight} readOnly />
        </div>
        <div>
          <label htmlFor="breed" className={styles.label}>Raça</label>
          <input id="breed" className={styles.input} value={pet.breed} readOnly />
        </div>
        <div>
          <label htmlFor="tutor" className={styles.label}>Nome do Tutor</label>
          <input id="tutor" className={styles.input} value={pet.tutorName} readOnly />
        </div>
      </div>

      <div className={styles.textAreaGroup}>
        <div>
          <label htmlFor="description" className={styles.label}>Sobre seu pet</label>
          <textarea id="description" className={styles.textArea} value={pet.description} readOnly />
        </div>
        <div>
          <label htmlFor="healthNotes" className={styles.label}>Condições de saúde do pet</label>
          <textarea id="healthNotes" className={styles.textArea} value={pet.healthNotes} readOnly />
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button className={`${styles.button} ${styles.edit}`}>Editar</button>
        <button className={`${styles.button} ${styles.save}`}>Salvar</button>
      </div>
    </div>
  );
}