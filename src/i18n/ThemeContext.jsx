/* ThemeContext eliminado — portafolio es solo dark mode */
export const ThemeProvider = ({ children }) => children;
export const useTheme = () => ({ theme: "dark", toggleTheme: () => {} });
