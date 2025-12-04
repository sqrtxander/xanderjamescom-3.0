import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import "./App.css";

// hooks
import { useScreenSize } from "./hooks";

// components
import Header from "@/components/Header/Header";

// pages
import HomePage from "@/pages/HomePage/HomePage";
import PurelyRelate from "@/pages/PurelyRelate/PurelyRelate";
import PREpisode from "@/pages/PurelyRelate/PREpisode";
import Crossword from "@/pages/Crossword/Crossword";
import CrypticPuzzle from "@/pages/Crossword/CrypticPuzzle";
import MiniPuzzle from "@/pages/Crossword/MiniPuzzle";
import NotFound from "@/pages/NotFound/NotFound";

function App() {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [theme, setTheme] = useLocalStorage(
		"color-theme",
		defaultDark ? "dark" : "light",
	);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

    const screenSize = useScreenSize();

	const switchTheme = () => setTheme(theme === "light" ? "dark" : "light");
	return (
		<div className={`app size-${screenSize}`}>
			<Header theme={theme} switchTheme={switchTheme} />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/purelyrelate/" element={<PurelyRelate />}>
						<Route path="episode/:episodeID" element={<PREpisode />} />
					</Route>
					<Route path="/crosswords/" element={<Crossword />} >
						<Route path="cryptic/:puzzleID" element={<CrypticPuzzle />} />
						<Route path="mini/:puzzleID" element={<MiniPuzzle />} />
                    </Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
