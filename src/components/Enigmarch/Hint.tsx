import "./Enigmarch.css";
import { useState } from "react";

function Hint({ text }: { text: string }) {
    const [revealed, setRevealed] = useState(false);
    return (
        <span
            onClick={() => setRevealed(!revealed)}
            className={`enigmarchhint ${revealed ? "shown" : "hidden"}`}
        >
            {text}
        </span>
    );
}

export default Hint;
