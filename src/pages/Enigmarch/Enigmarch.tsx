import { Outlet } from "react-router-dom";
import "./Enigmarch.css";
import Example from "@/components/Enigmarch/Example";

function Enigmarch() {
    return (
        <div className="vstack wide">
            {window.location.pathname.replace(/\/$/gim, "") === "/enigmarch" ? (
                <>
                    <h1>EnigMarch</h1>
                    <p>
                        Each year, over the month of March, daily prompts are
                        released by the{" "}
                        <a href="https://enigmarch.com/">EnigMarch</a> team
                        inspiring people to set puzzles. I first heard about
                        EnigMarch midway through the 2026 event. Over 2026, I am
                        challenging myself to write a puzzle for each prompt,
                        and typeset each puzzle in{" "}
                        <a href="https://typst.app/">Typst</a>.
                    </p>
                    <h1>My EnigMarch Puzzles</h1>
                    <div className="grid2or4">
                        <a href="enigmarch/2026" className="yearbutton">
                            <button className="ghostbutton full">2026</button>
                        </a>
                    </div>
                    <h1>My Personal Layout Example</h1>
                    <Example
                        src="/assets/enigmarch/example.png"
                        hints={[
                            "This puzzle's answer is hidden in plain sight",
                            "The answer is literally written in the image",
                            'The answer is "PUZZLE"',
                        ]}
                        solution="PUZZLE"
                    />
                </>
            ) : (
                <Outlet />
            )}
        </div>
    );
}

export default Enigmarch;
