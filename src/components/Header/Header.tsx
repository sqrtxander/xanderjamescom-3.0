import "./Header.css";
import { FiSun, FiMoon } from "react-icons/fi";
import { IconContext } from "react-icons";

type headerparams = {
	theme: string;
	switchTheme: () => void;
};
function Header({ theme, switchTheme }: headerparams) {
	return (
		<div className="headerbar">
			<p className="headertitle">&gt; xanderjames</p>
			<button className="themeswitcher" onClick={switchTheme}>
				<IconContext.Provider value={{ color: "var(--bg)", className: "icon" }}>
					{theme === "dark" ? <FiSun /> : <FiMoon />}
				</IconContext.Provider>
			</button>
		</div>
	);
}

export default Header;
