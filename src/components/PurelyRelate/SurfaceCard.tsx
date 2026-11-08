import "./PurelyRelate.css";
import { type CSSProperties } from "react";

type clueCardProps = {
    text: string;
    onClick: () => void;
    disabled: boolean;
    className?: string;
    backgroundColor?: string;
    style?: CSSProperties;
};

function SurfaceCard({
    text,
    onClick,
    disabled,
    className,
    backgroundColor,
    style,
}: clueCardProps) {
    return (
        <button
            className={`surfacecard ${className || ""}`}
            onClick={onClick}
            style={{
                backgroundColor: backgroundColor,
                ...style,
            }}
            disabled={disabled}
        >
            <pre>{text}</pre>
        </button>
    );
}

export default SurfaceCard;
