import { useEffect, useState } from "react";
import useAxiosPrivate from "../../features/auth/model/hooks/useAxiosPrivate";
import { useAuth } from "../../features/auth/model/auth";

export default function Clinica() {
  const axiosPrivate = useAxiosPrivate();
  const { user, logout } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPrivate.get("/users");
        setData(response.data);
      } catch (error) {
        console.error("Erro ao chamar API usuários", error);
      }
    };

    fetchData();
  }, [axiosPrivate]);

  return (
    <div className="p-4">
      <h1 className="text-xl">Clínica Veterinária Page</h1>
      <h2 className="text-xl">Bem-vindo, {user?.name}</h2> 
      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
