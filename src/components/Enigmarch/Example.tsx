import AnswerChecker from "./AnswerChecker";
import "./Enigmarch.css";
import Hint from "./Hint";

function Example({
    src,
    hints,
    solution,
}: {
    src: string;
    hints: string[];
    solution: string;
}) {
    return (
        <div className="enigmarchpuzzle">
            <img src={src} />
            <div className="vstack section">
                <h2 style={{ marginTop: "0" }}>Hints</h2>
                <p style={{ marginTop: "0" }}>Tap each hint to reveal</p>
                {hints.map((h, i) => (
                    <Hint key={i} text={h} />
                ))}
                <h2>Answer Checker</h2>
                <AnswerChecker answer={solution} />
            </div>
        </div>
    );
}
export default Example;
