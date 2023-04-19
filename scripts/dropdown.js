// først finder vi hovedmenuerne:
const mainMenus = document.querySelectorAll(".dropdown");
console.log(mainMenus);

for (let i = 0; i < mainMenus.length; i++) {
  mainMenus[i].addEventListener("mouseenter", showHide);
  mainMenus[i].addEventListener("mouseleave", showHide);
}

function showHide() {
  // først finder vi den undermenu som hører til det aktuelle menupunkt:
  let subMenu = this.querySelector(".dropdown__menu");
  console.log(this);
  // så skal vi vise/skjule den aktuelle 'subMenu':
  if (subMenu.style.display !== "block") {
    subMenu.style.display = "block";
  } else {
    subMenu.style.display = "none";
  }
}
