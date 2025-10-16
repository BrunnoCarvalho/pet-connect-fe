import { useEffect, useState } from "react";
import { vaccineApi } from "../../entities/vaccine/model/vaccineApi";
import { Vaccine as VaccineModel } from "../../entities/vaccine/model/model";


export function useMageneVaccine(petId, vaccineId=null){
    const [ isEdit, setIsEditing] = useState(false)
    const [loading,setLoading]= useState(false)
    const [error,setError]= useState(null)
    const [formData, setFormData]=useState(vaccineId)


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


}
