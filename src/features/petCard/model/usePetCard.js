import { useEffect, useState } from 'react';
import { getPet, setPet } from '../api/petCardApi';

export function usePetCard(petId) {
  const [petData, setPetData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPet() {
      setLoading(true);
      setError(null);
      try {
        const data = await getPet(petId);
        setPetData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    if (petId) fetchPet();
  }, [petId]);

  const updatePet = async (newData) => {
    setLoading(true);
    setError(null);
    try {
      await setPet(petId, newData);
      setPetData(newData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { petData, loading, error, updatePet };
}
