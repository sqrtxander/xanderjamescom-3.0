import "./Enigmarch.css";
import { useState } from "react";

function Hint({ text }: { text: string }) {
    const [revealed, setRevealed] = useState(false);
    return (
        <p className="enigmarchhint">
            <span
                onClick={() => setRevealed(!revealed)}
                className={revealed ? "" : "hidden"}
            >
                {text}
            </span>
        </p>
    );
}

export default Hint;
