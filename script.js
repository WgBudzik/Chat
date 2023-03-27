const btn = document.getElementById("read-btn");
const readAll = () => {
  const unreadMessages = document.querySelectorAll(".unread");
  const dots = document.querySelectorAll(".dot");
  unreadMessages.forEach((e) => {
    e.style.backgroundColor = "white";
  });
  dots.forEach((e) => {
    e.style.display = "none";
  });
  document.querySelector(".number").style.display = "none";
};

btn.addEventListener("click", readAll);