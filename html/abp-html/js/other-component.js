

// 

document.addEventListener("DOMContentLoaded", function () {
  contactForm();
  cardListing();
});

const contactForm = function(){
  document.getElementById("boatForm").addEventListener("submit", function (e) {
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
    alert("Form submitted successfully!");
    this.reset();
  }
});
}


// card boxes
const cardListing = function(){
const data = [
  {
    year: 2025,
    date: "19 MAY 2025",
    title: "Notice of upcoming works",
    image: "https://www.beaconmarinas.co.uk/media/t2ifd4ie/waterfront.jpg",
  },
  {
    year: 2023,
    date: "26 JULY 2023",
    title: "Ipswich awarded Five Gold Anchors",
    image: "https://www.beaconmarinas.co.uk/media/331ap2li/ipswich-home-2.png",
  },
  {
    year: 2024,
    date: "18 DECEMBER 2024",
    title: "Ipswich marina plans approved",
    image: "https://www.beaconmarinas.co.uk/media/t2ifd4ie/waterfront.jpg",
  },
  {
    year: 2024,
    date: "18 NOVEMBER 2024",
    title: "Ipswich marina plans take shape",
    image:
      "https://www.beaconmarinas.co.uk/media/qhyav1ck/ipswich_marina-concept-final-layout-v2_crop.jpg",
  },
  {
    year: 2024,
    date: "26 JULY 2024",
    title: "Ipswich awarded Five Gold Anchors",
    image: "https://www.beaconmarinas.co.uk/media/0fdlu5ou/image-2.jfif",
  },
];

const cardsContainer = document.querySelector(".filter-wrap #cards");
const filterButtons = document.querySelectorAll(".filter-links button");

const prevBtn = document.querySelector(".filter-wrap #prevBtn");
const nextBtn = document.querySelector(".filter-wrap #nextBtn");
const pageNumbers = document.querySelector(".filter-wrap #pageNumbers");

const ITEMS_PER_PAGE = 4;
let currentPage = 1;
let filteredData = [...data];

/* Render cards */
function renderCards(items) {
  cardsContainer.innerHTML = "";
  items.forEach((item) => {
    cardsContainer.innerHTML += `
                <div class="card">
                    <span class="card-img"><img src="${item.image}" alt=""></span>
                    <div class="card-content">
                    <span class="date">${item.date}</span>
                    <h3>${item.title}</h3>
                    <a href="#">Read full article →</a>
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
  pageNumbers.innerHTML = "";
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");

    btn.addEventListener("click", () => slideToPage(i));
    pageNumbers.appendChild(btn);
  }

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
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
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) slideToPage(currentPage - 1);
});

nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  if (currentPage < totalPages) slideToPage(currentPage + 1);
});

/* Year filter */
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

/* Init */
paginate();
}
