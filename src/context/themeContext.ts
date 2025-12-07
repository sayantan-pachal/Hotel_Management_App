import { Dispatch, SetStateAction, createContext } from "react";

type ThemeContextType = {
    darkTheme: boolean;
    setDaarkTheme: Dispatch<SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContextType>({
    darkTheme: false,
    setDaarkTheme: () => null,
});

export default ThemeContext;