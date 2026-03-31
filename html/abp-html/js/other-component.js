document.addEventListener("DOMContentLoaded", function () {
  contactForm();
  cardListing();
});

const contactForm = function () {
  if (document.getElementById("boatForm") != undefined) {
    document
      .getElementById("boatForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;
        window.scrollTo({
          top:
            document.getElementById("boatForm").offsetTop -
            ($(".header").height() + 20),
          behavior: "smooth",
        });

        function showError(input, message) {
          const error = input.previousElementSibling.querySelector(".error");
          error.textContent = message;
          error.style.display = "inline";
          valid = false;
        }

        function clearError(input) {
          const error = input.previousElementSibling.querySelector(".error");
          if (error) error.style.display = "none";
        }

        const requiredFields = [
          { id: "name", msg: "Name is required" },
          { id: "address1", msg: "Address is required" },
          { id: "postcode", msg: "Postcode is required" },
          { id: "email", msg: "Valid email required" },
          { id: "boatName", msg: "Boat name is required" },
          { id: "boatModel", msg: "Boat make & model required" },
          { id: "boatLength", msg: "Boat length required" },
        ];

        requiredFields.forEach((field) => {
          const input = document.getElementById(field.id);
          clearError(input);
          if (!input.value.trim()) {
            showError(input, field.msg);
          }
        });

        // Email validation
        const email = document.getElementById("email");
        if (email.value && !email.value.match(/^\S+@\S+\.\S+$/)) {
          showError(email, "Invalid email format");
        }

        // UK postcode basic validation
        const postcode = document.getElementById("postcode");
        if (
          postcode.value &&
          !postcode.value.match(/^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i)
        ) {
          showError(postcode, "Invalid postcode");
        }

        // Boat length must be numeric
        const length = document.getElementById("boatLength");
        if (length.value && isNaN(parseFloat(length.value))) {
          showError(length, "Boat length must be a number");
        }

        if (valid) {
          const formData = new FormData();
          formData.append("Name", document.getElementById("name").value.trim());
          formData.append(
            "Email",
            document.getElementById("email").value.trim(),
          );
          formData.append(
            "ContactNumber",
            document.getElementById("contactNumber").value.trim(),
          );
          formData.append(
            "Address1",
            document.getElementById("address1").value.trim(),
          );
          formData.append(
            "Address2",
            document.getElementById("address2").value.trim(),
          );
          formData.append(
            "Postcode",
            document.getElementById("postcode").value.trim(),
          );
          formData.append(
            "BoatName",
            document.getElementById("boatName").value.trim(),
          );
          formData.append(
            "BoatModel",
            document.getElementById("boatModel").value.trim(),
          );
          formData.append(
            "BoatLength",
            document.getElementById("boatLength").value.trim(),
          );
          formData.append(
            "VesselType",
            document.querySelector('input[name="vesselType"]:checked').value,
          );
          formData.append(
            "Comment",
            document.getElementById("comment").value.trim(),
          );

          fetch("/api/boatform/submitForm", {
            method: "POST",
            body: formData,
          })
            .then(function (response) {
              if (response.ok) {
                document.querySelector(".js-form-wrap").style.display = "none";
                document.querySelector(".js-form-msg").style.display = "block";
              } else {
                response.json().then(function (err) {
                  alert(
                    err.message || "Something went wrong. Please try again.",
                  );
                });
              }
            })
            .catch(function () {
              alert("Network error. Please try again.");
            });
        }
      });
  }
};

const ipswich = $(
  '.footer__social-icons a[href="https://en-gb.facebook.com/ipswichhavenmarina/"]',
);
const lowestoft = $(
  '.footer__social-icons a[href="https://www.facebook.com/people/Lowestoft-Beacon-Marina/100057546005172/"]',
);

ipswich.hide();
lowestoft.hide();

if (location.pathname.includes("ipswich-beacon-marina")) {
  ipswich.show();
} else if (location.pathname.includes("lowestoft-beacon-marina")) {
  lowestoft.show();
}

// card boxes
const cardListing = function () {
  // Use data injected from Razor in the listing page template
  // Falls back to empty array if not on the news listing page
  const data = typeof newsData !== "undefined" ? newsData : [];

  const cardsContainer = document.querySelector(".filter-wrap #cards");
  const filterButtons = document.querySelectorAll(".filter-links button");
  const prevBtn = document.querySelector(".filter-wrap #prevBtn");
  const nextBtn = document.querySelector(".filter-wrap #nextBtn");
  const pageNumbers = document.querySelector(".filter-wrap #pageNumbers");

  // If no cards container on this page, bail out
  if (!cardsContainer) return;

  const ITEMS_PER_PAGE = 4;
  let currentPage = 1;
  let filteredData = [...data];

  /* Render cards */
  function renderCards(items) {
    cardsContainer.innerHTML = "";
    items.forEach((item) => {
      cardsContainer.innerHTML += `
                <div class="card">
                    <span class="card-img"><img src="${item.image}" alt="${item.alt}"></span>
                    <div class="card-content">
                        <span class="date">${item.date}</span>
                        <h3>${item.title}</h3>
                        <a href="${item.url}">Read full article â†’</a>
                    </div>
                </div>
            `;
    });
  }

  /* Pagination logic */
  function paginate() {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const pageItems = filteredData.slice(start, end);
    renderCards(pageItems);
    renderPagination();
  }

  /* Render pagination buttons */
  function renderPagination() {
    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

    if (pageNumbers) {
      pageNumbers.innerHTML = "";
      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        if (i === currentPage) btn.classList.add("active");
        btn.addEventListener("click", () => slideToPage(i));
        pageNumbers.appendChild(btn);
      }
    }

    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages;
  }

  /* Slide animation handler */
  function slideToPage(page) {
    cardsContainer.classList.add("slide-out");

    setTimeout(() => {
      currentPage = page;
      cardsContainer.classList.remove("slide-out");
      cardsContainer.classList.add("slide-in");

      paginate();

      requestAnimationFrame(() => {
        cardsContainer.classList.remove("slide-in");
      });
    }, 350);
  }

  /* Prev / Next */
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) slideToPage(currentPage - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
      if (currentPage < totalPages) slideToPage(currentPage + 1);
    });
  }

  /* Year filter */

  if (filterButtons.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const year = btn.dataset.year;
        currentPage = 1;

        filteredData =
          year === "all" ? [...data] : data.filter((item) => item.year == year);

        slideToPage(1);
      });
    });
  }

  /* Init */
  paginate();
};
