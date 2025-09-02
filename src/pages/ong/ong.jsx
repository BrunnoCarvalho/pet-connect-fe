import { useEffect } from "react";
import useAxiosPrivate from "../../features/auth/model/hooks/useAxiosPrivate";
import { useAuth } from "../../features/auth/model/auth";

export default function Ong() {
  const axiosPrivate = useAxiosPrivate();
  const { user, logout } = useAuth();

  useEffect(() => {
    let isMounted = true;
  }, [axiosPrivate]);

  return (
    <div className="p-4">
      <h1 className="text-xl">Organização não Governamental Page</h1> 
      <h2 className="text-xl">Bem-vindo, {user?.name}</h2> 
      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}

