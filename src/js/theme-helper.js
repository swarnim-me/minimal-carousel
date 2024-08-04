import sunIcon from "../assets/icons/sun.svg";
import moonIcon from "../assets/icons/moon.svg";

class ThemeHelper {
	constructor() {
		this.themeBtn = document.querySelector(".theme-btn");
		this.bindEvents();
	}

	bindEvents() {
		this.themeBtn.addEventListener("click", this.changeTheme);
	}

	changeTheme = () => {
		document.body.classList.toggle("dark-mode");
		if (document.body.classList.contains("dark-mode"))
			this.themeBtn.children[0].setAttribute("src", sunIcon);
		else this.themeBtn.children[0].setAttribute("src", moonIcon);
	};
}

export default new ThemeHelper();
