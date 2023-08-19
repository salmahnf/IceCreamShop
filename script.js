const navbarNav = document.querySelector('.navbar-nav');
const ham = document.querySelector('#hamburger-menu');
const shop = document.querySelector('#shopping-cart-button');

// hamburger menu
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

//klik selain hamburger menu
document.addEventListener('click', function (e) {
  if (!ham.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!shop.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});
