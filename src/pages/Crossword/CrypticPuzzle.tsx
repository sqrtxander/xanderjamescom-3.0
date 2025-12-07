import crypticData from "./cryptics.json";
import CrosswordPuzzle from "./CrosswordPuzzle";

function MiniPuzzle() {
    return <CrosswordPuzzle crosswordData={crypticData} />;
}

export default MiniPuzzle;
