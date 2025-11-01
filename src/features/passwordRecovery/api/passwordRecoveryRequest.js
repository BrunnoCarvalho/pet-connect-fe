import { api } from '../../../shared/api/axiosInstance';

export async function requestPasswordRecovery(email) {
  const res = await api.post('/password-recovery', { email });
  return res.data;
}
