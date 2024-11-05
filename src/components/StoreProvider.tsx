import React, {createContext, useContext} from "react";

export interface IStoreContext {
    appId: number;
}

interface StoreProviderProps {
    children: React.ReactNode;
}

export const StoreContext = createContext<IStoreContext>({ appId: 100 } as IStoreContext);

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    return (
        <StoreContext.Provider value={{ appId: Date.now() }}>
            { children }
        </StoreContext.Provider>
    );
}

const useStoreContext = () => useContext(StoreContext);

export { StoreProvider as default, useStoreContext };