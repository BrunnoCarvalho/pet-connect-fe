import { useState } from 'react';
import { requestPasswordRecovery } from '../api/passwordRecoveryRequest';

export function usePasswordRecovery() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  async function sendRecovery(email) {
    setLoading(true);
    setError(null);
    try {
      await requestPasswordRecovery(email);
      setSuccess(true);
    } catch (err) {
      setError(err?.message || 'Erro ao enviar email');
    } finally {
      setLoading(false);
    }
  }

  return { sendRecovery, loading, success, error };
}
