import "./PurelyRelate.css";
import { type CSSProperties } from "react";

type labelCardProps = {
    text: string;
    borderColor?: string;
    style?: CSSProperties;
};

function LabelCard({ text, style }: labelCardProps) {
    return (
        <div className="labelcard" style={style}>
            <pre>{text}</pre>
        </div>
    );
}

export default LabelCard;
