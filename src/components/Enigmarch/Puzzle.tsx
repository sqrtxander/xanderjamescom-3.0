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
            <h2>Day {day}</h2>
            <img src={src} />
            <div className="vstack section">
                <h3>Hints</h3>
                {hints.map((h, i) => (
                    <Hint key={i} text={h} />
                ))}
                <h3>Answer Checker</h3>
                <AnswerChecker answer={solution} />
            </div>
        </div>
    );
}
export default Puzzle;
