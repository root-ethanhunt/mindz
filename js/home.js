
let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#navigation-items');

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
    // closeHam.style.width = "250px";
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));

// window.onscroll = () => {
//   const nav = document.querySelector('#header-wrapper');
//   console.log("this.scrollY",this.scrollY)
//   if(this.scrollY >= 80) nav.className = ''; else nav.className = `scroll`;
// };

