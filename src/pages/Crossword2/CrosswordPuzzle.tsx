import "./CrosswordPuzzle.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import crosswordData from "./testing.ipuz.json";
import Grid from "@/components/Crossword/Grid";

type IPuzCrossword = {};

function CrosswordPuzzle({ crosswordFoo }: { crosswordFoo?: IPuzCrossword }) {
    const crossword = crosswordData;

    return (
        <>
            <div className="full-page">
                {/* <h1>{crossword.title}</h1> */}
                <Grid data={crossword} />
            </div>
        </>
    );
}

export default CrosswordPuzzle;
