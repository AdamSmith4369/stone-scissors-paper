let scorbord1 = document.querySelector("#score1");
let scorbord2 = document.querySelector("#score2");

let stone = document.querySelector("#stone").getAttribute("src");
let paper = document.querySelector("#paper").getAttribute("src");
let scissors = document.querySelector("#scissors").getAttribute("src");

let yourChoice = document.querySelector("#yc");
let computerChoice = document.querySelector("#cc");
let sonuc = document.querySelector(".sonuc");

//! OYUN BAŞLASIN

let counter = 5;
console.log(counter);

let hak = document.querySelector("#hak");
hak.innerText = `${counter} Hakkınız kaldı`;

document.querySelector(".mainPart").addEventListener("click", (e) => {
  if (counter > 0) {
    //! CHOİCES
    yourChoice.setAttribute("src", e.target.getAttribute("src"));
    const ranNum = Math.trunc(Math.random() * 3);
    let liste = [
      "https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-16.jpg",
      "https://cdn0.iconfinder.com/data/icons/fashion-clothes-vol-2/48/49-512.png",
      "https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-15.jpg",
    ];
    //   console.log(liste[ranNum]);
    computerChoice.setAttribute("src", liste[ranNum]);

    if (yourChoice.getAttribute("src") == computerChoice.getAttribute("src")) {
      sonuc.innerText = "Berabere kaldınız!";
    } else if (
      (yourChoice.getAttribute("src") == stone &&
        computerChoice.getAttribute("src") == scissors) ||
      (yourChoice.getAttribute("src") == scissors &&
        computerChoice.getAttribute("src") == paper) ||
      (yourChoice.getAttribute("src") == paper &&
        computerChoice.getAttribute("src") == stone)
    ) {
      sonuc.innerText = "Tebrikler 😎!";
      scorbord1.innerText++;
    } else {
      sonuc.innerText = "Bilgisayar Kazandı!";
      scorbord2.innerText++;
    }

    setTimeout(() => {
      yourChoice.setAttribute(
        "src",
        "https://cdn.create.vista.com/api/media/small/444076568/stock-video-animated-funny-symbol-question-mark-looped-video-vector-illustration-isolated?videoStaticPreview=true&token="
      );
      computerChoice.setAttribute(
        "src",
        "https://cdn.create.vista.com/api/media/small/444076568/stock-video-animated-funny-symbol-question-mark-looped-video-vector-illustration-isolated?videoStaticPreview=true&token="
      );
      sonuc.innerText = "????????";
    }, 3000);
    counter--;
    hak.innerText = `${counter} Hakkınız kaldı`;
  } else {
    alert("Maalesef hakkınız doldu.");
  }
});

//! RELOAD PAGE

document.querySelector("#yenile").addEventListener("click", () => {
  window.location.reload();
});
