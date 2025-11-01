import axios from 'axios';

export async function getPet(petId) {
  const response = await axios.get(`/api/pet/${petId}`);
  return response.data;
}

export async function setPet(petId, petData) {
  const response = await axios.put(`/api/pet/${petId}`, petData);
  return response.data;
}
