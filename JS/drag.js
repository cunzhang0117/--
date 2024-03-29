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
        elemList[i].style.zIndex = `${i}`;
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
      e.preventDefault();
      let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
      let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
      dragbox.style.top = dragbox.offsetTop - (initialY - newY) + "px";
      dragbox.style.left = dragbox.offsetLeft - (initialX - newX) + "px";
      initialX = newX;
      initialY = newY;

      var windowHeight = document.querySelector(".webWindows").offsetHeight;
      var windowWidth = document.querySelector(".webWindows").offsetWidth;

      //右側範圍
      if (parseInt(dragbox.style.left) + dragbox.offsetWidth > windowWidth) {
        dragbox.style.left = windowWidth - dragbox.offsetWidth + "px";
      }
      //左側範圍
      if (parseInt(dragbox.style.left) < 0) {
        dragbox.style.left = 0 + "px";
      }
      //頂部範圍
      if (parseInt(dragbox.style.top) < 0) {
        dragbox.style.top = 0 + "px";
      }
      //底部範圍
      if (parseInt(dragbox.style.top) + dragbox.offsetHeight > windowHeight) {
        dragbox.style.top = windowHeight - dragbox.offsetHeight + "px";
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
