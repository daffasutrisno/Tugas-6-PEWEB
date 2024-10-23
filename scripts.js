document.querySelectorAll(".course-card").forEach((card) => {
  card.addEventListener("mouseover", function () {
    this.classList.add("hovered");
  });
  card.addEventListener("mouseout", function () {
    this.classList.remove("hovered");
  });
});

window.onscroll = function () {
  let header = document.getElementById("main-header");
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};
