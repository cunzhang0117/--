whereAmI = document.querySelector(".RwArea");

//重整會跳到頂端
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

//---文章圖片滑動---//

let slideImgs = document.querySelector(".slideImgs");
let firstImg = slideImgs.querySelectorAll("img")[0];
let slideIcon = document.querySelectorAll(".slideIcon");
//找到第一章照片的寬度+增加margin 10px

function showIcon() {
  let scrollWisth = slideImgs.scrollWidth - slideImgs.clientWidth;
  slideIcon[0].style.display = slideImgs.scrollLeft == 0 ? "none" : "block";
  slideIcon[1].style.display =
    slideImgs.scrollLeft == scrollWisth ? "none" : "block";
}

slideIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 10;
    //判斷按哪邊的icon，+-照片的寬度(含margin)
    console.log(slideImgs.scrollLeft);
    slideImgs.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showIcon(), 60);
  });
});

let isDragStart = false;
let prePageX;
let preScrollLeft;

function dragStart(e) {
  isDragStart = true;
  //紀錄左右位置
  prePageX = e.pageX;
  preScrollLeft = slideImgs.scrollLeft;
}

function dragging(e) {
  if (!isDragStart) return;
  e.preventDefault();
  slideImgs.classList.add("dragging");
  let posDiff = e.pageX - prePageX;
  slideImgs.scrollLeft = preScrollLeft - posDiff;
  showIcon();
}

function draggStop() {
  isDragStart = false;
  slideImgs.classList.remove("dragging");
}
slideImgs.addEventListener("mousedown", dragStart);
slideImgs.addEventListener("mousemove", dragging);
slideImgs.addEventListener("mouseup", draggStop);
slideImgs.addEventListener("mouseleave", draggStop);

