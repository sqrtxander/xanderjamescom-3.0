import "./PurelyRelate.css";
import ClueCard from "./ClueCard";
import AnswerCard from "./AnswerCard";
import Glyph from "./Glyph";

type round1Props = {
	glyph: "O" | "J" | "I" | "T" | "L" | "Z";
	clues: [string, string, string, string];
	relation: string;
	explanation?: string;
	flippedAll: boolean;
};
function Round1({
	glyph,
	clues,
	relation,
	explanation,
	flippedAll,
}: round1Props) {
	return (
		<div className="round1">
			<Glyph glyphID={glyph} />
			<div className="round1question">
				{clues.map((clue, i) => (
					<ClueCard
						key={i}
						front={`Reveal clue ${i + 1}`}
						back={clue}
						className="r1"
						borderColor="var(--blue)"
                        flippedAll={flippedAll}
					/>
				))}
				<AnswerCard
					front="Reveal relation"
					back={relation}
					explanation={explanation}
					borderColor="var(--purple)"
                    flippedAll = {flippedAll}
				/>
			</div>
		</div>
	);
}

export default Round1;
