import "./HomePage.css";
import ProjectCard from "@/components/HomePage/ProjectCard";

function HomePage() {
    return (
        <div className="vstack wide main-content">
            <h1>Hello,</h1>
            <div className="codeblock">
                <span className="noleading pwd">~</span>
                <span className="noleading codeline">
                    <span className="cmd">whoami</span>
                </span>
                <span className="noleading codeout">xander</span>

                <span className="noleading pwd">~</span>
                <span className="noleading codeline">
                    <span className="cmd">cd</span> about
                </span>
                <span className="noleading pwd">~/about</span>
                <span className="noleading codeline">
                    <span className="cmd">cat</span> README.md
                </span>
                <span className="noleading codeout">
                    # About Me
                    <br />
                    <br />- I am an undergraduate student studying mathematics
                    and information technology
                    <br />- I use Neovim as my main text editor on Arch Linux{" "}
                    <em>by the way</em>
                    <br />- I enjoy programming (when I have ideas)
                    <br />- I can solve a Rubik's Cube blindfolded
                    <br />- I love both participating in and setting trivia,
                    especially where answers are connected
                </span>
                <span className="noleading pwd">~/about</span>
                <span className="noleading codeline"></span>
            </div>
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
