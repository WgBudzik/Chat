const btn = document.getElementById("read-btn");
const readAll = () => {
  document.querySelector(".number").style.display = "none";
  document.querySelector(".dot1").style.display = "none";
  document.querySelector(".dot2").style.display = "none";
  document.querySelector(".dot3").style.display = "none";
  document.querySelector(".unread1").style.backgroundColor = "white";
  document.querySelector(".unread2").style.backgroundColor = "white";
  document.querySelector(".unread3").style.backgroundColor = "white";
};
btn.addEventListener("click", readAll);
