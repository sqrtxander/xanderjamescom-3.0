import "./PurelyRelate.css";
import ClueCard from "./ClueCard";
import AnswerCard from "./AnswerCard";

type round1Props = {
	clues: [string, string, string, string];
	relation: string;
	explanation?: string;
};
function Round1({ clues, relation, explanation }: round1Props) {
	return (
		<div className="round1">
			{clues.map((clue, i) => (
				<ClueCard
					key={i}
					front={`Reveal clue ${i + 1}`}
					back={clue}
					className="r1"
                    borderColor="var(--blue)"
				/>
			))}
			<AnswerCard
				front="Reveal relation"
				back={relation}
				explanation={explanation}
                borderColor="var(--purple)"
			/>
		</div>
	);
}

export default Round1;
