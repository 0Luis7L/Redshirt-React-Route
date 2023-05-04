import { createContext, useState } from "react";

const LaptopsContext = createContext({});

export const LaptopsProvider = ({ children }) => {
    const [laptops, setLaptops ] = useState([]);

    return (
        <LaptopsContext.Provider value={{ laptops, setLaptops }}>
            {children}
        </LaptopsContext.Provider>
    )
    
}

export default LaptopsContext;