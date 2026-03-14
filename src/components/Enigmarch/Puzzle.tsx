import AnswerChecker from "./AnswerChecker";
import "./Enigmarch.css";
import Hint from "./Hint";

function Puzzle({
    src,
    day,
    hints,
    solution,
}: {
    src: string;
    day: string;
    hints: string[];
    solution: string;
}) {
    return (
        <div className="enigmarchpuzzle">
            <img src={src} />
            <div className="vstack section">
                <h2>Day {day} Hints</h2>
                {hints.map((h, i) => (
                    <Hint key={i} text={h} />
                ))}
                <div style={{ height: "2em" }} />
                <h2>Day {day} Answer Checker</h2>
                <AnswerChecker answer={solution} />
            </div>
        </div>
    );
}
export default Puzzle;
