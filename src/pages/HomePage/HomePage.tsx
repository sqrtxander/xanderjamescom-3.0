import "./HomePage.css"

const HomePage = () => {
    return (
        <div className="content">
            <h1 className="title">Hello,</h1>
            <div className="codeblock">
                <p className="code pwd">~</p>
                <p className="code codeline"><span className="cmd">whoami</span></p>
                <p className="code codeout">xander</p>

                <p className="code pwd">~</p>
                <p className="code codeline"><span className="cmd">cd</span> about</p>
                <p className="code pwd">~/about</p>
                <p className="code codeline"><span className="cmd">cat</span> README.md</p>
                <p className="code codeout">
                    # About Me<br /><br />
                    - I am an undergraduate student studying mathematics and information technology<br />
                    - I use Neovim as my main text editor on Arch Linux <em>by the way</em><br />
                    - I enjoy programming (when I have ideas)<br />
                    - I can solve a Rubik's Cube blindfolded<br />
                    - I love both participating in and setting trivia, especially that where answers are connected
                </p>
                <p className="code pwd">~/about</p>
                <p className="code codeline"></p>
            </div>
        </div>
    );
};

export default HomePage;

