// || M O D E L:
//DOM connection:
const aboutMeText = document.getElementById("aboutMeText");
const photosDiv = document.querySelectorAll(".portfolio_photosDiv");
const projectOrdNum = document.getElementById("portfolio_OrderNum");
const projectName = document.getElementById("portfolio_ProjName");
const projectUsedTech = document.getElementById("portfolio_UsedTech");
const projectDes = document.getElementById("portfolio_ProjDesc");
const webDiv = document.querySelector("#webBtn div");
const codeDiv = document.querySelector("#codeBtn div");
const webIcon = document.getElementById("webIcon");
const codeIcon = document.getElementById("codeIcon");
const webA = document.getElementById("webA");
const codeA = document.getElementById("codeA");
const portfolioInfoSec = document.getElementById("portfolio_desc");
const skillText = document.getElementById("skillText");
const contText = document.getElementById("contactText");
const openIcon = document.getElementById("openNavIcon");
const navBar = document.getElementById("navBar");
const navBarLinks = document.querySelectorAll("#navBar a");
const portfolio = [
  {
    order: "01",
    name: "Планировщик Расписания",
    techs: "React JS, CSS и Git (GitHub)",
    description:
      "Приложение используется для записи задач. Вы можете отслеживать выполненные/невыполненные задачи. Также добавлять их в избранное, редактировать и удалять.",
    webLink: "https://ismoil00.github.io/React_JS-todos-app/#/",
    codeLink: "https://github.com/Ismoil00/React_JS-todos-app",
    btn1: "Веб-сайт",
    btn2: "Исходный код",
  },
  {
    order: "02",
    name: "Приложение для рецептов",
    techs: "HTML, CSS, React JS и API",
    description:
      "Это приложение помогает готовить разные блюда. Вы можете сохранять избранное, читать больше информации о каждом блюде и даже смотреть видео на YouTube.",
    webLink: "https://ismoil00.github.io/JavaScript-Recipe-App/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Recipe-App.git",
    btn1: "Веб-сайт",
    btn2: "Исходный код",
  },
  {
    order: "03",
    name: "Бизнес-сайт",
    techs: "HTML, CSS и JavaScript",
    description:
      "Это бизнес-сайт для демонстрации работы и продукта данного бизнеса. он полностью анимирован и содержит контактную форму.",
    webLink: "https://ismoil00.github.io/JavaScript-Business-Website/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Business-Website",
    btn1: "Веб-сайт",
    btn2: "Исходный код",
  },
  {
    order: "04",
    name: "Погода-приложение",
    techs: "JavaScript, HTML, CSS и открытый API погоды",
    description:
      "Это погодное приложение использует открытый API. Вы ищете город и находите общую информацию на главной странице. Однако, щелкнув по «More Information», вы получите больше информации.",
    webLink: "https://ismoil00.github.io/JavaScript-Weather-App/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Weather-App.git",
    btn1: "Веб-сайт",
    btn2: "Исходный код",
  },
  {
    order: "05",
    name: "Приложение для заметок",
    techs: "HTML, CSS и Vanilla JavaScript",
    description:
      "Это приложение используется для сохранения заметок. Вы можете просматривать заметки, редактировать и удалять.",
    webLink: "https://ismoil00.github.io/JavaScript-Notes-App/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Notes-App.git",
    btn1: "Веб-сайт",
    btn2: "Исходный код",
  },
  {
    order: "06",
    name: "Игра в Блэкджек",
    techs: "HTML, CSS и Vanilla JavaScript",
    description:
      "В этой игре вы играете с компьютером в карты. Игра называется БЛЭК-ДЖЕК. Вы можете выиграть, проиграть или сыграть вничью.",
    webLink: "https://ismoil00.github.io/JavaScript-Blackjack-Game/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Blackjack-Game.git",
    btn1: "Веб-сайт",
    btn2: "Исходный код",
  },
  {
    order: "07",
    name: "Игра инопланетные захватчики",
    techs: "HTML, CSS и Vanilla JavaScript",
    description:
      "В этой игре вам предстоит убивать инопланетных захватчиков, пока они не доберутся до вас. Вы также можете ускорить их движение вверх или вниз.",
    webLink: "https://ismoil00.github.io/JavaScript-Invaders-Game/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Invaders-Game",
    btn1: "Веб-сайт",
    btn2: "Исходный код",
  },
  {
    order: "08",
    name: "Игра Вакамол",
    techs: "HTML, CSS и Vanilla JavaScript",
    description:
      "В этой игре вы должны ударить крота столько раз, сколько можете. Вы должны установить определенное время. Вы также можете изменить скорость крота.",
    webLink: "https://ismoil00.github.io/JavaScript-Whacamole-Game/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Whacamole-Game",
    btn1: "Веб-сайт",
    btn2: "Исходный код",
  },
  {
    order: "09",
    name: "Игра на запоминание",
    techs: "HTML, CSS и Vanilla JavaScript",
    description:
      "Играя в эту игру на память, вы должны запоминать картинки и сопоставлять их по парам. Можно играть по времени или без него. Это очень полезная игра для памяти!",
    webLink: "https://ismoil00.github.io/JavaScript-Memory-Game/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Memory-Game",
    btn1: "Веб-сайт",
    btn2: "Исходный код",
  },
  {
    order: "10",
    name: "Игра Лягушка",
    techs: "HTML, CSS и Vanilla JavaScript",
    description:
      "В этой игре вам просто нужно пересечь автомобильную дорогу и реку, чтобы добраться до финала. игра проводится по времени.",
    webLink: "https://ismoil00.github.io/JavaScript-Frogger-Game/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Frogger-Game.git",
    btn1: "Веб-сайт",
    btn2: "Исходный код",
  },
  {
    order: "11",
    name: "Калькулятор чаевых",
    techs: "HTML, CSS и Vanilla JavaScript",
    description:
      "Этот калькулятор используется для расчета чаевых официантам/официанткам (в процентах на человека).",
    webLink: "https://ismoil00.github.io/JavaScript-Tip-Counter/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Tip-Counter.git",
    btn1: "Веб-сайт",
    btn2: "Исходный код",
  },
  {
    order: "12",
    name: "Привлекательная страница регистрации",
    techs: "HTML и CSS animation",
    description:
      "Эта крутая страница регистрации сделана только с помощью HTML и CSS!",
    webLink: "https://ismoil00.github.io/Attractive-Registration-Page/",
    codeLink: "https://github.com/Ismoil00/Attractive-Registration-Page.git",
    btn1: "Веб-сайт",
    btn2: "Исходный код",
  },
];
const abtMeX = aboutMeText.getBoundingClientRect().x;
const skillX = skillText.getBoundingClientRect().x;
const contX = contText.getBoundingClientRect().x;
let navOpened = false;
let portChanged = "";

