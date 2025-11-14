// Lightbox Load

function openInfoPopup(file) {
  const lightbox = document.querySelector(".lightbox");
  const container = document.querySelector(".lightbox-container");

  if (!lightbox || !container) {
    console.error("Lightbox structure not found in DOM.");
    return;
  }

  // Reset and show lightbox
  container.innerHTML = "Loading...";
  lightbox.style.opacity = 0;
  lightbox.style.display = "flex";
  requestAnimationFrame(() => {
    lightbox.style.transition = "opacity 0.4s ease";
    lightbox.style.opacity = 1;
  });

  // Load content
  fetch(`inline/info/${file}`)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${file}`);
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;
      // Initialize scroll functionality after content is loaded
      initializeLightboxScroll();
      // Handle image loading to prevent layout shift
      handleImageLoading();
    })
    .catch(err => {
      container.innerHTML = `<p>Error loading content: ${err.message}</p>`;
    });

  // Close logic
  function closeLightbox() {
    lightbox.style.opacity = 0;
    setTimeout(() => {
      lightbox.style.display = "none";
      container.innerHTML = "";
    }, 400);
  }

  // Clicking outside content closes lightbox
  lightbox.onclick = (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  };

  // Clicking close button closes lightbox
  const closeBtn = lightbox.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.onclick = closeLightbox;
    closeBtn.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
        closeLightbox();
      }
    };
  }
}

// Simple info popup function
function openInfoPopupSimple(file) {
  const lightbox = document.querySelector(".lightbox");
  const container = document.querySelector(".lightbox-container");

  if (!lightbox || !container) {
    console.error("Lightbox structure not found in DOM.");
    return;
  }

  // Add 'simple' class
  lightbox.classList.add("simple");

  // Reset and show lightbox
  container.innerHTML = "Loading...";
  lightbox.style.opacity = 0;
  lightbox.style.display = "flex";
  requestAnimationFrame(() => {
    lightbox.style.transition = "opacity 0.4s ease";
    lightbox.style.opacity = 1;
  });

  // Load content
  fetch(`inline/info/${file}`)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${file}`);
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;
      // Initialize scroll functionality after content is loaded
      initializeLightboxScroll();
      // Handle image loading to prevent layout shift
      handleImageLoading();
    })
    .catch(err => {
      container.innerHTML = `<p>Error loading content: ${err.message}</p>`;
    });

  // Close logic
  function closeLightbox() {
    lightbox.style.opacity = 0;
    setTimeout(() => {
      lightbox.style.display = "none";
      container.innerHTML = "";
      lightbox.classList.remove("simple"); // Remove 'simple' class on close
    }, 400);
  }

  // Clicking outside content closes lightbox
  lightbox.onclick = (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  };

  // Clicking close button closes lightbox
  const closeBtn = lightbox.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.onclick = closeLightbox;
    closeBtn.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
        closeLightbox();
      }
    };
  }
}

// Handle image loading to prevent layout shift
function handleImageLoading() {
  const lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;

  const images = lightbox.querySelectorAll('.image img');
  
  images.forEach(img => {
    // If image is already loaded (cached)
    if (img.complete && img.naturalHeight !== 0) {
      img.classList.add('loaded');
      // Stop loading animation on parent container
      const imageContainer = img.closest('.image');
      if (imageContainer) {
        imageContainer.style.animation = 'none';
        imageContainer.style.background = 'transparent';
      }
    } else {
      // Add load event listener
      img.addEventListener('load', function() {
        this.classList.add('loaded');
        // Stop loading animation on parent container
        const imageContainer = this.closest('.image');
        if (imageContainer) {
          imageContainer.style.animation = 'none';
          imageContainer.style.background = 'transparent';
        }
      });
      
      // Handle error case
      img.addEventListener('error', function() {
        this.style.display = 'none';
        // Remove loading animation from parent
        const imageContainer = this.closest('.image');
        if (imageContainer) {
          imageContainer.style.animation = 'none';
          imageContainer.style.background = '#f5f5f5';
        }
      });
    }
  });
}

// Initialize scroll functionality for lightbox content
function initializeLightboxScroll() {
  const lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;

  // Find the scroll container and button within the lightbox context
  const scrollDiv = lightbox.querySelector('.lightbox-scroll');
  const scrollButton = lightbox.querySelector('.scroll-down');
  
  if (!scrollDiv || !scrollButton) return;

  function checkScrollPosition() {
    const scrollHeight = scrollDiv.scrollHeight;
    const divHeight = scrollDiv.clientHeight;
    const currentScrollTop = scrollDiv.scrollTop;
    
    // Show/hide scroll button based on scroll position
    if (currentScrollTop + divHeight >= scrollHeight - 5 || scrollHeight <= divHeight) {
      scrollButton.style.display = 'none';
    } else {
      scrollButton.style.display = 'block';
    }
  }

  // Handle scroll button click
  scrollButton.addEventListener('click', function(e) {
    e.preventDefault();
    const currentScrollTop = scrollDiv.scrollTop;
    
    // Smooth scroll down by 200px
    scrollDiv.scrollTo({
      top: currentScrollTop + 200,
      behavior: 'smooth'
    });
  });

  // Handle scroll events on the container
  scrollDiv.addEventListener('scroll', checkScrollPosition);

  // Initial check
  checkScrollPosition();
  
  // Also check after a short delay to ensure content is fully rendered
  setTimeout(checkScrollPosition, 100);
}

// Expose functions to window and krpano
window.openInfoPopup = openInfoPopup;
window.openInfoPopupSimple = openInfoPopupSimple;

// Initialize lightbox when krpano is ready
if (window.krpanoSWFObject) {
  window.krpanoSWFObject.set("events.onloadcomplete", "js(console.log('Krpano ready, lightbox initialized'))");
}

