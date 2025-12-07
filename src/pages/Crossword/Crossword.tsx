import { Outlet } from "react-router-dom";
import "./Crossword.css";
import crypticData from "./cryptics.json";
import miniData from "./minis.json";

function Crossword() {
    return (
        <>
            {window.location.pathname.replace(/\/$/gim, "") ===
            "/crosswords" ? (
                <div className="vstack wide">
                    <h1>Cryptic Crosswords</h1>
                    <div className="puzzlebuttonsgrid">
                        {crypticData.map((puz, i) => (
                            <a
                                key={i}
                                href={`crosswords/cryptic/${puz.number.toString().padStart(2, "0")}/`}
                                className="puzzlebutton"
                            >
                                <button
                                    className="ghostbutton puzzlebutton"
                                    style={
                                        {
                                            "--thumb": `url("/resources/crosswords/thumbnails/cryptic/${puz.number}.svg")`,
                                        } as React.CSSProperties
                                    }
                                >
                                    <span>{puz.name}</span>
                                </button>
                            </a>
                        ))}
                    </div>
                    <h1>Mini Crosswords</h1>
                    <div className="puzzlebuttonsgrid">
                        {miniData.map((puz, i) => (
                            <a
                                key={i}
                                href={`crosswords/mini/${puz.number.toString().padStart(2, "0")}/`}
                                className="puzzlebutton"
                            >
                                <button
                                    className="ghostbutton puzzlebutton"
                                    style={
                                        {
                                            "--thumb": `url("/resources/crosswords/thumbnails/mini/${puz.number}.svg")`,
                                        } as React.CSSProperties
                                    }
                                >
                                    <span>{puz.name}</span>
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
