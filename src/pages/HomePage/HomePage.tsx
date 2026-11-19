import "./HomePage.css";
import ProjectCard from "@/components/HomePage/ProjectCard";

function HomePage() {
    return (
        <div className="vstack wide main-content">
            <h1>About Me</h1>
            <p className="noleading">My name is Xander,</p>
            <ul className="noleading">
                <li>
                    I am an undergraduate student studying mathematics and
                    information technology.
                </li>
                <li>I use Neovim as my main text editor on NixOS.</li>
                <li>I enjoy programming (when I have ideas).</li>
                <li>I can solve a Rubik's cube blindfolded.</li>
                <li>
                    I love both participating in and setting trivia, especially
                    where answers are connected.
                </li>
            </ul>
            <h1>My Projects</h1>
            <div className="vstack">
                <ProjectCard
                    name="EnigMarch"
                    href="/enigmarch"
                    about="Puzzles I have set for EnigMarch"
                />
                <ProjectCard
                    name="Purely Relate"
                    href="/purelyrelate"
                    about="Relating trivia based on the BBC quiz show Only Connect"
                />
                <ProjectCard
                    name="Crosswords"
                    href="/crosswords"
                    about="Cryptic and mini crosswords I have set"
                />
            </div>
        </div>
    );
}

export default HomePage;