//Animation Function that runs on scroll:
function animations() {
  const windowHeight = window.innerHeight;
  const halfWindow = windowHeight / 2;
  const current = window.scrollY;

  movingTexts(windowHeight, current);
  portfolioDescription(halfWindow, current);
  movingPortfolioPhotos(windowHeight, halfWindow, current);
}

//Moving Portfolio Photos on scroll:
/* function movingPortfolioPhotos(windowHeight, halfWindow, current) {
  for (let i = 0; i < photosDiv.length; i++) {
    const divTop = photosDiv[i].getBoundingClientRect().top;
    const divBottom = photosDiv[i].getBoundingClientRect().bottom;

    if (divTop < windowHeight && divBottom + 260 > halfWindow) {
      const imgs = photosDiv[i].querySelectorAll("img");
      const per = Math.ceil((windowHeight / divTop) * 100);

      imgs.forEach((img) => {
        
      });
      return;
    }
  }
} */

// || C O N T R O L L E R:
window.addEventListener("scroll", animations);

openIcon.addEventListener("click", () => {
  openIconChange();
});

// || V I E W:
//Moving "Texts" horizontally:
function movingTexts(windowHeight, current) {
  const abtMeTop = aboutMeText.getBoundingClientRect().top;
  const skillTop = skillText.getBoundingClientRect().top;
  const contTop = contText.getBoundingClientRect().top;
  const moveSkill = Math.ceil(windowHeight * 18.25 - current);
  const moveCont = Math.ceil(contX + (current - 12300));

  if (abtMeTop < windowHeight && abtMeTop > -250) {
    aboutMeText.style.transform = `translateX(${current + abtMeX}px)`;
  } else if (skillTop < windowHeight && skillTop > -250) {
    skillText.style.transform = `translateX(${moveSkill}px)`;
  }
  if (contTop < windowHeight) {
    contText.style.transform = `translateX(${moveCont}px)`;
  }
}

