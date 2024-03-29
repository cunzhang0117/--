let whereAmI = document.querySelector(".articleArea"); //預設

//文章動畫
var sectionB = document.querySelectorAll(".article");
window.onscroll = () => {
  sectionB.forEach((sec) => {
    var top = window.scrollY; //網頁的部分
    var offset = sec.offsetTop; //元素的最上面位置
    var height = sec.offsetHeight; //元素的高

    // console.log(offset);
    if (top >= offset) {
      sec.classList.add("showSecAni");
    }
  });
};

//文章內容
var page = 1;
//首頁改變內容
var rightTop = document.getElementById("rightTop"); //右側的頂部
function changeArticlePage(change) {
  //下一頁
  if (change == "next" && page != 2) {
    page++;
    document.getElementById("pageNum").innerText = page;

    sectionB.forEach((sec) => {
      sec.classList.remove("showSecAni");
    });
    //網頁滑上去
    rightTop.scrollIntoView({ behavior: "smooth" });
    changePageContent();
  }

  // 上一頁
  if (change == "pre" && page != 1) {
    page--;
    document.getElementById("pageNum").innerText = page;

    sectionB.forEach((sec) => {
      sec.classList.remove("showSecAni");
    });
    //網頁滑上去
    rightTop.scrollIntoView({ behavior: "smooth" });
    changePageContent();
  }
}

// [IMG] [name(tittle)] [content] [date] [繼續閱讀]
let articleContent = [
  //----no1 Killer Frequency
  [
    ["../IMG/game/header/killerFrequency.jpg"],
    ["Killer Frequency"],
    [
      "一款第一人稱恐怖冒險遊戲，您將會扮演深夜電台主持人 Forrest Nash，他的聽眾遭到神秘殺人魔盯上。點唱機播放著 80 年代的歌曲，而您要一邊聆聽這些復古的曲調，一邊解開謎題、拯救人命，掌控交換台！",
    ],
    ["- 2023/12/19"],
    ["#"],
  ],
  //----no2 my Friendly Neighborhood
  [
    ["../IMG/game/header/myFriendlyNeighborhood.jpg"],
    ["my Friendly Neighborhood"],
    [
      "《美鄰街》，人人都不願意錯過的週六早晨木偶劇，最近好像出了大問題！ 在這款生存恐怖冒險遊戲中，你將扮演維修員戈登前去調查這讓人不安的離奇局面。 抵禦木偶入侵，解開燒腦謎題。",
    ],
    ["- 2023/12/19"],
    ["#"],
  ],
  //----no3 he Bunny Graveyard
  [
    ["../IMG/game/header/theBunnyGraveyard.jpg"],
    ["The Bunny Graveyard"],
    [
      "像素恐怖遊戲，你作為一對白手套，幫助一隻神秘兔兔整理她的花園，但顯然事情並不如表面那樣普通……？",
    ],
    ["- 2023/12/19"],
    ["#"],
  ],
  //----no4 A Space for the Unbound
  [
    ["../IMG/game/header/aSpaceForTheUnbound.jpg"],
    ["A Space for the Unbound"],
    [
      "一場關於長大成人的冒險，你將跟隨一對結束高中生活的戀人踏上自我發現之旅，同時面對世界末日的到來。探索 90 年代的印尼小鎮，揭開它的秘密，運用超自然能力潛入人們內心深處，還可以撫摸貓。",
    ],
    ["- 2023/12/19"],
    ["#"],
  ],
  //----no5 Lethal company
  [
    ["../IMG/game/header/lethalCompany.jpg"],
    ["Lethal company"],
    [
      "多人合作恐怖遊戲，你將被公司派往險峻的異星，撿拾一切有用的廢料回報公司！",
    ],
    ["- 2023/12/19"],
    ["#"],
  ],
  //----no6 In sound mind
  [
    ["../IMG/game/header/inSoundMind.jpg"],
    ["In sound mind"],
    [
      "第一人稱冒險恐怖遊戲，深入四個迥異病人的內心世界，解謎、探索、戰鬥！順便聽一下好聽的音樂再走吧～",
    ],
    ["- 2023/12/19"],
    ["#"],
  ],
  //----no7 Mindhack
  [
    ["../IMG/game/header/Mindhack.jpg"],
    ["Mindhack"],
    [
      "將惡人們的頭腦改變成...大善人！MINDHACK是一款文字冒險遊戲，玩家們會在遊戲遇見各種獨特的惡人，你需要黑進他們的大腦，改寫他們的大腦，把他們變成無憂無慮的善人！",
    ],
    ["- 2023/12/19"],
    ["../HTML/review_mindhack.html"],
  ],
  //----no8 Cult of the lamb
  [
    ["../IMG/game/header/cultOfTheLamb.jpg"],
    ["Cult of the lamb"],
    [
      "在假先知之境裡創立屬於自己的聖教，冒險深入多種神祕地區，建立忠誠追隨者的林地根據地，傳播你的真言，成為一個真正的聖教。",
    ],
    ["- 2023/12/19"],
    ["../HTML/review_cotl.html"],
  ],
];

