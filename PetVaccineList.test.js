/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PetVaccineList } from './PetVaccineList';
import { usePetVaccines } from '../model/usePetVaccines';

// Mock do hook usePetVaccines para controlar seus retornos nos testes
jest.mock('../model/usePetVaccines');

// Mock do componente filho para isolar o teste ao PetVaccineList
jest.mock('../../../../entities/vaccine/ui/VaccineCard/VaccineCard', () => { // Caminho corrigido
  return jest.fn(({ vaccine }) => (
    <div data-testid={`vaccine-card-${vaccine.id}`}>{vaccine.name}</div>
  ));
});

describe('PetVaccineList', () => {
  const mockProps = {
    petId: '1',
    onEditVaccine: jest.fn(),
    onDeleteVaccine: jest.fn(),
  };

  // Limpa os mocks após cada teste
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve exibir a mensagem de "Carregando..." enquanto os dados são buscados', () => {
    // Configura o mock para retornar o estado de loading
    usePetVaccines.mockReturnValue({
      vaccines: [],
      loading: true,
      error: null,
    });

    render(<PetVaccineList {...mockProps} />);

    expect(screen.getByText('Carregando...')).toBeInTheDocument();
  });

  it('deve exibir uma mensagem de erro se a busca falhar', () => {
    // Configura o mock para retornar um erro
    usePetVaccines.mockReturnValue({
      vaccines: [],
      loading: false,
      error: 'Erro ao carregar vacinas.',
    });

    render(<PetVaccineList {...mockProps} />);

    expect(screen.getByText('Erro ao carregar vacinas.')).toBeInTheDocument();
  });

  it('deve exibir a mensagem de "Nenhuma vacina registrada" se a lista estiver vazia', () => {
    // Configura o mock para retornar uma lista vazia
    usePetVaccines.mockReturnValue({
      vaccines: [],
      loading: false,
      error: null,
    });

    render(<PetVaccineList {...mockProps} />);

    expect(screen.getByText('Nenhuma vacina registrada para este pet.')).toBeInTheDocument();
  });

  it('deve renderizar a lista de vacinas corretamente', () => {
    const mockVaccines = [
      { id: 'v1', name: 'Raiva', dateAdministered: '2023-01-15', nextDueDate: '2024-01-15', lot: 'LOTE-01' },
      { id: 'v2', name: 'V10', dateAdministered: '2023-02-20', nextDueDate: '2024-02-20', lot: 'LOTE-02' },
    ];

    usePetVaccines.mockReturnValue({
      vaccines: mockVaccines,
      loading: false,
      error: null,
    });

    render(<PetVaccineList {...mockProps} />);

    // Verifica se os cabeçalhos da lista estão presentes
    expect(screen.getByText('Nome da vacina')).toBeInTheDocument();
    expect(screen.getByText('Data')).toBeInTheDocument();

    // Verifica se os cards das vacinas foram renderizados
    expect(screen.getByTestId('vaccine-card-v1')).toHaveTextContent('Raiva');
    expect(screen.getByTestId('vaccine-card-v2')).toHaveTextContent('V10');
    expect(screen.getAllByTestId(/vaccine-card-/)).toHaveLength(2);
  });
});