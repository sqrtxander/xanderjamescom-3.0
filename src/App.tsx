import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import "./App.css";

// components
import Header from "./components/Header/Header";

// pages
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [theme, setTheme] = useLocalStorage(
		"color-theme",
		defaultDark ? "dark" : "light",
	);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	const switchTheme = () => setTheme(theme === "light" ? "dark" : "light");
	return (
		<div className="app">
			<Header theme={theme} switchTheme={switchTheme} />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
