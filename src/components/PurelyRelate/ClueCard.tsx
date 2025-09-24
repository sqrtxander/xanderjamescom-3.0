import "./PurelyRelate.css";
import { useState, type CSSProperties } from "react";

type clueCardProps = {
	front: string;
	back: string;
    className?: string;
	borderColor?: string;
	frontStyle?: CSSProperties;
	backStyle?: CSSProperties;
};

function ClueCard({
	front,
	back,
    className,
	borderColor,
	frontStyle,
	backStyle,
}: clueCardProps) {
	const [flipped, setFlipped] = useState(false);
	const flip = () => setFlipped(!flipped);
	return (
		<button
			className={`cluecard ${className}`}
			onClick={flip}
			style={{ ...{ border: `2px solid ${borderColor}` }, ...(flipped ? backStyle : frontStyle)}}
		>
			<pre>{flipped ? back : front}</pre>
		</button>
	);
}

export default ClueCard;
