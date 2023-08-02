// Pilihan Computer

function pilihanComputer() {
  const com = Math.floor(Math.random() * 10);

  if (com <= 3) return "kertas";
  if (com > 3 && com <= 6) return "gunting";
  return "batu";
}

// Ambil Hasil Computer
function getHasil(com, player) {
  if (player == com) return "YOU DRAW";
  if (player == "kertas") return com == "gunting" ? "YOU LOSE" : "YOU WIN";
  if (player == "gunting") return com == "batu" ? "YOU LOSE" : "YOU WIN";
  if (player == "batu") return com == "kertas" ? "YOU LOSE" : "YOU WIN";
}

//   Pilihan Player
const infoCom = document.querySelector(".info-computer");
function putar() {
  const imgComputer = document.querySelector(".com");
  const gambar = ["batu", "gunting", "kertas"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "image/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 50);
}

const mulai = document.querySelector(".tombol-mulai");
const restart = document.querySelector(".tombol-restart");
const imagePick = document.querySelector(".pick");
const infoPlayer = document.querySelector(".info-player");
const pilih = document.querySelectorAll(".pilih");

pilih.forEach((p) => {
  p.addEventListener("click", function () {
    imagePick.src = "image/" + this.value + ".png";
    imagePick.alt = this.value;
    infoPlayer.innerHTML = this.value;
    mulai.classList.remove("disabled");
    window.location.href = "#mainbagutas";
  });
});

let scoreplayer = 0;
let scorecomputer = 0;

mulai.addEventListener("click", function () {
  const pComputer = pilihanComputer();
  const pPlayer = imagePick.alt;
  const hasil = document.querySelector(".hasil");
  const result = getHasil(pComputer, pPlayer);
  // restart.classList.remove('disabled');

  putar();

  setTimeout(() => {
    const imgComputer = document.querySelector(".com");
    imgComputer.setAttribute("src", "image/" + pComputer + ".png");
    infoCom.innerHTML = pComputer;
    hasil.innerHTML = result;
    // const pcom = pilihanComputer();
    // const ppl = imagePick.alt;
    // const res = getHasil(pcom, ppl);
    // upgrade.classList.add("disabled");
    // mulai.classList.remove("disabled");
    const scorePlayer = document.querySelector(".scorePlayer");
    const scoreComputer = document.querySelector(".scoreComputer");
    if (result == "YOU DRAW") {
      return 0;
    } else if (result == "YOU WIN") {
      scoreplayer++;
      scorePlayer.innerHTML = scoreplayer;
      if (scoreplayer == 10) {
        mulai.classList.add("disabled");
        restart.classList.remove("disabled");
        mulai.innerHTML = "Mulai";
        scorePlayer.style.display = "none";
        scoreComputer.style.display = "none";
        hasil.innerHTML = "Selamat kamu menang!!";
        pilih.forEach((e) => e.classList.add("disabled"));
      }
    } else if (result == "YOU LOSE") {
      scorecomputer++;
      scoreComputer.innerHTML = scorecomputer;
      if (scorecomputer == 10) {
        mulai.innerHTML = "Mulai";
        mulai.classList.add("disabled");
        restart.classList.remove("disabled");
        pilih.forEach((e) => e.classList.add("disabled"));
        scorePlayer.style.display = "none";
        scoreComputer.style.display = "none";
        hasil.innerHTML = "Kamu kalah tetap semangat!!!";
        pilih.classList.add("disabled");
      }
    }
  }, 1000);
});

restart.addEventListener("click", function (e) {
  location.reload();
  e.preventDefault();
});

function tambah() {}
