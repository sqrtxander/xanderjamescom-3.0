import "./PurelyRelate.css";
import ClueCard from "./ClueCard";
import LabelCard from "./LabelCard";

type round4Params = {
    relation: string;
    clues: {
        clue: string;
        answer: string;
    }[];
    flippedAll: boolean;
};

function Round4({ relation, clues, flippedAll }: round4Params) {
    return (
        <div className="round4">
            <LabelCard text={relation} />
            {clues.map((clue, i) => (
                <ClueCard
                    key={i}
                    front={clue.clue}
                    back={clue.answer}
                    flippedAll={flippedAll}
                />
            ))}
        </div>
    );
}

export default Round4;
