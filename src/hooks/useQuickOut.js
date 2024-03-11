import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function useQuickOut() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) navigate("/");
  }, []);
}

export default useQuickOut;
