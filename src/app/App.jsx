import { Navigate, Route, Routes } from 'react-router-dom';
import { PetLayout } from '../pages/pet/ui/PetLayout';
import { HistoricoClinico } from '../widgets/PetCard/ui/HistoricoClinico';
import { InformacoesGerais } from '../widgets/PetCard/ui/InformacoesGerais';
import { Vacinas } from '../widgets/PetCard/ui/Vacinas';
import hunterImg from './Hunter.png';

function App() {
  return (
    <Routes>
  {/* <Route path="/" element={<Navigate to={`/pet/${pet.id}/informacoes`} />} /> */}
  <Route path="/" element={<Navigate to="/pet/1/informacoes" />} />
  
      {/* <Route path="/pet/:id" element={<PetLayout />}>
        <Route index element={<Navigate to="informacoes" />} />
        <Route path="informacoes" element={<InformacoesGerais />} />
        <Route path="vacinas" element={<Vacinas />} />
        <Route path="historico" element={<HistoricoClinico />} />
      </Route> */}
      <Route path="/pet/:id" element={<PetLayout pet={{
        name: 'Hunter',
        id: '1',
        birthdate: '20015-10-20',
        microchipNumber: '080077889',
        sex: 'Macho',
        species: 'Cachorro',
        weight: '90kg',
        breed: 'Labrador',
        tutorName: 'Simone',
        description: 'Brincalhão e gordinho sapeca.',
        healthNotes: 'Contém alergia ao medicamento xxx. Já foi realizada castração. Realizou uma cirurgia na pata direita.',
        imageUrl: hunterImg
      }} />}>
        <Route index element={<Navigate to="informacoes" />} />
        <Route path="informacoes" element={<InformacoesGerais />} />
        <Route path="vacinas" element={<Vacinas />} />
        <Route path="historico" element={<HistoricoClinico />} />
      </Route>
    </Routes>
  );
}

export default App;

