import { useContext } from "react";
import { AppContext } from "../context/AllContext";

const useGlobalContext = () => {
    return useContext(AppContext)
}

export default useGlobalContext;