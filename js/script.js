// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//Toggle class active untuk beli sekarang di home
document.querySelector(".cta").addEventListener("click", function () {
  document.querySelectorAll(".navbar-nav a").forEach((link) => {
    link.classList.remove("active");
  });
  document
    .querySelector('.navbar-nav a[href="#products"]')
    .classList.add("active");
});

// Toggle class active untuk shopping cart button
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Buka modal berdasarkan tombol yang diklik
document.querySelectorAll(".open-modal").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = btn.dataset.target;
    const modal = document.getElementById(targetId);
    modal.style.display = "flex";
  });
});

// Tutup modal saat klik tombol close
document.querySelectorAll(".close-icon").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    btn.closest(".modal").style.display = "none";
  });
});

// Tutup modal saat klik luar
window.addEventListener("click", function (e) {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
