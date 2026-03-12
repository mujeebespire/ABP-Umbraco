window.addEventListener("DOMContentLoaded", (event) => {
  const ports = document.querySelectorAll(`[id*="port"]`);
  const slides = document.getElementById("slides-container");
  const rightArrow = document.getElementById("arrow-right");
  const leftArrow = document.getElementById("arrow-left");
  const closeBtn = document.getElementById("close");
  gsap.set(slides, { autoAlpha: 0 });
  const allSlides = document.getElementsByClassName("slide");
  removeAllSlides();
  let names = [];
  let currSlide = 0;

  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      close(e);
    }
  });
  rightArrow.addEventListener("click", slideRight);
  leftArrow.addEventListener("click", slideLeft);
  closeBtn.addEventListener("click", close);
  slides.addEventListener("click", (event) => {
    console.log(event.target.classList.value);
    if (event.target.classList.value === "slide") {
      close();
    }
  });
  ports.forEach((port) => {
    names.push(port.id.slice(0, -5));
    gsap.set(port, { transformOrigin: "50% 50%" });
    port.style.cursor = "pointer";
    port.addEventListener("click", portClicked);
    port.addEventListener("mouseover", portOver);
    port.addEventListener("mouseout", portOut);
    startPulsing(port);
  });
  function startPulsing(port) {
    gsap.to(port, {
      scale: 1.2,
      duration: 1.5,
      onComplete: () => {
        endPulsing(port);
      },
      delay: gsap.utils.random(0, 0.5),
    });
  }
  function endPulsing(port) {
    gsap.to(port, {
      scale: 1,
      duration: 1.5,
      onComplete: () => {
        startPulsing(port);
      },
    });
  }
  gsap.fromTo(ports, { alpha: 0, scale: 0.5 }, { alpha: 1, scale: 1, stagger: 0.2, duration: 0.5 });
  function portClicked(e) {
    const name = e.target.parentNode.id.slice(0, -5);
    gsap.to(slides, { autoAlpha: 1 });
    const index = names.indexOf(name);
    currSlide = index;
    gsap.fromTo(allSlides[index], { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1 });
  }
  function portOver(e) {
    const port = e.target.parentNode;
    gsap.to(port, {
      scale: 1.2,
      duration: 0.5,
    });
  }
  function portOut(e) {
    const port = e.target.parentNode;
    gsap.to(port, {
      scale: 1,
    });
  }
  function close() {
    removeAllSlides();
    gsap.to(slides, { autoAlpha: 0 });
  }
  function removeAllSlides() {
    for (let slide of allSlides) {
      gsap.set(slide, { autoAlpha: 0, x: 0 });
    }
  }
  function slideRight() {
    if (currSlide < allSlides.length - 1) {
      for (let slide of allSlides) {
        gsap.to(slide, { autoAlpha: 0, scale: 0.8, x: -150 });
      }
      gsap.fromTo(
        allSlides[currSlide + 1],
        { autoAlpha: 0, scale: 0.8, x: +150 },
        {
          autoAlpha: 1,
          scale: 1,
          x: 0,
        }
      );
      currSlide = currSlide + 1;
    } else {
      for (let slide of allSlides) {
        gsap.to(slide, { autoAlpha: 0, scale: 0.8, x: -150 });
      }
      gsap.fromTo(
        allSlides[0],
        { autoAlpha: 0, scale: 0.8, x: +150 },
        {
          autoAlpha: 1,
          scale: 1,
          x: 0,
        }
      );
      currSlide = 0;
    }
  }
  function slideLeft() {
    if (currSlide > 0) {
      for (let slide of allSlides) {
        gsap.to(slide, { autoAlpha: 0, scale: 0.8, x: +150 });
      }
      gsap.fromTo(
        allSlides[currSlide - 1],
        { autoAlpha: 0, scale: 0.8, x: -150 },
        {
          autoAlpha: 1,
          scale: 1,
          x: 0,
          onComplete: () => {
            currSlide = currSlide - 1;
          },
        }
      );
    } else {
      for (let slide of allSlides) {
        gsap.to(slide, { autoAlpha: 0, scale: 0.8, x: +150 });
      }
      gsap.fromTo(
        allSlides[6],
        { autoAlpha: 0, scale: 0.8, x: -150 },
        {
          autoAlpha: 1,
          scale: 1,
          x: 0,
          onComplete: () => {
            currSlide = 6;
          },
        }
      );
    }
  }
});
