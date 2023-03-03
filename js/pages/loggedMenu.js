const playBtn = document.getElementById("btn-play");
const helpBtn = document.getElementById("btn-help");
const statsBtn = document.getElementById("btn-stats");

playBtn.addEventListener("click", () => {
  window.location.href = "game.html";
});

helpBtn.addEventListener("click", () => {
  window.location.href = "help.html";
});

statsBtn.addEventListener("click", () => {
  window.location.href = "myStats.html";
});

const tabs = [...document.querySelectorAll(".tab")];
tabs.forEach((tab) => tab.addEventListener("click", tabsAnimation));

function tabsAnimation(e) {
  const tabContents = [...document.querySelectorAll(".tab-content")];
  const indexToRemove = tabs.findIndex((tab) =>
    tab.classList.contains("active-tab")
  );

  tabs[indexToRemove].classList.remove("active-tab");
  tabContents[indexToRemove].classList.remove("active-tab-content");

  const indexToShow = tabs.indexOf(e.target);
  tabs[indexToShow].classList.add("active-tab");
  tabContents[indexToShow].classList.add("active-tab-content");
}

const backIcon = document.querySelector(".back-icon");

backIcon.addEventListener("click", () => {
  window.location.href = "../index.html";
});
