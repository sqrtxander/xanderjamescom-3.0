import "./HomePage.css";

function HomePage() {
  return (
    <div className="content">
      <h1>Hello,</h1>
      <div className="codeblock">
        <p className="noleading pwd">~</p>
        <p className="noleading codeline">
          <span className="cmd">whoami</span>
        </p>
        <p className="noleading codeout">xander</p>

        <p className="noleading pwd">~</p>
        <p className="noleading codeline">
          <span className="cmd">cd</span> about
        </p>
        <p className="noleading pwd">~/about</p>
        <p className="noleading codeline">
          <span className="cmd">cat</span> README.md
        </p>
        <p className="noleading codeout">
          # About Me
          <br />
          <br />- I am an undergraduate student studying mathematics and
          information technology
          <br />- I use Neovim as my main text editor on Arch Linux{" "}
          <em>by the way</em>
          <br />- I enjoy programming (when I have ideas)
          <br />- I can solve a Rubik's Cube blindfolded
          <br />- I love both participating in and setting trivia, especially
          where answers are connected
        </p>
        <p className="noleading pwd">~/about</p>
        <p className="noleading codeline"></p>
      </div>
      <h1>My Projects</h1>
      <h2>
        <a href="/purelyrelate">Purely Relate</a>
      </h2>
      <p>Relating trivia based on the BBC quiz show Only Connect</p>
      <h2>
        <a href="/crosswords">Crosswords</a>
      </h2>
      <p>Cryptic and mini crosswords I have set</p>
    </div>
  );
}

export default HomePage;