//照片打開&關掉的部分
let isImgOpen = false;
document.querySelectorAll(".slideImgs img").forEach((img) => {
  img.addEventListener("click", () => {
    document.querySelector(".imgClick").style.display = "block";
    document.querySelector(".imgClick img").src = img.getAttribute("src");
    //隱藏滾動條，但保持距離
    let scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scrollbarWidth}px`;
  });
});

document.querySelector(".imgClick").addEventListener("click", () => {
  document.querySelector(".imgClick").style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.marginRight = "";
});

//--for心得頁的拖動--//
// 拖動視窗圖
let draggableElem = document.querySelectorAll(".lWindow");

//被拖動的視窗保持最上
let elemList = [];
for (let i = 0; i < draggableElem.length; i++) {
  elemList[i] = draggableElem[i];
}

let topElem = null;
draggableElem.forEach((top) => {
  // 如果元素有被點擊
  top.addEventListener("mousedown", windowTop);
  function windowTop() {
    //
    // console.log(elemList.indexOf(top));
    //如果被點擊的元素不是list最尾
    if (elemList[elemList.length - 1] != top) {
      topElem = top;
      elemList.splice(elemList.indexOf(top), 1);
      elemList.push(topElem);

      for (let i = 0; i < draggableElem.length; i++) {
        elemList[i].style.zIndex = `${i + 2}`;
      }
    }
  }
});

let initialX = 0,
  initialY = 0;
let moveElement = false;

//判斷模式
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmove",
    up: "touchend",
  },
};

let deviceType = "";
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";

    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

draggableElem.forEach((dragbox) => {
  dragbox.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    moveElement = true;
  });
});

draggableElem.forEach((dragbox) => {
  dragbox.addEventListener(events[deviceType].move, (e) => {
    //is movement == true 則設定新的位置
    if (moveElement) {
      let windowBottom = document.querySelector(".footerArea");
      // console.log(dragbox.style.top);
      e.preventDefault();
      let topPox = dragbox.style.top;

      let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
      let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
      dragbox.style.top = dragbox.offsetTop - (initialY - newY) + "px";
      dragbox.style.left = dragbox.offsetLeft - (initialX - newX) + "px";
      initialX = newX;
      initialY = newY;

      //左側範圍
      if (dragbox.getBoundingClientRect().left < 0) {
        dragbox.style.left = 0 + "px";
      }
      //右側範圍
      if (dragbox.getBoundingClientRect().right > window.innerWidth - 18) {
        dragbox.style.left =
          window.innerWidth - 18 - dragbox.offsetWidth + "px";
        // console.log(letPox);
      }
      //頂部範圍

      if (parseInt(dragbox.offsetTop) < 0) {
        dragbox.style.top = 0 + "px";
      }

      //底部範圍
      if (
        dragbox.offsetTop + dragbox.offsetHeight >
        windowBottom.offsetTop + windowBottom.offsetHeight - 10
      ) {
        dragbox.style.top =
          windowBottom.offsetTop +
          windowBottom.offsetHeight -
          dragbox.offsetHeight -
          10 +
          "px";
      }
    }
  });
});

draggableElem.forEach((dragbox) => {
  dragbox.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
      moveElement = false;
    })
  );
});

draggableElem.forEach((dragbox) => {
  dragbox.addEventListener("mouseleave", stopMovement);
});

draggableElem.forEach((dragbox) => {
  dragbox.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
  });
});
//打開資料夾
function openFolder(folder) {
  if (
    folder == "art" &&
    document.querySelector(".artInfoFolder").style.display != "block"
  ) {
    document.querySelector(".artInfoFolder").style.display = "block";
    document.querySelector(".artInfoFolder").style.left = "60%";
    document.querySelector(".artInfoFolder").style.top = "80%";
  }
  if (
    folder == "video" &&
    document.querySelector(".videoInfoFolder").style.display != "block"
  ) {
    document.querySelector(".videoInfoFolder").style.display = "block";
    document.querySelector(".videoInfoFolder").style.left = "60%";
    document.querySelector(".videoInfoFolder").style.top = "80%";
  }
}

let isImgOpened = false;
let isVideoOpened = false;
//打開圖片
function openImage(imgSrc, name) {
  document.querySelector(".ImgWindow").style.display = "flex";
  document.querySelector(".artImg").src = imgSrc;
  document.querySelector(".lineText").textContent = name;
  if (isImgOpened == false) {
    document.querySelector(".ImgWindow").style.top = "70%";
    document.querySelector(".ImgWindow").style.left = "30%";
  }
  isImgOpened = true;
}

//打開影片
function openVideo(imgSrc, name) {
  document.querySelector(".videoWindow").style.display = "flex";
  document.querySelector(".artVideo").src = imgSrc;
  document.querySelector(".lineTextV").textContent = name;
  if (isVideoOpened == false) {
    document.querySelector(".videoWindow").style.top = "70%";
    document.querySelector(".videoWindow").style.left = "30%";
  }
  isVideoOpened = true;
}
//關掉資料夾
function closeFolder(folder) {
  if (folder == "art") {
    document.querySelector(".artInfoFolder").style.display = "none";
    closeFolderImg("art");
  }
  if (folder == "video") {
    document.querySelector(".videoInfoFolder").style.display = "none";
    closeFolderImg("video");
  }
}

// 關掉圖片
function closeFolderImg(div) {
  if (div == "art") {
    document.querySelector(".ImgWindow").style.display = "none";
  }
  if (div == "video") {
    document.querySelector(".videoWindow").style.display = "none";
    console.log("efge");
  }
  isImgOpened = false;
}

//評論區設定
let com = document.getElementById("Review");
let row = 0;
console.log(com.value.length);
let commented = [];
com.onkeydown = (e) => {
  //enter送出
  if (e.keyCode == 13 && com.value.length == 0 && !e.shiftKey) return false;
  if (e.keyCode == 13 && com.value.length > 0 && !e.shiftKey) {
    let commentValue = document.querySelector("#Review").value;
    commented.push(commentValue);
    console.log(commented);
    document.querySelector("#Review").value = "";
    newComment(commentValue);
    console.log(commentValue);
    row = 0;
    return false;
  }

  // enter + shift換行
  if (e.keyCode == 13 && com.value.length > 0 && e.shiftKey) {
    row++;
  }
};
let addcComHere = document.querySelector(".comment");
function newComment(c) {
  let todayDate = new Date();
  addcComHere.insertAdjacentHTML(
    "afterbegin",
    `   <div class="comBox">
    <div class="diaImg">
      <img
        class="comImg pixelArt"
        src="../IMG/char/page.png"
        alt=""
      />
      <p class="comdate">${getTime()}</p>
    </div>
    <div class="diaBox">
      <img class="comBG pixelArt" src="../IMG/tag.png" alt="" />
      <p class="diaText">${c}</p>
    </div>
  </div>`
  );
}

// if (commented.length > 0) {
//   for (let i = 0; i < commented.length; i++) {
//     addcComHere.insertAdjacentHTML(
//       "afterbegin",
//       ` <div class="comBox">
//   <img
//     class="comImg pixelArt"
//     src="../IMG/char/page.png"
//     alt=""
//   />
//   <div class="diaBox">
//     <img class="comBG pixelArt" src="../IMG/tag.png" alt="" />
//     <p class="diaText">${commented[i]}</p>
//   </div>
// </div>`
//     );
//   }
// }

function getTime() {
  let myDay = new Date();
  let myYear = myDay.getFullYear();
  let myMonth = myDay.getMonth();
  let myDate = myDay.getDate();
  let myHour = myDay.getHours();
  let myMin = myDay.getMinutes();
  let dateNow = `${myYear}-${myMonth}-${myDate} ${myHour}:${myMin}`;
  return dateNow;
}
