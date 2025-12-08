import { MyCrossword } from "mycrossword";
import "mycrossword/style.css";
import "./CrosswordPuzzle.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../NotFound/NotFound";

type MyGuardianClue = {
    id: string;
    number: number;
    humanNumber: string;
    clue: string;
    direction: string;
    length: number;
    group: string[];
    position: { x: number; y: number };
    separatorLocations: {
        ","?: number[] | undefined;
        "-"?: number[] | undefined;
    };
    solution: string;
};

type MyGuardianCrossword = {
    id: string;
    name: string;
    number: number;
    dimensions: { cols: number; rows: number };
    solutionAvailable: boolean;
    entries: MyGuardianClue[];
};

function CrosswordPuzzle({
    crosswordData,
}: {
    crosswordData: MyGuardianCrossword[];
}) {
    const [errorred, setErrored] = useState(false);
    const [loading, setLoading] = useState(true);
    const [solved, setSolved] = useState(false);
    const [crossword, setCrossword] = useState({ id: "", name: "" });
    const { puzzleID } = useParams();

    useEffect(() => {
        const getCrossword = (puzzleIDInt: number) => {
            if (puzzleIDInt < 1 || puzzleIDInt > crosswordData.length) {
                setErrored(true);
            } else {
                setCrossword(crosswordData[puzzleIDInt - 1]);
                setLoading(false);
            }
        };
        if (
            puzzleID === undefined ||
            !/^\d+$/.test(puzzleID) ||
            puzzleID.length !== 2
        ) {
            setErrored(true);
        } else {
            getCrossword(parseInt(puzzleID, 10));
        }
    }, [puzzleID, crosswordData]);

    return (
        <>
            {errorred ? (
                <NotFound />
            ) : loading ? (
                <p>LOADING...</p>
            ) : (
                <div className="vstack wide crosswordcontainer">
                    <h1>{crossword.name}</h1>
                    <MyCrossword
                        data={crossword}
                        id={crossword.id}
                        className="MyMyCrosswordTheme"
                        onComplete={() => setSolved(true)}
                    />
                    {solved && (
                        <div className="infoBox">
                            &#127881; SOLVED &#127881;
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default CrosswordPuzzle;
