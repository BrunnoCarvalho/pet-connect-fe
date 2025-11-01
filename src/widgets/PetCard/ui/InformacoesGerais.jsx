import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
// import { usePetCard } from '../../features/petCard/model/usePetCard';
import styles from './InformacoesGerais.module.css';


export function InformacoesGerais() {
  const { pet } = useOutletContext();
  // const { updatePet, loading, error } = usePetCard(pet?.id);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(() => ({
    name: pet?.name || '',
    birthdate: pet?.birthdate || '',
    microchipNumber: pet?.microchipNumber || '',
    sex: pet?.sex || '',
    species: pet?.species || '',
    weight: pet?.weight || '',
    breed: pet?.breed || '',
    tutorName: pet?.tutorName || '',
    description: pet?.description || '',
    healthNotes: pet?.healthNotes || ''
  }));

  useEffect(() => {
    setForm({
      name: pet?.name || '',
      birthdate: pet?.birthdate || '',
      microchipNumber: pet?.microchipNumber || '',
      sex: pet?.sex || '',
      species: pet?.species || '',
      weight: pet?.weight || '',
      breed: pet?.breed || '',
      tutorName: pet?.tutorName || '',
      description: pet?.description || '',
      healthNotes: pet?.healthNotes || ''
    });
  }, [pet]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setEditMode(true);
  // const handleSave = async () => {
  //   await updatePet(form);
  //   setEditMode(false);
  // };
  const handleSave = () => {
    setEditMode(false);
  };

  // if (loading) return <div>Carregando...</div>;
  // if (error) return <div>Erro ao salvar dados do pet.</div>;

  return (
    <div className={styles.container}>
      <div className={styles.fieldGroup}>
        <div>
          <label htmlFor="name" className={styles.label}>Nome</label>
          <input id="name" className={styles.input} name="name" value={form.name} readOnly={!editMode} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="birthdate" className={styles.label}>Data de nascimento</label>
          <input id="birthdate" className={styles.input} name="birthdate" value={form.birthdate} readOnly={!editMode} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="microchip" className={styles.label}>Nº do microchip</label>
          <input id="microchip" className={styles.input} name="microchipNumber" value={form.microchipNumber} readOnly={!editMode} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="sex" className={styles.label}>Sexo</label>
          <input id="sex" className={styles.input} name="sex" value={form.sex} readOnly={!editMode} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="species" className={styles.label}>Espécie</label>
          <input id="species" className={styles.input} name="species" value={form.species} readOnly={!editMode} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="weight" className={styles.label}>Peso Kg</label>
          <input id="weight" className={styles.input} name="weight" value={form.weight} readOnly={!editMode} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="breed" className={styles.label}>Raça</label>
          <input id="breed" className={styles.input} name="breed" value={form.breed} readOnly={!editMode} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="tutor" className={styles.label}>Nome do Tutor</label>
          <input id="tutor" className={styles.input} name="tutorName" value={form.tutorName} readOnly={!editMode} onChange={handleChange} />
        </div>
      </div>

      <div className={styles.textAreaGroup}>
        <div>
          <label htmlFor="description" className={styles.label}>Sobre seu pet</label>
          <textarea id="description" className={styles.textArea} name="description" value={form.description} readOnly={!editMode} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="healthNotes" className={styles.label}>Condições de saúde do pet</label>
          <textarea id="healthNotes" className={styles.textArea} name="healthNotes" value={form.healthNotes} readOnly={!editMode} onChange={handleChange} />
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button className={`${styles.button} ${styles.edit}`} onClick={handleEdit} disabled={editMode}>Editar</button>
        <button
          className={`${styles.button} ${editMode ? styles.edit : styles.save}`}
          onClick={handleSave}
          disabled={!editMode}
        >Salvar</button>
      </div>
    </div>
  );
}