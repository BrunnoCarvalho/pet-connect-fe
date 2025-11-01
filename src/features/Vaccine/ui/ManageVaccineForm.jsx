import React from 'react';
import { useManageVaccine } from '../model/useManegeVaccines'
import styles from './ManageVaccineForm.module.css'; 

export function ManageVaccineForm({ petId, vaccineId = null, onSuccess, onCancel }) {
  const { 
    formData, 
    handleChange, 
    handleSubmit, 
    loading, 
    error, 
    isEditing 
  } = useManageVaccine(petId, vaccineId);

  const handleFormSubmit = async (e) => {
    const success = await handleSubmit(e);
    if (success) {
      onSuccess();
    }
  };

  return (
    <div className={styles.formOverlay}> 
      <div className={styles.formContainer}>
        <h3>{isEditing ? 'Editar Vacina' : 'Adicionar Nova Vacina'}</h3>
        <form onSubmit={handleFormSubmit}>
     
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome da Vacina:</label>
            <input 
              type="text" 
              id="name"
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className={styles.inputField}
              placeholder="Ex: V8, Raiva, Gripe Canina"
            />
          </div>
          
         
          <div className={styles.formGroup}>
            <label htmlFor="dateAdministered">Data de Aplicação:</label>
            <input 
              type="date" 
              id="dateAdministered"
              name="dateAdministered" 
              value={formData.dateAdministered} 
              onChange={handleChange} 
              required 
              className={styles.inputField}
            />
          </div>

         
          <div className={styles.formGroup}>
            <label htmlFor="nextDueDate">Próxima Dose:</label>
            <input 
              type="date" 
              id="nextDueDate"
              name="nextDueDate" 
              value={formData.nextDueDate} 
              onChange={handleChange} 
              className={styles.inputField}
            />
          </div>

        
          <div className={styles.formGroup}>
            <label htmlFor="veterinarian">Veterinário / Clínica:</label>
            <input 
              type="text" 
              id="veterinarian"
              name="veterinarian" 
              value={formData.veterinarian} 
              onChange={handleChange} 
              className={styles.inputField}
              placeholder="Ex: Dr. João Silva"
            />
          </div>

         
          <div className={styles.formGroup}>
            <label htmlFor="lot">Número do Lote:</label>
            <input 
              type="text" 
              id="lot"
              name="lot" 
              value={formData.lot} 
              onChange={handleChange} 
              className={styles.inputField}
              placeholder="Ex: L1234567"
            />
          </div>


          {/* Botões de Ação */}
          <div className={styles.actions}>
            <button 
              type="submit" 
              disabled={loading} 
              className={styles.submitButton}
            >
              {loading ? 'Salvando...' : (isEditing ? 'Salvar Alterações' : 'Adicionar Vacina')}
            </button>
            <button 
              type="button" 
              onClick={onCancel} 
              disabled={loading} 
              className={styles.cancelButton}
            >
              Cancelar
            </button>
          </div>
        </form>
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    </div>
  );
}