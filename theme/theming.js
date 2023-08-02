const themeButton = document.querySelector("#themer")
const themeLink = document.querySelector("#theme")

let theme = localStorage.getItem("theme") || "dark"

const updateThemeLink = () => {
	themeLink.href = "theme/" + theme + ".css"
}

const changeTheme = () => {
	theme = theme === "dark" ? "light" : "dark"
	localStorage.setItem("theme", theme)
	updateThemeLink()
}

window.onload = updateThemeLink()

themeButton.addEventListener("click", changeTheme)