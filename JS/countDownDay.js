// //[圖片] [名字] [內容] [tag] [有無] [發售日]
// var wishList = [
//   [
//     ["../IMG/game/whisList/catechesis.jpg"],
//     ["Catechesis"],
//     [
//       "Yuppie Psycho製作團隊新作，講述小男孩得到神秘力量，幫助他人，卻要付出對抗惡魔的代價。",
//     ],
//     ["#恐怖 #像素 #劇情"],
//     ["none"],
//     [null],
//   ],
//   [
//     ["../IMG/game/whisList/ENA.jpg"],
//     ["ENA"],
//     [
//       "延伸自作者的原創動畫，獨特的美術及音樂風格，還有優秀的配音！等待發售的日子可以先欣賞一下釋出的動畫。",
//     ],
//     ["#恐怖 #劇情"],
//     ["none"],
//     [null],
//   ],
//   [
//     ["../IMG/game/whisList/BBU.jpg"],
//     ["Billie Bust Up"],
//     ["獸人+音樂遊戲，風格多變，近期釋出的單曲都非常好聽！"],
//     ["#音樂 #戰鬥"],
//     ["none"],
//     [null],
//   ],
//   [
//     ["../IMG/game/whisList/KAKURIYO.jpg"],
//     ["KAKURIYO"],
//     [
//       "像素多人恐怖遊戲，尋找道具+躲過敵人的追擊。官推釋出的演示畫面很獵奇很讚&#128525;",
//     ],
//     ["#恐怖 #像素"],
//     ["none"],
//     [null],
//   ],
//   [
//     ["../IMG/game/whisList/GS.jpg"],
//     ["逆轉裁判456"],
//     ["456終於也要上steam啦！而且還有中文化，逆轉檢事也不遠了吧"],
//     ["#推理 #幽默"],
//     ["flex"],
//     ["01, 24, 2024"],
//   ],
// ];

// let wishListLen = wishList.length;
// let addWsPos = document.querySelector(".areaW");
// addWsPos.innerHTML = "";
// for (let i = 0; i < wishListLen; i++) {
//   addWsPos.insertAdjacentHTML(
//     "afterbegin",
//     `<div class="wishDiv wlDivShow">
//     <div class="wishTop">
//       <img
//         class="wishImg"
//         src=${wishList[i][0]}
//       />
//       <div class="wishInfo">
//         <p class="wishName">${wishList[i][1]}</p>
//         <p class="wishContent">
//         ${wishList[i][2]}
//         </p>
//         <p class="wishTag">${wishList[i][3]}</p>
//       </div>
//       <div class="countDownDay">
//         <div>
//           <div class="countArea" style="display: ${wishList[i][4]}">
//             <p class="dayNum" >00</p>
//             <p class="day">天</p>
//           </div>
//           <p>等待中</p>
//         </div>
//       </div>
//     </div>
//     <div class="wishBottom"></div>
//   </div>`
//   );
// }

// var countDiv = document.querySelectorAll(".dayNum");

// //記得加載倒數日
// findTheDay();
// function findTheDay() {
//   for (let i = 1; i <= wishListLen; i++) {
//     countDiv[countDiv.length - i].innerHTML = countDownDay(wishList[i - 1][5]);
//     // console.log(countDownDay(wishList[i][5]));
//   }
// }

// function countDownDay(theDay) {
//   // console.log(theDay);

//   var countDown = new Date(theDay).getTime();
//   var now = new Date().getTime();
//   var distance = countDown - now;

//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   console.log(days.toString());
//   return days.toString();
// }