//更改header推薦內容的部分
if (whereAmI.classList.contains("articleArea")) {
  let num = Math.floor(Math.random() * articleContent.length);
  document.querySelector(
    ".gameInfoTittle"
  ).innerText = `>> ${articleContent[num][1]}`;
  document.querySelector(".gameInfoText").innerText = articleContent[num][2];
}

changePageContent();

function changePageContent() {
  //改變網頁內容
  let mySection = document.querySelectorAll(".article");
  if (page == 1) {
    for (let i = 0; i < 4; i++) {
      //圖片
      mySection[i].querySelector(".articleImg").src =
        articleContent[articleContent.length - i - 1][0];
      //標題
      mySection[i].querySelector(".articleTittle").innerText =
        articleContent[articleContent.length - i - 1][1];
      //內容
      mySection[i].querySelector(".articleContent").innerText =
        articleContent[articleContent.length - i - 1][2];
      //日期
      mySection[i].querySelector(".articleDate").innerText =
        articleContent[articleContent.length - i - 1][3];
      //繼續閱讀
      mySection[i].querySelector(".articleInfo").href =
        articleContent[articleContent.length - i - 1][4];
    }
  }

  if (page == 2) {
    for (let i = 0; i < 4; i++) {
      //圖片
      mySection[i].querySelector(".articleImg").src = articleContent[3 - i][0];
      //標題
      mySection[i].querySelector(".articleTittle").innerText =
        articleContent[3 - i][1];
      //內容
      mySection[i].querySelector(".articleContent").innerText =
        articleContent[3 - i][2];
      //日期
      mySection[i].querySelector(".articleDate").innerText =
        articleContent[3 - i][3];
    }
  }
}

//導覽列

function openPanel() {
  document.getElementById("pageTag").classList.remove("closePaneAni");
  document.getElementById("pageTag").classList.add("openPanelAni");
  document.getElementById("pageTag").style.display = "flex";
}

function closePanel() {
  document.getElementById("pageTag").classList.remove("openPanelAni");
  document.getElementById("pageTag").classList.add("closePaneAni");
  //   document.getElementById("pageTag").style.display = "none";
}
// closePaneAni;

///切到主頁的部分
// console.log(whereAmI.className);
function switchToHomePage() {
  // console.log(whereAmI.className != "articleArea");
  if (!whereAmI.classList.contains("articleArea")) {
    rightTop.scrollIntoView({ behavior: "smooth" });
    whereAmI.classList.remove("openArea");
    whereAmI.classList.add("closeArea");
    whereAmI = document.querySelector(".articleArea");
    //
    setTimeout(function () {
      document.getElementById("nowPageText").innerText = "主頁";
      whereAmI.classList.remove("closeArea");
      whereAmI.classList.add("openArea");
    }, 500);
    // whereAmI = document.querySelector(".articleArea");
    // whereAmI.classList.remove("closeArea");
    // whereAmI.classList.add("openArea");
    //
  }
}

