import "./PurelyRelate.css";
import ClueCard from "./ClueCard";
import AnswerCard from "./AnswerCard";
import LabelCard from "./LabelCard";

type round2Props = {
	clues: [string, string, string, string];
	relation: string;
	explanation?: string;
};
function Round2({ clues, relation, explanation }: round2Props) {
	return (
		<div className="round1">
			{clues.map((clue, i) => (
				<ClueCard
					key={i}
					front={i === 3 ? "?" : `Reveal clue ${i + 1}`}
					back={clue}
					frontStyle={i === 3 ? { fontSize: "36pt" } : undefined}
                    className="r2"
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

export default Round2;
