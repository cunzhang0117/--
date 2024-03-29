let scrollDown = false;
let scrollUp = false;
window.addEventListener("scroll", (e) => {
  document.body.style.cssText = `--scrollTop: ${this.scrollY}px`;
  scrollPos = this.scrollY;
  // console.log(scrollDown);
  if (this.scrollY >= 93) {
    charSlide.classList.add("charChangeMove");
    if (scrollDown != true)
      document.getElementById("charSprite").src = "../IMG/char/char_turn.gif";
    charSprite.classList.remove("idle");
    charSprite.classList.add("turn");
    scrollDown = true;
  } else {
    charSlide.classList.remove("charChangeMove");
    document.getElementById("charSprite").src = "../IMG/char/char_idle.gif";
    charSprite.classList.remove("turn");
    charSprite.classList.add("idle");
    scrollDown = false;
  }

  var charGame = document.getElementById("charShow");

  if (this.scrollY >= 630 && !charGame.classList.contains("charShow")) {
    document.getElementById("charShow").style.display = "block";
    document.getElementById("charShow").classList.remove("charSlideLeaveB");
    document.getElementById("charShow").classList.add("charShow");
    document.getElementById("charGame").src = "../IMG/char/char_turnGame.gif";
    document.getElementById("charGame").classList.add("turnGame");
  } else if (this.scrollY < 630) {
    // document.getElementById("charShow").style.display = none;
    document.getElementById("charShow").classList.add("charSlideLeaveB");
    document.getElementById("charShow").classList.remove("charShow");
  }
});

//重整時頁面重新滾回頂部
window.onbeforeunload = function () {
  document.body.scrollTop = 0;
};
