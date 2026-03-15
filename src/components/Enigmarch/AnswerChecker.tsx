import { useState } from "react";
import "./Enigmarch.css";

function AnswerChecker({ answer }: { answer: string }) {
    const [correct, setCorrect] = useState(false);
    const [checked, setChecked] = useState(false);
    const [guess, setGuess] = useState("");

    const verify = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setChecked(true);
        setCorrect(
            answer.localeCompare(guess, "en", { sensitivity: "base" }) == 0,
        );
    };

    return (
        <div>
            <form onSubmit={verify}>
                <input
                    className="enigmarchanswer"
                    type="text"
                    placeholder="Answer"
                    onChange={(n) => {
                        setGuess(n.target.value);
                        setChecked(false);
                    }}
                />
                <button type="submit" className="ghostbutton enigmarchcheck">
                    Check
                </button>
            </form>
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
