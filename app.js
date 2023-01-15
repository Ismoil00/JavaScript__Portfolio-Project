// || M O D E L:
//DOM connection:
const mobilePort = document.getElementById("mobilePort");
// const mobileDivs = document.querySelectorAll(".mobileDiv");
const desktopPort = document.getElementById("desktopPort");
const portfolioInfoSec = document.getElementById("portfolio_desc");
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
const skillText = document.getElementById("skillText");
const contText = document.getElementById("contactText");
const openIcon = document.getElementById("openNavIcon");
const navBar = document.getElementById("navBar");
const navBarLinks = document.querySelectorAll("#navBar a");
const portRef = document.getElementById("portRef");
const reactFirstPhoto = document.getElementById("reactFirstPhoto");
const portfolio = [
  {
    order: "01",
    name: "To Do List App",
    techs: "React JS, CSS и Git (GitHub)",
    description:
      "The App is used to record tasks. You can track completed/active tasks. Add them to favorites, edit and delete them as well.",
    webLink: "https://ismoil00.github.io/React_JS-todos-app/#/",
    codeLink: "https://github.com/Ismoil00/React_JS-todos-app",
    btn1: "Website",
    btn2: "GitHub Repository",
    img1: "images/ReactToDoApp01.png",
    img2: "images/ReactToDoApp02.png",
    img3: "images/ReactToDoApp03.png",
    img4: "images/ReactToDoApp04.png",
  },
  {
    order: "02",
    name: "Recipe App",
    techs: "HTML, CSS, React JS и API",
    description:
      "This application helps to cook different dishes. You can save favorites, read more information about each dish, and even watch YouTube videos.",
    webLink: "https://ismoil00.github.io/JavaScript-Recipe-App/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Recipe-App.git",
    btn1: "Website",
    btn2: "GitHub Repository",
  },
  {
    order: "03",
    name: "Business Website",
    techs: "HTML, CSS и JavaScript",
    description:
      "This is a business website to showcase their work and products. it is fully animated and contains a contact form.",
    webLink: "https://ismoil00.github.io/JavaScript-Business-Website/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Business-Website",
    btn1: "Website",
    btn2: "GitHub Repository",
  },
  {
    order: "04",
    name: "Weather App",
    techs: "JavaScript, HTML, CSS and open weather API",
    description:
      "This weather app uses an open API. You search for a city and find general information on the main page. However, clicking on 'More Information' button gets more related info.",
    webLink: "https://ismoil00.github.io/JavaScript-Weather-App/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Weather-App.git",
    btn1: "Website",
    btn2: "GitHub Repository",
  },
  {
    order: "05",
    name: "Notes App",
    techs: "HTML, CSS и Vanilla JavaScript",
    description:
      "This application is used to save notes. You can view notes, edit and delete.",
    webLink: "https://ismoil00.github.io/JavaScript-Notes-App/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Notes-App.git",
    btn1: "Website",
    btn2: "GitHub Repository",
  },
  {
    order: "06",
    name: "BlackJack Game",
    techs: "HTML, CSS и Vanilla JavaScript",
    description:
      "In this game you play cards with the computer. The game is called BLACKJACK. You can win, lose or draw.",
    webLink: "https://ismoil00.github.io/JavaScript-Blackjack-Game/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Blackjack-Game.git",
    btn1: "Website",
    btn2: "GitHub Repository",
  },
  {
    order: "07",
    name: "Alien Invaders Game",
    techs: "HTML, CSS и Vanilla JavaScript",
    description:
      "In this game, you have to kill alien invaders until they get to you. You can also speed them up or down.",
    webLink: "https://ismoil00.github.io/JavaScript-Invaders-Game/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Invaders-Game",
    btn1: "Website",
    btn2: "GitHub Repository",
  },
  {
    order: "08",
    name: "Whaca-mole Game",
    techs: "HTML, CSS и Vanilla JavaScript",
    description:
      "In this game, you have to hit the mole as many times as you can. But, you must set a specific time. You can also change the mole's speed.",
    webLink: "https://ismoil00.github.io/JavaScript-Whacamole-Game/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Whacamole-Game",
    btn1: "Website",
    btn2: "GitHub Repository",
  },
  {
    order: "09",
    name: "Memory Game",
    techs: "HTML, CSS и Vanilla JavaScript",
    description:
      "While playing this memory game, you have to memorize the pictures and match them in pairs. You can play with or without time. This is a very useful memory game.",
    webLink: "https://ismoil00.github.io/JavaScript-Memory-Game/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Memory-Game",
    btn1: "Website",
    btn2: "GitHub Repository",
  },
  {
    order: "10",
    name: "Frogger Game",
    techs: "HTML, CSS и Vanilla JavaScript",
    description:
      "In this game, you just need to cross car roads and a river to reach the final spot. the game must be played on time.",
    webLink: "https://ismoil00.github.io/JavaScript-Frogger-Game/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Frogger-Game.git",
    btn1: "Website",
    btn2: "GitHub Repository",
  },
  {
    order: "11",
    name: "Tips Calculator",
    techs: "HTML, CSS и Vanilla JavaScript",
    description:
      "This calculator is used to calculate tips for waiters/waitresses (as a percentage per person).",
    webLink: "https://ismoil00.github.io/JavaScript-Tip-Counter/",
    codeLink: "https://github.com/Ismoil00/JavaScript-Tip-Counter.git",
    btn1: "Website",
    btn2: "GitHub Repository",
  },
  {
    order: "12",
    name: "Attractive Registration Page",
    techs: "HTML и CSS animation",
    description: "This cool registration page is made with just HTML and CSS.",
    webLink: "https://ismoil00.github.io/Attractive-Registration-Page/",
    codeLink: "https://github.com/Ismoil00/Attractive-Registration-Page.git",
    btn1: "Website",
    btn2: "GitHub Repository",
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
  const windowWidth = window.innerWidth;
  const halfWindow = windowHeight / 2;
  const current = window.scrollY;

  movingTexts(windowHeight, current, windowWidth);
  portfolioDescription(halfWindow, windowWidth);
  // movingPortfolioPhotos(windowHeight, halfWindow, current);
}

//Moving Portfolio Photos on scroll:
/* function movingPortfolioPhotos(windowHeight, halfWindow, current) {
  for (let i = 0; i < photosDiv.length; i++) {
    const divTop = photosDiv[i].getBoundingClientRect().top;
    const divBottom = photosDiv[i].getBoundingClientRect().bottom;

    if (divTop < windowHeight && divBottom + 260 > halfWindow) {
      const imgs = photosDiv[i].querySelectorAll("img");
      const windowY = window.scrollY;
      const per = windowY % windowHeight;

      imgs.forEach((img) => {
        img.style.transform = `translateY(${-per}px)`;
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

portRef.addEventListener("click", () => {
  const windowWidth = window.innerWidth;
  if (windowWidth < 900) {
    portRef.href = "#mobilePort";
  } else {
    portRef.href = "#desktopPort";
  }
});

navBarLinks.forEach((each) => {
  each.addEventListener("click", () => {
    openIconChange();
  });
});

// || V I E W:
//Moving "Texts" horizontally:
function movingTexts(windowHeight, current, windowWidth) {
  const abtMeTop = aboutMeText.getBoundingClientRect().top;
  const skillTop = skillText.getBoundingClientRect().top;
  const contTop = contText.getBoundingClientRect().top;
  const moveSkill = Math.ceil(windowHeight * 18.25 - current);
  const moveCont = Math.ceil(contX + (current - windowHeight * 18.7));

  if (windowWidth > 900) {
    if (abtMeTop < windowHeight && abtMeTop > -250) {
      aboutMeText.style.transform = `translateX(${current + abtMeX}px)`;
    }
    if (skillTop < windowHeight && skillTop > -250) {
      skillText.style.transform = `translateX(${moveSkill}px)`;
    }
    if (contTop < windowHeight) {
      contText.style.transform = `translateX(${moveCont}px)`;
    }
  }
}

//Changing Portfolio descriptions accordingly:
function portfolioDescription(halfWindow, windowWidth) {
  if (windowWidth > 900) {
    mobilePort.style.display = "none";
    desktopPort.style.display = "flex";

    for (let i = 0; i < photosDiv.length; i++) {
      const divTop = photosDiv[i].getBoundingClientRect().top;
      const divBottom = photosDiv[i].getBoundingClientRect().bottom;
      const lastDivBottom =
        photosDiv[photosDiv.length - 1].getBoundingClientRect().bottom;
      const firtDivTop = photosDiv[0].getBoundingClientRect().top;

      if (firtDivTop > halfWindow || lastDivBottom < halfWindow) {
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
  } else if (windowWidth <= 900) {
    desktopPort.style.display = "none";
    mobilePort.style.display = "flex";
    /* mobileDivs.forEach(e => {
      const eachTop = e.getBoundingClientRect().top;
      const eachBottom = e.getBoundingClientRect().bottom;
      if (eachTop < halfWindow && eachBottom + 260 > halfWindow) {
        console.log(e)
      }
    }) */
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
      openIcon.src = "images/x-icon.png";
    }, 200);
    setTimeout(() => {
      navBarLinks.forEach((each) => {
        // each.style.visibility = "visible";
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
      openIcon.src = "images/menu-icon.png";
    }, 500);
  }
}
