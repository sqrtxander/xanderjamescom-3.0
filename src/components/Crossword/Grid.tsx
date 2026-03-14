import Cell from "./Cell";
import "./Crossword.css";

function Grid(crosswordData) {
    return (
        <div className="crossword-grid">
            <Cell />
        </div>
    );
}

export default Grid;
