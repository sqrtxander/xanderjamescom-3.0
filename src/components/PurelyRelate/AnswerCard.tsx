import "./PurelyRelate.css";
import { useState } from "react";

type answerCardProps = {
	front: string;
	back: string;
	borderColor?: string;
	explanation?: string;
	className?: string;
};
function AnswerCard({
	front,
	back,
	borderColor,
	explanation,
	className,
}: answerCardProps) {
	const [flipped, setFlipped] = useState(false);
	const flip = () => setFlipped(!flipped);
	return (
		<button
			className={`answercard ${className || ""}`}
			style={{ border: `2px solid ${borderColor || "var(--fg)"}` }}
			onClick={flip}
		>
			{flipped ? (
				<div>
					<pre>{back}</pre>
					{explanation && <pre className="explanation">{explanation}</pre>}
				</div>
			) : (
				<pre>{front}</pre>
			)}
		</button>
	);
}

export default AnswerCard;
