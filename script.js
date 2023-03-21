const btn = document.getElementById("read-btn");
btn.addEventListener("click", () => {
  const number = document.querySelector(".number");
  const unreadMessages = document.querySelector(".unread");
  const dot = document.querySelector(".dot");
  number.style.display = "none"
  dot.style.display = "none"
  unreadMessages.style.backgroundColor = "grey";
});
