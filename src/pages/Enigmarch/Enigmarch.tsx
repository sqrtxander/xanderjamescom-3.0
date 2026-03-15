import { Outlet } from "react-router-dom";
import "./Enigmarch.css";

function Enigmarch() {
    return (
        <div className="vstack wide">
            {window.location.pathname.replace(/\/$/gim, "") === "/enigmarch" ? (
                <>
                    <h1>My EnigMarch Puzzles</h1>
                    <div className="yearsgrid">
                        <a href="enigmarch/2026">
                            <button className="ghostbutton yearbutton">
                                2026
                            </button>
                        </a>
                    </div>
                </>
            ) : (
                <Outlet />
            )}
        </div>
    );
}

export default Enigmarch;
