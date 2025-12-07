import crypticData from "./cryptics.crossword.json";
import CrosswordPuzzle from "./CrosswordPuzzle";

function MiniPuzzle() {
    return <CrosswordPuzzle crosswordData={crypticData} />;
}

export default MiniPuzzle;
