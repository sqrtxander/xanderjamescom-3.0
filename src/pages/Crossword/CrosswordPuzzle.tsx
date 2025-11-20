import { MyCrossword } from "mycrossword";
import "mycrossword/style.css";
import "./CrosswordPuzzle.css";
import crosswordData from "./data";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../NotFound/NotFound";


function CrosswordPuzzle() {
    const [errorred, setErrored] = useState(false);
    const [loading, setLoading] = useState(true);
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
    }, [puzzleID]);



    return (
        <>
            {errorred ? (
                <NotFound />
            ) : loading ? (
				<p>LOADING...</p>
            ) : (
                <div className="vstack wide">
                    <h1>{crossword.name}</h1>
                    <MyCrossword data={crossword} id={crossword.id} />
                </div>
            )}
        </>
    );
}

export default CrosswordPuzzle;
