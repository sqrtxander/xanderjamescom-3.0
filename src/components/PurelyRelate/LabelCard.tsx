import "./PurelyRelate.css";
import { type CSSProperties } from "react";

type labelCardProps = {
	text: string;
	borderColor?: string;
	style?: CSSProperties;
};

function LabelCard({ text, borderColor, style }: labelCardProps) {
	return (
		<div
			className="labelcard"
			style={{ ...{ border: `2px solid ${borderColor}` }, ...style }}
		>
			<p>{text}</p>
		</div>
	);
}

export default LabelCard;
