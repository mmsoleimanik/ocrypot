//ANIMATIONS OF main section.menu-category section.category article img.go_to
// Get the parent section
{
    let parentSection = document.querySelector("main section.menu-category section.category");

    // Get all <article> elements inside it
    let articles = parentSection.getElementsByTagName("article");

    // Loop through each article and add mouseover listener
    for (let i = 0; i < articles.length; i++) {
        let article = articles[i];

        // Find the image with class "go_to" inside this article
        let img = article.querySelector("img.go_to");

        article.addEventListener("mouseover", () => {
          img.src = "../icon/Arrow - Right 3.svg";
        }); 
        article.addEventListener("mouseout", () => {
          img.src = "../icon/Arrow - right 2.svg"; // revert back on mouseout (optional)
        });
    }
}

{
    // Get the parent section
    let parentSection = document.querySelector("main section.menu-category section.foods");
    console.log(parentSection);

    // Get all <article> elements inside it
    let articles = parentSection.getElementsByTagName("article");

    // Loop through each article and add mouseover listener
    for (let i = 0; i < articles.length; i++) {
        let article = articles[i];

        // Find the image with class "go_to" inside this article
        let img = article.querySelector("div.food-content div button img");

        article.addEventListener("mouseover", () => {
          img.src = "../icon/Add to cart Icon-white.svg";
        }); 
        article.addEventListener("mouseout", () => {
          img.src = "../icon/Add to cart Icon.svg"; // revert back on mouseout (optional)
        });
    }

}

{
    // Get the parent section
    let parentSection = document.querySelector("main section.trend-order div.main");
    console.log(parentSection);

    // Get all <article> elements inside it
    let articles = parentSection.getElementsByTagName("article");

    // Loop through each article and add mouseover listener
    for (let i = 0; i < articles.length; i++) {
        let article = articles[i];

        // Find the image with class "go_to" inside this article
        let img = article.querySelector("div.price button img");

        article.addEventListener("mouseover", () => {
          img.src = "../icon/Add to cart Icon-white.svg";
        }); 
        article.addEventListener("mouseout", () => {
          img.src = "../icon/Add to cart Icon.svg"; // revert back on mouseout (optional)
        });
    }

}

{
let isListOpen = false;
const leftBox = document.querySelector("nav div.left_box");
const openButton = document.getElementById("toggle_nav_button");
const closeButton = document.getElementById("close_nav_button");

function toggleLinkList() {
  if (isListOpen) {
    leftBox.style.left = "-120%";
  } else {
    leftBox.style.left = "0";
  }
  isListOpen = !isListOpen;
  console.log("kir");
}

openButton.addEventListener("click", toggleLinkList);
closeButton.addEventListener("click", toggleLinkList);
}