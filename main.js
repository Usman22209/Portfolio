let open = true;
document.getElementById("hamburger").addEventListener("click", (t) => {
  let img = document.getElementById("hamburger");
  let list = document.getElementById("list");
  if (open) {
    img.src = "./assets/close.svg";
    open = !open;
    img.style.width = "18px";
    list.style.top = "60px";
  } else {
    img.src = "./assets/hamburger.svg";
    open = !open;
    img.style.width = "30px";
    list.style.top = "-600px";
  }
});
function number() {
  let span = document.getElementById("number");
  let count = 0;
  setInterval(() => {
    span.innerHTML = count + "%";
    if (count < 70) {
      count++;
    } else {
      clearInterval();
    }
  }, 15);
}
function number1() {
  let span = document.getElementById("number1");
  let count = 0;
  setInterval(() => {
    span.innerHTML = count + "%";
    if (count < 90) {
      count++;
    } else {
      clearInterval();
    }
  }, 12);
}

function number3() {
  let span = document.getElementById("number3");
  let count = 0;
  setInterval(() => {
    span.innerHTML = count + "%";
    if (count < 85) {
      count++;
    } else {
      clearInterval();
    }
  }, 12);
}
function number4() {
  let span = document.getElementById("number4");
  let count = 0;
  setInterval(() => {
    span.innerHTML = count + "%";
    if (count < 82) {
      count++;
    } else {
      clearInterval();
    }
  }, 12);
}
function number5() {
  let span = document.getElementById("react");
  let count = 0;
  setInterval(() => {
    span.innerHTML = count + "%";
    if (count < 70) {
      count++;
    } else {
      clearInterval();
    }
  }, 12);
}
function javascript() {
  let span = document.getElementById("javascript");
  let count = 0;
  setInterval(() => {
    span.innerHTML = count + "%";
    if (count < 75) {
      count++;
    } else {
      clearInterval();
    }
  }, 12);
}

function css() {
  let span = document.getElementById("css");
  let count = 0;
  setInterval(() => {
    span.innerHTML = count + "%";
    if (count < 77) {
      count++;
    } else {
      clearInterval();
    }
  }, 12);
}

function html() {
  let span = document.getElementById("html");
  let count = 0;
  setInterval(() => {
    span.innerHTML = count + "%";
    if (count < 84) {
      count++;
    } else {
      clearInterval();
    }
  }, 12);
}
number();
number1();
number3();
number4();
number5();
javascript();
css();
html();
let index = 0;
function changeBackGround() {
  const images = [
    "/assets/Projects/Textify/Textify_Dark.png",
    "/assets/Projects/Textify/Textify_Light.png",
    "/assets/Projects/Textify/Textify_Dark_Contact.png",
    "/assets/Projects/Textify/Textify_Light_Contact.png",
    "/assets/Projects/Textify/Textify_Dark_About.png",
    "/assets/Projects/Textify/Textify_Light_About.png",
  ];
  document.getElementById(
    "container1"
  ).style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}
let index1 = 0;
function changeBackGround2() {
  const images = [
    "/assets/Projects/Spotify/Spotify0.png",
    "/assets/Projects/Spotify/Spotify1.png",
    "/assets/Projects/Spotify/Spotify2.png",
  ];
  document.getElementById(
    "spotify"
  ).style.backgroundImage = `url(${images[index1]})`;
  index1 = (index1 + 1) % images.length;
}
let index3 = 0;
function changeBackGround3() {
  const images = [
    "/assets/Projects/toon/toon1.png",
    "/assets/Projects/toon/toon2.png",
    "/assets/Projects/toon/toon3.png",
    "/assets/Projects/toon/toon4.png",
    "/assets/Projects/toon/toon5.png",
    "/assets/Projects/toon/toon6.png",
    "/assets/Projects/toon/toon7.png",
  ];
  document.getElementById(
    "toon"
  ).style.backgroundImage = `url(${images[index3]})`;
  index3 = (index3 + 1) % images.length;
}
let index4 = 0;
function changeBackGround4() {
  const images = [
    "/assets/Projects/weather/weather1.png",
    "/assets/Projects/weather/weather2.png",
    "/assets/Projects/weather/weather3.png",
    "/assets/Projects/weather/weather4.png",
    "/assets/Projects/weather/weather5.png"
  ];
  document.getElementById(
    "weather"
  ).style.backgroundImage = `url(${images[index4]})`;
  index4 = (index4 + 1) % images.length;
}
changeBackGround();
changeBackGround2();
setInterval(() => {
  changeBackGround();
}, 3000);
setInterval(() => {
  changeBackGround2();
}, 3000);
changeBackGround3();
setInterval(() => {
  changeBackGround3();
}, 3000);
changeBackGround4();
setInterval(() => {
  changeBackGround4();
}, 3000);