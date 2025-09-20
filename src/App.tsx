import { BrowserRouter, Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import './App.css'

// pages
import HomePage from "./pages/HomePage/HomePage";

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light")
    const switchTheme = () => setTheme(theme === "light" ? "dark" : "light")
    return (
        <div className="app" data-theme={theme}>
            <button onClick={switchTheme}>THEME</button>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
