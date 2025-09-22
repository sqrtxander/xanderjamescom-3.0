import "./PurelyRelate.css";
import ClueCard from "./ClueCard";
import LabelCard from "./LabelCard";

type round4Params = {
	relation: string;
	clues: {
        clue: string;
        answer: string;
    }[];
};

function Round4({ relation, clues }: round4Params) {
	return (
		<div className="round4">
			<LabelCard borderColor="var(--purple)" text={relation} />
            {clues.map((clue, i) => <ClueCard key={i} borderColor="var(--blue)" front={clue.clue} back={clue.answer} />)}
		</div>
	);
}

export default Round4
