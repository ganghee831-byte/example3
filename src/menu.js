const button = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");

function setMenu(open) {
  // TODO 13: body에 menu-open class를 open 값에 맞춰 추가하거나 제거하세요.

  // TODO 14: button의 aria-expanded를 "true" 또는 "false" 문자열로 갱신하세요.
}

button?.addEventListener("click", () => {
  const isOpen = document.body.classList.contains("menu-open");
  setMenu(!isOpen);
});

nav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

addEventListener("resize", () => {
  if (innerWidth > 640) setMenu(false);
});
