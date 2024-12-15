const navbar = document.getElementById("mainNav");
let lastScrollY = window.scrollY;

// Menyembunyikan navbar saat scroll ke bawah, muncul saat ke atas
window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }
  lastScrollY = window.scrollY;
});

// Navbar akan muncul saat kursor berada di atas halaman
window.addEventListener("mousemove", (e) => {
  if (e.clientY < 50) {
    navbar.style.transform = "translateY(0)";
  }
});
