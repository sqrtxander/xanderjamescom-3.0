import miniData from "./minis.json";
import CrosswordPuzzle from "./CrosswordPuzzle";

function MiniPuzzle() {
    return <CrosswordPuzzle crosswordData={miniData} />
}

export default MiniPuzzle;
