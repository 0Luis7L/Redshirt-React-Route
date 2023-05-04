import { useContext } from "react";
import LaptopsContext from "../context/LaptopProvider";


const useLaptops = () => {
    return useContext(LaptopsContext);
   
}

export default useLaptops;