import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
    const user = localStorage.getItem("user") || null;

    return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
