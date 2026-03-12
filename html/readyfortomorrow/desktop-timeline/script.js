window.addEventListener("DOMContentLoaded", (event) => {
  const slider = document.getElementById("myRange");
  const white = document.getElementById("white");
  const mask = document.getElementById("mask");
  const closeBtns = document.getElementsByClassName("close-button");
  const slides = document.getElementsByClassName("slide");
  const dotsContainer = document.getElementById("dots");
  const controlLeft = document.getElementById("controlLeft");
  const controlRight = document.getElementById("controlRight");
  const title = document.getElementById("title");
  const years = document.getElementsByTagName("text");

  let slidesActive = false;
  let sliderOld = 1;
  let myTimeout;
  let myTimeoutPulse;
  let r = document.querySelector(":root");
  let icons = [];
  let bgArr = [];
  let titles = [];
  let pulse = true;
  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape" && slidesActive) {
      close(e);
    }
  });
  controlLeft.addEventListener("click", () => {
    sliderOld === 1 ? null : next(sliderOld - 1);
    setSliderValue(sliderOld);
  });
  controlRight.addEventListener("click", (event) => {
    sliderOld === 18 ? null : next(sliderOld + 1);
    setSliderValue(sliderOld);
  });
  hideAllYears();
  for (let button of closeBtns) {
    button.addEventListener("click", close);
  }
  for (let slide of slides) {
    slide.addEventListener("click", close);
    const images = slide.getElementsByTagName("img");
    for (let image of images) {
      gsap.set(image, { alpha: 0 });
    }
    const txt = slide.getElementsByClassName("text-cyan");
    titles.push(txt[0].innerHTML);
  }

  for (let i = 1; i <= 18; i++) {
    const icon = document.querySelector("#Icon" + i);
    const bg = document.querySelector("#Bg" + i);
    gsap.set(bg, { alpha: 0 });
    icon.addEventListener("click", onIconClicked);
    icon.style.cursor = "pointer";
    gsap.set(icon, { transformOrigin: "50% 50% 0", scale: 1 });
    gsap.set(bg, { transformOrigin: "50% 50% 0", scale: 1 });
    icons.push(icon);
    bgArr.push(bg);
  }
  bgArr.forEach((circle) => {
    startPulse(circle);
  });

  function startPulse(circle) {
    if (pulse) {
      gsap.to(circle, {
        alpha: 0.3,
        scale: 1,
        duration: 1,
        onComplete: () => {
          endPulse(circle);
        },
        delay: gsap.utils.random(0, 1),
      });
    }
  }
  function endPulse(circle) {
    if (pulse) {
      gsap.to(circle, {
        alpha: 0,
        scale: 0.5,
        duration: 1,
        onComplete: () => {
          startPulse(circle);
        },
        ease: Power1.easeIn,
      });
    }
  }

  for (let i = 0; i < 18; i++) {
    const dot = document.createElement("div");
    dot.style.width = "9px";
    dot.style.height = "9px";
    dot.style.background = "#ffffff";
    dot.style.borderRadius = "50%";
    dotsContainer.appendChild(dot);
  }
  gsap.set(mask, { width: "0%" });
  var event = new Event("input", {
    bubbles: true,
    cancelable: true,
    value: 18,
  });

  slider.dispatchEvent(event);
  slider.oninput = function (val) {
    sliderMoved(val.target.value);
  };

  // SLIDER MOVE

  function sliderMoved(val) {
    pulse = false;
    let percent = Math.round(val / 5.5);
    animateIcons(val);
    gsap.set(mask, { width: val + "%" });
    slider.style.background = "linear-gradient(to right, #126942 0%, #126942 " + val + "%, #5ACCC1 " + val + "%, #5ACCC1 100%)";
    if (percent < 1) {
      percent = 1;
    }
    r.style.setProperty("--slider-thumb-img", `url('./assets/ship/thumb${percent}.svg')`);
    clearTimeout(myTimeout);
    myTimeout = setTimeout(() => {
      if (slidesActive) {
        next(percent);
      }
    }, 500);
    clearTimeout(myTimeoutPulse);
    myTimeoutPulse = setTimeout(() => {
      pulse = true;
      bgArr.forEach((circle) => {
        startPulse(circle);
      });
    }, 2000);
  }

  // ANIMATE ICONS

  function animateIcons(value) {
    if (value < 5) {
      scaleDownAll();
      hideAllYears();
      title.innerHTML = "";
      for (let i = 0; i < years.length; i++) {
        gsap.to(years[i], { scale: 0.8, alpha: 0 });
      }
    } else if (value > 5 && value < 11) {
      scaleDownAll();
      gsap.to(icons[0], 0.5, { scale: 1.5 });
      gsap.to(bgArr[0], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[0];
      for (let i = 0; i < years.length; i++) {
        if (i > 0) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 11 && value < 15) {
      scaleDownAll();
      gsap.to(icons[1], 0.5, { scale: 1.5 });
      gsap.to(bgArr[1], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[1];
      for (let i = 0; i < years.length; i++) {
        if (i > 1) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 15 && value < 22) {
      scaleDownAll();
      gsap.to(icons[2], 0.5, { scale: 1.5 });
      gsap.to(bgArr[2], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[2];
      for (let i = 0; i < years.length; i++) {
        if (i > 2) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 22 && value < 28) {
      scaleDownAll();
      gsap.to(icons[3], 0.5, { scale: 1.5 });
      gsap.to(bgArr[3], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[3];
      for (let i = 0; i < years.length; i++) {
        if (i > 3) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 28 && value < 32) {
      scaleDownAll();
      gsap.to(icons[4], 0.5, { scale: 1.5 });
      gsap.to(bgArr[4], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[4];
      for (let i = 0; i < years.length; i++) {
        if (i > 4) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 32 && value < 36) {
      scaleDownAll();
      gsap.to(icons[5], 0.5, { scale: 1.5 });
      gsap.to(bgArr[5], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[5];
      for (let i = 0; i < years.length; i++) {
        if (i > 4) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 36 && value < 41) {
      scaleDownAll();
      gsap.to(icons[6], 0.5, { scale: 1.5 });
      gsap.to(bgArr[6], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[6];
      for (let i = 0; i < years.length; i++) {
        if (i > 4) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 41 && value < 44) {
      scaleDownAll();
      gsap.to(icons[7], 0.5, { scale: 1.5 });
      gsap.to(bgArr[7], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[7];
      for (let i = 0; i < years.length; i++) {
        if (i > 4) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 44 && value < 49) {
      scaleDownAll();
      gsap.to(icons[8], 0.5, { scale: 1.5 });
      gsap.to(bgArr[8], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[8];
      for (let i = 0; i < years.length; i++) {
        if (i > 4) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 49 && value < 53) {
      scaleDownAll();
      gsap.to(icons[9], 0.5, { scale: 1.5 });
      gsap.to(bgArr[9], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[9];
      for (let i = 0; i < years.length; i++) {
        if (i > 5) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 53 && value < 58) {
      scaleDownAll();
      gsap.to(icons[10], 0.5, { scale: 1.5 });
      gsap.to(bgArr[10], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[10];
      for (let i = 0; i < years.length; i++) {
        if (i > 5) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 58 && value < 61) {
      scaleDownAll();
      gsap.to(icons[11], 0.5, { scale: 1.5 });
      gsap.to(bgArr[11], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[11];
      for (let i = 0; i < years.length; i++) {
        if (i > 5) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 61 && value < 66) {
      scaleDownAll();
      gsap.to(icons[12], 0.5, { scale: 1.5 });
      gsap.to(bgArr[12], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[12];
      for (let i = 0; i < years.length; i++) {
        if (i > 5) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 66 && value < 69) {
      scaleDownAll();
      gsap.to(icons[13], 0.5, { scale: 1.5 });
      gsap.to(bgArr[13], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[13];
      for (let i = 0; i < years.length; i++) {
        if (i > 5) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 69 && value < 76) {
      scaleDownAll();
      gsap.to(icons[14], 0.5, { scale: 1.5 });
      gsap.to(bgArr[14], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[14];
      for (let i = 0; i < years.length; i++) {
        if (i > 6) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 76 && value < 79) {
      scaleDownAll();
      gsap.to(icons[15], 0.5, { scale: 1.5 });
      gsap.to(bgArr[15], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[15];
      for (let i = 0; i < years.length; i++) {
        if (i > 6) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 79 && value < 86) {
      scaleDownAll();
      gsap.to(icons[16], 0.5, { scale: 1.5 });
      gsap.to(bgArr[16], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[16];
      for (let i = 0; i < years.length; i++) {
        if (i > 6) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    } else if (value > 86) {
      scaleDownAll();
      gsap.to(icons[17], 0.5, { scale: 1.5 });
      gsap.to(bgArr[17], 0.5, { scale: 1, alpha: 1 });
      title.innerHTML = titles[17];
      for (let i = 0; i < years.length; i++) {
        if (i > 7) {
          gsap.to(years[i], { scale: 0.8, alpha: 0 });
        } else {
          gsap.to(years[i], { scale: 1, alpha: 1 });
        }
      }
    }
  }

  // SCALE DOWN

  function scaleDownAll() {
    icons.forEach((element) => {
      gsap.to(element, 0.5, { scale: 1 });
    });
    bgArr.forEach((element) => {
      gsap.to(element, 0.5, { scale: 0.8, alpha: 0 });
    });
  }

  // ON ICON CLICKED

  function onIconClicked(e) {
    document.addEventListener("mousemove", changeCursor);
    const iconNum = Number(e.target.parentNode.id.replace("Icon", "")) - 1;
    animateSlide(slides[iconNum]);
    slides[iconNum].style.visibility = "visible";
    controlLeft.style.visibility = "visible";
    controlRight.style.visibility = "visible";
    white.style.visibility = "visible";
    setSliderValue(iconNum);
    sliderOld = iconNum + 1;
    gsap.fromTo(
      slides[iconNum],
      { opacity: 0, scale: 0.9, left: "60%" },
      {
        opacity: 1,
        scale: 1,
        left: "50%",
        duration: 0.5,
        onComplete: () => {
          slidesActive = true;
        },
      }
    );
    gsap.fromTo(white, { opacity: 0 }, { opacity: 1, duration: 0.5 });
  }

  // SET SLIDER VALUE

  function setSliderValue(value) {
    let percent = value * 5.5;
    slider.value = Math.round(percent);
    gsap.set(mask, { width: percent + "%" });
    slider.style.background = "linear-gradient(to right, #126942 0%, #126942 " + percent + "%, #5ACCC1 " + percent + "%, #5ACCC1 100%)";

    const thumbNum = value === 0 ? 1 : value;
    r.style.setProperty("--slider-thumb-img", `url('./assets/ship/thumb${thumbNum}.svg')`);
  }

  // CLOSE

  function close(e) {
    console.log(e);
    if (e.key === "Escape" || e.target.classList.contains("slide") || e.target.classList.contains("close-button") || e.target.classList.contains("close-img")) {
      document.removeEventListener("mousemove", changeCursor);
      controlLeft.style.visibility = "hidden";
      controlRight.style.visibility = "hidden";
      document.body.style.cursor = "default";
      for (let slide of slides) {
        if (slide.style.visibility === "visible") {
          gsap.to(slide, {
            opacity: 0,
            duration: 0.5,
            scale: 0.9,
            left: "40%",
            onComplete: () => {
              slide.style.visibility = "hidden";
              white.style.visibility = "hidden";

              slidesActive = false;
            },
          });
          gsap.to(white, { opacity: 0 });
        }
      }
    }
  }

  // NEXT

  function next(slideID) {
    let currSlide;
    let nextSlide;
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].style.visibility === "visible") {
        currSlide = slides[i];
        break;
      }
    }
    nextSlide = document.getElementById("slide" + slideID);
    console.log(sliderOld, slideID);
    animateSlide(nextSlide);
    if (sliderOld < slideID) {
      gsap.to(currSlide, {
        opacity: 0,
        duration: 0.5,
        scale: 0.9,
        left: "40%",
        onComplete: () => {
          currSlide.style.visibility = "hidden";
        },
      });
      nextSlide.style.visibility = "visible";
      gsap.fromTo(
        nextSlide,
        { opacity: 0, scale: 0.9, left: "60%" },
        {
          opacity: 1,
          scale: 1,
          left: "50%",
          delay: 0.2,
          duration: 0.5,
        }
      );
    } else {
      gsap.to(currSlide, {
        opacity: 0,
        duration: 0.5,
        scale: 0.9,
        left: "60%",
        onComplete: () => {
          currSlide.style.visibility = "hidden";
        },
      });
      nextSlide.style.visibility = "visible";
      gsap.fromTo(
        nextSlide,
        { opacity: 0, scale: 0.9, left: "40%" },
        {
          opacity: 1,
          scale: 1,
          left: "50%",
          delay: 0.2,
          duration: 0.5,
        }
      );
    }
    sliderOld = slideID;
  }

  // CHANGE CURSO

  function changeCursor(e) {
    console.log(e.target.classList);
    if (e.target.classList.contains("slide") || e.target.classList.contains("close-button") || e.target.classList.contains("close-img")) {
      document.body.style.cursor = "url('./close.svg'), auto";
      console.log("X");
    } else {
      document.body.style.cursor = "default";
      console.log("D");
    }
  }

  // ANIMATE SLIDE

  function animateSlide(nextSlide) {
    const images = nextSlide.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      gsap.set(images[i], { alpha: 1 });
      const className = images[i].className;
      if (className === "start") {
        gsap.from(images[i], { alpha: 0, scale: 0.9, left: "-5%", delay: 0.5, duration: 1 });
      }
      if (className === "middle") {
        gsap.from(images[i], { alpha: 0, scale: 0.6, bottom: "0%", duration: 1 });
      }
      if (className === "end") {
        gsap.from(images[i], { alpha: 0, scale: 0.9, right: "-5%", delay: 0.5, duration: 1 });
      }
    }
  }

  function hideAllYears() {
    for (let year of years) {
      gsap.set(year, { transformOrigin: "50% 50% 0", scale: 0.8, alpha: 0 });
    }
  }
});
