import "./PurelyRelate.css";
import { useState } from "react";

type clueCardProps = {
	front: string;
	back: string;
	className?: string;
	borderColor?: string;
	frontClass?: string;
};

function ClueCard({
	front,
	back,
	className,
	borderColor,
	frontClass,
}: clueCardProps) {
	const [flipped, setFlipped] = useState(false);
	const flip = () => setFlipped(!flipped);
	return (
		<button
			className={`cluecard ${className || ""} ${!flipped && frontClass || ""}`}
			onClick={flip}
			style={{ border: `2px solid ${borderColor}` }}
		>
			<pre>{flipped ? back : front}</pre>
		</button>
	);
}

export default ClueCard;
