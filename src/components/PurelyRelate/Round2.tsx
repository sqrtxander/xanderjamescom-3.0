import "./PurelyRelate.css";
import ClueCard from "./ClueCard";
import AnswerCard from "./AnswerCard";
import Glyph from "./Glyph";

type round2Props = {
	glyph: "O" | "J" | "I" | "T" | "L" | "Z";
	clues: [string, string, string, string];
	relation: string;
	explanation?: string;
};
function Round2({ glyph, clues, relation, explanation }: round2Props) {
	return (
		<div className="round2">
			<Glyph glyphID={glyph} />
			<div className="round2question">
				{clues.map((clue, i) => (
					<ClueCard
						key={i}
						front={i === 3 ? "?" : `Reveal clue ${i + 1}`}
						back={clue}
						frontClass={i === 3 ? "big" : undefined}
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
		</div>
	);
}

export default Round2;