//Changing Portfolio descriptions accordingly:
function portfolioDescription(halfWindow, current) {
  for (let i = 0; i < photosDiv.length; i++) {
    const divTop = photosDiv[i].getBoundingClientRect().top;
    const divBottom = photosDiv[i].getBoundingClientRect().bottom;

    if (current < 855 || current > 11700) {
      portfolioInfoSec.style.display = "none";
      webIcon.style.visibility = "hidden";
      codeIcon.style.visibility = "hidden";
      return;
    } else if (divTop < halfWindow && divBottom + 260 > halfWindow) {
      if (portChanged !== portfolio[i].order) {
        portChanged = portfolio[i].order;
        portfolioInfoSec.style.display = "none";
        webIcon.style.visibility = "hidden";
        codeIcon.style.visibility = "hidden";
      } else {
        portfolioInfoSec.style.display = "flex";

        projectOrdNum.textContent = portfolio[i].order;
        projectName.textContent = portfolio[i].name;
        projectUsedTech.textContent = portfolio[i].techs;
        projectDes.textContent = portfolio[i].description;
        webA.textContent = portfolio[i].btn1;
        codeA.textContent = portfolio[i].btn2;
        webA.href = portfolio[i].webLink;
        codeA.href = portfolio[i].codeLink;

        projectOrdNum.classList.add("hoverEffect");
        projectName.classList.add("hoverEffect");
        projectUsedTech.classList.add("hoverEffect");
        projectDes.classList.add("hoverEffect");
        webDiv.classList.add("hoverEffect");
        codeDiv.classList.add("hoverEffect");
        webA.classList.add("an_BlackEffect");
        codeA.classList.add("an_BlackEffect");

        setTimeout(() => {
          webIcon.style.visibility = "visible";
          codeIcon.style.visibility = "visible";
        }, 500);
      }
      return;
    }
  }
}

//Opening Navigation Menu uponing clicking the arrow sign:
function openIconChange() {
  if (!navOpened) {
    openIcon.classList.remove("closeNavbar");
    openIcon.classList.add("openNavbar");
    navOpened = true;

    setTimeout(() => {
      navBar.classList.remove("moveNavRight");
      navBar.classList.add("moveNavLeft");
      openIcon.src = "images/x.png";
    }, 200);
    setTimeout(() => {
      navBarLinks.forEach((each) => {
        each.style.display = "block";
        each.classList.remove("fadeAnchors");
        each.classList.add("displayAnchors");
      });
    }, 600);
  } else if (navOpened) {
    openIcon.classList.remove("openNavbar");
    openIcon.classList.add("closeNavbar");
    navBar.classList.remove("moveNavLeft");
    navBar.classList.add("moveNavRight");
    navBarLinks.forEach((each) => {
      each.classList.remove("displayAnchors");
      each.classList.add("fadeAnchors");
    });
    navOpened = false;

    setTimeout(() => {
      openIcon.src = "images/open.png";
    }, 500);
  }
}
