import { Outlet } from "react-router-dom";
import "./Crossword.css";
import crosswordData from "./data";

function Crossword() {
    return (
        <>
            {window.location.pathname.replace(/\/$/gim, "") === "/crosswords" ? (
                <div className="vstack wide">
                    <h1>Crosswords</h1>
                    <div className="puzzlebuttonsgrid">
                        {crosswordData.map((puz, i) => (
                            <a
                                key={i}
                                href={`crosswords/puzzle/${puz.number.toString().padStart(2, "0")}/`}
                                className="puzzlebutton"
                            >
                                <button className="ghostbutton puzzlebutton">
                                    {puz.name}
                                </button>
                            </a>
                        ))}
                    </div>
                </div>
            ) : (
                <Outlet />
            )}
        </>
    );
}

export default Crossword;
