var profileImg = document.getElementById("charShow");
profileImg.addEventListener("animationend", changeSprite);
profileImg.addEventListener(
  "animationstart",
  setTimeout(function () {
    changeSprite();
  }),
  1000
);

var charAniEnd = false;

function changeSprite() {
  document.getElementById("charGame").src = "../IMG/char/char_click.gif";
  document.getElementById("charGame").classList.remove("turnGame");
  document.getElementById("charGame").classList.add("sitGame");
  document.getElementById("charShow").classList.remove("inVisible");
}
