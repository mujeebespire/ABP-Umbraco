$(document).ready(function () {
  $(".submenu button").on("click", function () {
    $(this).toggleClass("active");
    $(".submenu-pop").toggleClass("show");
  });

  $(".services-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg></button>`,
    nextArrow: `<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg></button>`,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });



  $(".articles-carousel").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "60px",
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });


  $(".director-carousel").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
     arrows: false,
     dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

});

// Filter functionality
document.addEventListener("DOMContentLoaded", function () {
  const filterLinks = document.querySelectorAll("[data-filter]");
  const portCards = document.querySelectorAll("[data-categories]");

  filterLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      filterLinks.forEach((l) => l.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      const filter = this.dataset.filter;

      // Show/hide cards based on filter
      portCards.forEach((card) => {
        const categories = card.dataset.categories.split(" ");
        const cardParent = card.closest(".col-lg-3");

        if (filter === "all" || categories.includes(filter)) {
          cardParent.style.display = "block";
          cardParent.style.opacity = "1";
          cardParent.style.transform = "scale(1)";
        } else {
          cardParent.style.opacity = "0";
          cardParent.style.transform = "scale(0.95)";
          setTimeout(() => {
            cardParent.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // Add smooth transition styles
  portCards.forEach((card) => {
    const cardParent = card.closest(".col-lg-3");
    cardParent.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  });
});

// Enhanced hover effects
document.querySelectorAll(".port-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-8px)";
    this.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.4)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "none";
  });
});

const stickyNav = document.querySelector(".navbar");
// Sticky menu on scroll
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 0) {
    stickyNav.classList.add("sticky");
  } else {
    stickyNav.classList.remove("sticky");
  }

  lastScroll = currentScroll;
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove active class from all tabs and contents
    tabs.forEach((t) => t.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add active class to clicked tab
    this.classList.add("active");

    // Show corresponding content
    const tabId = this.getAttribute("data-tab");
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
      activeContent.classList.add("active");
    }
    $(".director-carousel").slick();
  });
});

// Optional: Add keyboard navigation
tabs.forEach((tab, index) => {
  tab.setAttribute("tabindex", "0");
  tab.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this.click();
    }
  });
});
