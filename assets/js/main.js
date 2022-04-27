// truncateCardTitles
function truncateCardTitle() {
  var cardList = document.querySelectorAll(".card-title");
  cardList.forEach((card) => {
    var text = trimCard(card.innerHTML, 60);
    card.innerHTML = text;
  });
}

function trimCard(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
}
window.addEventListener("load", truncateCardTitle());

// sildebarMini
var sidebarMini__button = document.querySelector(".sidebarMini__button");
var switchBtn = document.querySelector("#checkbox");
switchBtn.onclick = function (e) {
  var body = document.getElementsByTagName("body")[0];
  if (this.checked === true) {
    body.classList.add("darkMode");
  } else {
    body.classList.remove("darkMode");
  }
};
sidebarMini__button.onclick = function () {
  var sidebarMini = document.querySelector(".sidebarMini");
  sidebarMini.classList.toggle("is-opened");
};
