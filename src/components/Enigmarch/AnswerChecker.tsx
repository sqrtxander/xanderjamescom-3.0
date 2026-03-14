import { useState } from "react";
import "./Enigmarch.css";

function AnswerChecker({ answer }: { answer: string }) {
    const [correct, setCorrect] = useState(false);
    const [checked, setChecked] = useState(false);
    const [guess, setGuess] = useState("");

    const verify = () => {
        setChecked(true);
        setCorrect(
            answer.localeCompare(guess, "en", { sensitivity: "base" }) == 0,
        );
    };

    return (
        <div>
            <input
                className="enigmarchanswer"
                placeholder="Answer"
                onChange={(n) => {
                    setGuess(n.target.value);
                    setChecked(false);
                }}
            />
            <button onClick={verify} className="ghostbutton enigmarchcheck">
                Check
            </button>
            {checked &&
                (correct ? (
                    <p className="enigmarchfeedback correct">
                        {answer} is correct!{" "}
                        <span style={{ whiteSpace: "nowrap" }}>:)</span>
                    </p>
                ) : (
                    <p className="enigmarchfeedback incorrect">
                        {guess.toLocaleUpperCase("en")} is incorrect.{" "}
                        <span style={{ whiteSpace: "nowrap" }}>:(</span>
                    </p>
                ))}
        </div>
    );
}

export default AnswerChecker;
