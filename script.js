const sidebar = document.querySelector(".sidebar");
const sidebarLock = document.querySelector("#lock-button");
const sidebarOpener = document.querySelector("#sidebar-opener");
const sidebarCloser = document.querySelector("#sidebar-closer");
const navbar = document.querySelector(".navbar")

const toggleLock = () => {
	if(sidebar.classList.contains("locked")) {
		sidebarLock.classList.replace("fa-lock","fa-unlock")
	}
	else {
		sidebarLock.classList.replace("fa-unlock","fa-lock")
	}
	sidebar.classList.toggle("locked")
}

const toggleSideBar = () => {
	if (!sidebar.classList.contains("locked") && !sidebar.classList.contains("mobile")) {
		sidebar.classList.toggle("collapse")
		navbar.classList.toggle("collapse")
	}
}

const mobileSideBar = () => {
	sidebar.classList.toggle("mobile")
	sidebar.classList.remove("collapse")
	navbar.classList.remove("collapse")
}

const handleResize = () => {
  if (window.innerWidth > 1024)  {
    sidebar.classList.remove("mobile")
		if (!sidebar.classList.contains("locked")) {
			sidebar.classList.add("collapse")
			navbar.classList.add("collapse")
		}
	}
}
window.addEventListener("resize", handleResize);


sidebarLock.addEventListener("click", toggleLock)
sidebar.addEventListener("mouseleave", toggleSideBar)
sidebar.addEventListener("mouseenter", toggleSideBar)
sidebarOpener.addEventListener("click", mobileSideBar)
sidebarCloser.addEventListener("click", mobileSideBar)
