import "./PurelyRelate.css";
import { useState } from "react";

type answerCardProps = {
	front: string;
	back: string;
    borderColor?: string;
	explanation?: string;
    className?: string;
};
function AnswerCard({ front, back, borderColor, explanation, className }: answerCardProps) {
	const [flipped, setFlipped] = useState(false);
	const flip = () => setFlipped(!flipped);
	return (
		<button className={`answercard ${className}`} style={{ border: `2px solid ${borderColor}` }} onClick={flip}>
			{flipped ? (
				<div>
					<p>{back}</p>
					{explanation && <p className="explanation">{explanation}</p>}
				</div>
			) : (
				<p>{front}</p>
			)}
		</button>
	);
}

export default AnswerCard;
