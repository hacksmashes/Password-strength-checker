let ip = document.querySelector(".ip");
let para = document.querySelector(".para");
let btn = document.querySelector(".btn");
let container = document.querySelector(".container");
let txt = document.querySelector(".txt");

function checkip() {
  if (ip.value.length < 6) {
    para.style.color = "red";
    para.innerHTML = "password must contain 6 characters";
    ip.style.border = "2px solid #f1f1f1";
    ip.style.backgroundColor = "#f1f1f1";
  }

  if (ip.value.length >= 6 && ip.value.length <= 8) {
    para.style.color = "yellow";
    para.innerHTML = "Strength: Medium";
    ip.style.border = "2px solid #f1f1f1";
    ip.style.backgroundColor = "#f1f1f1";
  }

  if (ip.value.length >= 8) {
    para.style.color = "rgb(0, 255, 0)";
    para.innerHTML = "Strength: Hard";
    ip.style.border = "2px solid rgb(0, 255, 0)";
    ip.style.backgroundColor = "rgb(187, 255, 187)";
  }
}

function check() {
  if (ip.value.length < 6) {
    para.style.color = "red";
    ip.style.backgroundColor = "rgba(255,0,0,0.2)";
    ip.style.border = "2px solid red";
    ip.style.color = "#f1f1f1";
    para.innerHTML = "password must contain 6 characters";

    btn.classList.add("btnAnim");
  }

  if (ip.value.length > 6) {
    btn.classList.remove("btnAnim");

    ip.style.transition = "all 0.3s";
    para.style.transition = "all 0.3s";
    ip.style.transform = "scale(0)";
    para.style.transform = "scale(0)";

    ip.style.display = "none";
    para.style.display = "none";

    btn.innerHTML = "";
    btn.classList.add("loadBtn");

    container.style.justifyContent = "center";

    setTimeout(() => {
      btn.classList.remove("loadBtn");
      btn.style.transition = "all 0.3s";
      btn.style.transform = "scale(0)";

      txt.style.display = "flex";

      txt.classList.add("txtSlide");

      // setTimeout(() => {
      //   document.getElementById("body").style.opacity = "0";
      // }, 3000);
    }, 4500);
  }

  setTimeout(() => {
    para.innerHTML = "";
    ip.style.backgroundColor = "#f9f9f9";
    ip.style.border = "2px solid #252525";
    ip.style.color = "#252525";
    btn.classList.remove("btnAnim");
  }, 3000);
}
