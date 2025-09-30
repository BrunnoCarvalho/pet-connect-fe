import React, { useState } from 'react';
import './styles.css';
import petPlaceholder from '../../assets/images/petLogo.png';
import { handlePetRegistration } from '../../features/petRegistration/lib/handlePetRegistration';

export const PetRegistrationForm = () => {
  const [petData, setPetData] = useState({
    name: '',
    species: '',
    races: '',
    weight: '',
    age: '',
    sex: '',
    microchipNumber: '',
    about: '',
    image: '' 
  });

  const [imagePreview, setImagePreview] = useState(petPlaceholder);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPetData((prev) => ({ ...prev, image: reader.result }));
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handlePetRegistration(petData, false);
      alert('Pet cadastrado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar pet.');
    }
  };

  return (
    <div className="pet-registration-page">
      <div className="left-container">
        <img src={petPlaceholder} alt="Pessoa com um Pet" />
      </div>
      <div className="form-container">
        <div className="form-header">
          <label htmlFor="pet-image-upload" style={{ cursor: 'pointer', display: 'inline-block' }}>
            <img src={imagePreview} alt="Pet Profile" className="pet-image-preview" />
          </label>
          <input
            id="pet-image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </div>
        
        <form onSubmit={handleSubmit} className="pet-form">
          <div className="form-field">
            <label htmlFor="name">Nome</label>
            <input id="name" name="name" type="text" value={petData.name} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label htmlFor="species">Espécie</label>
            <input id="species" name="species" type="text" value={petData.species} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label htmlFor="races">Raça</label>
            <input id="races" name="races" type="text" value={petData.races} onChange={handleChange} />
          </div>

          <div className="form-group-inline">
            <div className="form-field">
              <label htmlFor="weight">Peso (kg)</label>
              <input id="weight" name="weight" type="number" value={petData.weight} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="age">Idade</label>
              <input id="age" name="age" type="number" value={petData.age} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="sex">Sexo</label>
              <select id="sex" name="sex" value={petData.sex} onChange={handleChange}>
                <option value="">Selecione</option>
                <option value="M">Macho</option>
                <option value="F">Fêmea</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="microchipNumber">Microchip</label>
              <input
                id="microchipNumber"
                name="microchipNumber"
                type="text"
                value={petData.microchipNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="about">Sobre</label>
            <textarea id="about" name="about" value={petData.about} onChange={handleChange} />
          </div>

          <button type="submit" className="submit-button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};
