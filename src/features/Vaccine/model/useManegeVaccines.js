import { useCallback, useEffect, useState } from "react";
import { vaccineApi } from "../../../entities/vaccine/model/vaccineApi";
import { VaccineModel } from "../../../entities/vaccine/model/VaccineModel"
export function useManageVaccine(petId, vaccineId=null){
    const [ isEditing, setIsEditing] = useState(false)
    const [loading,setLoading]= useState(false)
    const [error,setError]= useState(null)
    const [formData, setFormData]=useState(VaccineModel)


  useEffect(() => {
    if (vaccineId) {
      setIsEditing(true);
      const fetchVaccine = async () => {
        setLoading(true);
        try {
          const data = await vaccineApi.fetchVaccineById(vaccineId);
          setFormData({
            ...data,
            dateAdministered: data.dateAdministered ? new Date(data.dateAdministered).toISOString().split('T')[0] : '',
            nextDueDate: data.nextDueDate ? new Date(data.nextDueDate).toISOString().split('T')[0] : ''
          });
        } catch (err) {
          console.error(err);
          setError('Não foi possível carregar os dados da vacina.');
        } finally {
          setLoading(false);
        }
      };
      fetchVaccine();
    } else {
      setIsEditing(false);
      setFormData(VaccineModel);
    }
  }, [vaccineId]);
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);
   const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
setLoading(true);
setError(null);
try {
  if (vaccineId) {
    await vaccineApi.updateVaccine(vaccineId, formData);
  }else {
    await vaccineApi.addVaccine(petId, formData);
  }
  return true
} catch (err) {
  
  setError('Não foi possível salvar os dados da vacina.');
  return false
} finally {
  setLoading(false);
} 
   },[petId, vaccineId, formData,isEditing])

return { formData, handleChange, handleSubmit, loading, error, isEdit: isEditing}

}
