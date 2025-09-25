import { useOutletContext } from 'react-router-dom';

export function HistoricoClinico() {
  const {pet} = useOutletContext()

  return (
    <div>
      <p><strong>Espécie:</strong> {pet.species}</p>
      <p><strong>Raça:</strong> {pet.breed}</p>
      <p><strong>Sexo:</strong> {pet.sex}</p>
      <p><strong>Peso:</strong> {pet.weight}</p>
      <p><strong>Descrição:</strong> {pet.description}</p>
    </div>
  );
}