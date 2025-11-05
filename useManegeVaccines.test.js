/* eslint-env jest */
import { renderHook, act } from '@testing-library/react-hooks';
import { useManageVaccine } from './useManegeVaccines'; // Corrigido para importar da mesma pasta
import { vaccineApi } from '../../../entities/vaccine/model/vaccineApi'; // Corrigido o caminho relativo

// 1. Mock completo do módulo da API
// Isso substitui todas as funções de 'vaccineApi' por funções jest (jest.fn())
jest.mock('../../../entities/vaccine/model/vaccineApi');

describe('useManageVaccine', () => {
  // Limpa os mocks antes de cada teste para garantir que um teste não interfira no outro
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // --- TESTE DE ADIÇÃO ---
  it('deve chamar vaccineApi.addVaccine ao submeter em modo de criação', async () => {
    const petId = 'pet-01';
    const newVaccineData = { name: 'Vacina de Teste', lot: 'LOTE123' };

    // Configura o mock para simular uma resposta de sucesso da API
    vaccineApi.addVaccine.mockResolvedValue({ id: 'vaccine-new', ...newVaccineData });

    // Renderiza o hook para o cenário de adição (sem vaccineId)
    const { result } = renderHook(() => useManageVaccine(petId, null));

    // Simula o preenchimento do formulário pelo usuário
    act(() => {
      result.current.handleChange({ target: { name: 'name', value: newVaccineData.name } });
      result.current.handleChange({ target: { name: 'lot', value: newVaccineData.lot } });
    });

    // Simula o envio do formulário
    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} });
    });

    // Verificações (Asserts)
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    
    // Verifica se a função 'addVaccine' foi chamada corretamente
    expect(vaccineApi.addVaccine).toHaveBeenCalledTimes(1);
    expect(vaccineApi.addVaccine).toHaveBeenCalledWith(petId, expect.objectContaining(newVaccineData));
  });

  // --- TESTE DE EDIÇÃO ---
  it('deve buscar dados e chamar vaccineApi.updateVaccine ao submeter em modo de edição', async () => {
    const petId = 'pet-01';
    const vaccineId = 'vaccine-01';
    const initialVaccineData = {
      id: vaccineId,
      name: 'Vacina Antiga',
      lot: 'LOTE-OLD',
      dateAdministered: '2023-10-10T00:00:00.000Z',
      nextDueDate: '2024-10-10T00:00:00.000Z',
    };
    const updatedLot = 'LOTE-NEW';

    // 2. Configura os mocks da API para o cenário de edição
    vaccineApi.fetchVaccineById.mockResolvedValue(initialVaccineData);
    vaccineApi.updateVaccine.mockResolvedValue({ ...initialVaccineData, lot: updatedLot });

    // Renderiza o hook para o cenário de edição (com vaccineId)
    const { result, waitForNextUpdate } = renderHook(() => useManageVaccine(petId, vaccineId));

    // Espera o useEffect do hook buscar os dados iniciais da vacina
    await waitForNextUpdate();

    // Verificações iniciais
    expect(vaccineApi.fetchVaccineById).toHaveBeenCalledWith(vaccineId);
    expect(result.current.formData.name).toBe(initialVaccineData.name);
    expect(result.current.isEdit).toBe(true);

    // Simula a alteração de um campo do formulário
    act(() => {
      result.current.handleChange({ target: { name: 'lot', value: updatedLot } });
    });

    // Simula o envio do formulário
    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} });
    });

    // Verificações finais
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();

    // Verifica se a função 'updateVaccine' foi chamada com os dados corretos
    expect(vaccineApi.updateVaccine).toHaveBeenCalledTimes(1);
    expect(vaccineApi.updateVaccine).toHaveBeenCalledWith(vaccineId, expect.objectContaining({ lot: updatedLot }));
  });

  it('deve definir um erro se a API falhar ao salvar', async () => {
    const petId = 'pet-01';
    const errorMessage = 'Não foi possível salvar os dados da vacina.';

    // Configura o mock para simular uma falha na API
    vaccineApi.addVaccine.mockRejectedValue(new Error('API Error'));

    const { result } = renderHook(() => useManageVaccine(petId, null));

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} });
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(errorMessage);
  });
});