import "./Header.css";
import { FiSun, FiMoon } from "react-icons/fi";
import { IconContext } from "react-icons";

type headerProps = {
	theme: string;
	switchTheme: () => void;
};
function Header({ theme, switchTheme }: headerProps) {
	return (
		<div className="headerbar">
			<a href="/" className="headertitle">
				&gt; xanderjames
			</a>
			<button className="themeswitcher" onClick={switchTheme}>
				<IconContext.Provider value={{ color: "var(--bg)", className: "icon" }}>
					{theme === "dark" ? <FiSun /> : <FiMoon />}
				</IconContext.Provider>
			</button>
		</div>
	);
}

export default Header;
