import { Dispatch, SetStateAction, createContext } from "react";

type ThemeContextType = {
    darkTheme: boolean;
    setDrakTheme: Dispatch<SetStateAction<boolean>>
};

const ThemeContext = createContext<ThemeContextType>({
    darkTheme: false,
    setDrakTheme: () => null,
});

export default ThemeContext;