///切換tag的部分
var horrorList = [
  [["../IMG/game/header/killerFrequency.jpg"], ["#"]],
  [["../IMG/game/header/myFriendlyNeighborhood.jpg"], ["#"]],
  [["../IMG/game/header/theBunnyGraveyard.jpg"], ["#"]],
  [["../IMG/game/header/lethalCompany.jpg"], ["#"]],
  [["../IMG/game/header/inSoundMind.jpg"], ["#"]],
];

var storyList = [
  [["../IMG/game/header/killerFrequency.jpg"], ["#"]],
  [["../IMG/game/header/theBunnyGraveyard.jpg"], ["#"]],
  [["../IMG/game/header/aSpaceForTheUnbound.jpg"], ["#"]],
  [["../IMG/game/header/Mindhack.jpg"], ["../HTML/review_mindhack.html"]],
  [["../IMG/game/header/inSoundMind.jpg"], ["#"]],
];
var pixelList = [
  [["../IMG/game/header/theBunnyGraveyard.jpg"], ["#"]],
  [["../IMG/game/header/aSpaceForTheUnbound.jpg"], ["#"]],
];
var nowPage = null;

function changePageTag(tag) {
  //增加小圖的地方
  var addPos = document.getElementById("addHere");

  //如果現在不在tag區，就關掉當前的區域，打開tag區
  if (!whereAmI.classList.contains("tagArea")) {
    rightTop.scrollIntoView({ behavior: "smooth" });
    whereAmI.classList.remove("openArea");
    whereAmI.classList.add("closeArea");
    whereAmI = document.querySelector(".tagArea");
    //
    setTimeout(function () {
      document.getElementById("nowPageText").innerText = "標籤";
      whereAmI.style.display = "flex";
      whereAmI.classList.remove("closeArea");
      whereAmI.classList.add("openArea");
    }, 500);
    //
  }
  if (whereAmI.className != "tagArea") {
    whereAmI = document.querySelector(".tagArea");
  }

  if (nowPage != tag) {
    nowPage = tag;

    if (tag == "horror") {
      addPos.innerHTML = "";
      let myLen = horrorList.length;

      for (let i = 0; i < myLen; i++) {
        addPos.insertAdjacentHTML(
          "afterbegin",
          `<div class="tagDiv"><a href="${horrorList[i][1]}"><img class="tagImg" src=${horrorList[i][0]}></a></div>`
        );
      }
    }
    if (tag == "story") {
      addPos.innerHTML = "";
      let myLen = storyList.length;
      for (let i = 0; i < myLen; i++) {
        addPos.insertAdjacentHTML(
          "afterbegin",
          `<div class="tagDiv"><a href="${storyList[i][1]}"><img class="tagImg" src=${storyList[i][0]}></a></div>`
        );
      }
    }
    if (tag == "pixel") {
      addPos.innerHTML = "";
      let myLen = pixelList.length;
      for (let i = 0; i < myLen; i++) {
        addPos.insertAdjacentHTML(
          "afterbegin",
          `<div class="tagDiv"><a href="${pixelList[i][1]}"><img class="tagImg" src=${pixelList[i][0]}></a></div>`
        );
      }
    }
  }
}

//[圖片] [名字] [內容] [tag] [有無] [發售日]
var wishList = [
  [
    ["../IMG/game/whisList/catechesis.jpg"],
    ["Catechesis"],
    [
      "Yuppie Psycho製作團隊新作，講述小男孩得到神秘力量，幫助他人，卻要付出對抗惡魔的代價。",
    ],
    ["#恐怖 #像素 #劇情"],
    ["none"],
    [null],
  ],
  [
    ["../IMG/game/whisList/ENA.jpg"],
    ["ENA"],
    [
      "延伸自作者的原創動畫，獨特的美術及音樂風格，還有優秀的配音！等待發售的日子可以先欣賞一下釋出的動畫。",
    ],
    ["#恐怖 #劇情"],
    ["none"],
    [null],
  ],
  [
    ["../IMG/game/whisList/BBU.jpg"],
    ["Billie Bust Up"],
    ["獸人+音樂遊戲，風格多變，近期釋出的單曲都非常好聽！"],
    ["#音樂 #戰鬥"],
    ["none"],
    [null],
  ],
  [
    ["../IMG/game/whisList/KAKURIYO.jpg"],
    ["KAKURIYO"],
    [
      "像素多人恐怖遊戲，尋找道具+躲過敵人的追擊。官推釋出的演示畫面很獵奇很讚&#128525;",
    ],
    ["#恐怖 #像素"],
    ["none"],
    [null],
  ],
  [
    ["../IMG/game/whisList/GS.jpg"],
    ["逆轉裁判456"],
    ["456終於也要上steam啦！而且還有中文化，逆轉檢事也不遠了吧"],
    ["#推理 #幽默"],
    ["flex"],
    ["01, 24, 2024"],
  ],
];

