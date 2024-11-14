window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.getElementById("loader-overlay");
    loader.style.display = "none";
  }, 1500);
});

////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  // Get all anchor tags within the header
  const headerLinks = document.querySelectorAll(".header a");

  // Add click event listeners to each anchor tag
  headerLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of anchor tags

      // Get the target section ID from the href attribute
      const targetId = this.getAttribute("href").substring(1); // Remove the '#' symbol
      const targetSection = document.getElementById(targetId);

      // Scroll to the target section
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add click event listener to the arrow-up icon
  const arrowUp = document.querySelector(".arrow-up a");
  if (arrowUp) {
    arrowUp.addEventListener("click", function (event) {
      event.preventDefault();
      const homePage = document.getElementById("hero-page"); // Target the home page section
      if (homePage) {
        homePage.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll to the top of the page
      }
    });
  }
});
