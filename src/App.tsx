import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Enigmarch from "./pages/Enigmarch/Enigmarch";
import Enigmarch2026 from "./pages/Enigmarch/Enigmarch2026";
import NotFound from "@/pages/NotFound/NotFound";

function App() {
    const screenSize = useScreenSize();

    return (
        <div className={`app size-${screenSize}`}>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/purelyrelate/" element={<PurelyRelate />}>
                        <Route
                            path="episode/:episodeID"
                            element={<PREpisode />}
                        />
                    </Route>
                    <Route path="/crosswords/" element={<Crossword />}>
                        <Route
                            path="cryptic/:puzzleID"
                            element={<CrypticPuzzle />}
                        />
                        <Route path="mini/:puzzleID" element={<MiniPuzzle />} />
                    </Route>
                    <Route path="/enigmarch/" element={<Enigmarch />}>
                        <Route path="2026/" element={<Enigmarch2026 />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
