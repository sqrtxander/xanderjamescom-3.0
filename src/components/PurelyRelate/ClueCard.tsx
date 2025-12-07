import "./PurelyRelate.css";
import { useEffect, useState } from "react";

type clueCardProps = {
    front: string;
    back: string;
    className?: string;
    borderColor?: string;
    frontClass?: string;
    flippedAll: boolean;
};

function ClueCard({
    front,
    back,
    className,
    borderColor,
    frontClass,
    flippedAll,
}: clueCardProps) {
    const [flipped, setFlipped] = useState(false);
    const flip = () => setFlipped(!flipped);

    useEffect(() => {
        setFlipped(flippedAll);
    }, [flippedAll]);

    return (
        <button
            className={`cluecard ${className || ""} ${(!flipped && frontClass) || ""}`}
            onClick={flip}
            style={{ border: `2px solid ${borderColor}` }}
        >
            <pre>{flipped ? back : front}</pre>
        </button>
    );
}

export default ClueCard;