function switchToWishList() {
  if (!whereAmI.classList.contains("wishArea")) {
    rightTop.scrollIntoView({ behavior: "smooth" });
    whereAmI.classList.remove("openArea");
    whereAmI.classList.add("closeArea");
    whereAmI = document.querySelector(".wishArea");

    //

    setTimeout(function () {
      document.getElementById("nowPageText").innerText = "願望清單";
      whereAmI.style.display = "block";
      whereAmI.classList.remove("closeArea");
      whereAmI.classList.add("openArea");
    }, 500);

    let wishListLen = wishList.length;
    let addWsPos = document.querySelector(".areaW");
    addWsPos.innerHTML = "";
    for (let i = 0; i < wishListLen; i++) {
      addWsPos.insertAdjacentHTML(
        "afterbegin",
        `<div class="wishDiv wlDivShow">
    <div class="wishTop">
      <img
        class="wishImg"
        src=${wishList[i][0]}
      />
      <div class="wishInfo">
        <p class="wishName">${wishList[i][1]}</p>
        <p class="wishContent">
        ${wishList[i][2]}
        </p>
        <p class="wishTag">${wishList[i][3]}</p>
      </div>
      <div class="countDownDay">
        <div>
          <div class="countArea" style="display: ${wishList[i][4]}">
            <p class="dayNum" >00</p>
            <p class="day">天</p>
          </div>
          <p>等待中</p>
        </div>
      </div>
    </div>`
      );
    }

    var countDiv = document.querySelectorAll(".dayNum");

    //記得加載倒數日
    findTheDay();
    function findTheDay() {
      for (let i = 1; i <= wishListLen; i++) {
        countDiv[countDiv.length - i].innerHTML = countDownDay(
          wishList[i - 1][5]
        );
        // console.log(countDownDay(wishList[i][5]));
      }
    }

    function countDownDay(theDay) {
      // console.log(theDay);

      var countDown = new Date(theDay).getTime();
      var now = new Date().getTime();
      var distance = countDown - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      console.log(days.toString());
      return days.toString();
    }
  }
}

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

//頂端memo
let speakArea = document.querySelector(".speakArea");
let isDiaOpened = false;
document.querySelector("#memo").addEventListener("keydown", (e) => {
  //按enter且有內容
  if (e.keyCode == 13 && document.querySelector("#memo").value.length > 0) {
    document.querySelector("#memo").value = "";
    speakArea.classList.toggle("reShowSia");

    speakArea.style.display = "block";
    startSpeak();
  }
});

let speakLine = [
  ["嗯嗯"],
  ["醬子啊……"],
  ["我收到啦"],
  ["窩不知道"],
  ["冬特買什麼呢"],
  ["我喜歡恐怖遊戲……"],
  ["現在先別跟我說話"],
  ["我好暈啊"],
];

function startSpeak() {
  let randomNum;
  // speakArea.style.display = "none";
  if (scrollDown) {
    randomNum = Math.floor(Math.random() * 2 + 6);
  } else randomNum = Math.floor(Math.random() * 6);
  // speakArea.style.display = "block";
  // speakArea.classList.add("showDia");
  speakArea.querySelector(".speakContent").innerText = speakLine[randomNum];
}
