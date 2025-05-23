// Show button when scrolled down 200px
window.onscroll = function () {
  document.getElementById("scrollToTopBtn").style.display =
    window.pageYOffset > 25 ? "block" : "none";
};

// Scroll to top when clicked
document.getElementById("scrollToTopBtn").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
