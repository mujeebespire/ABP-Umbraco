window.addEventListener("DOMContentLoaded", (event) => {
  //   HTML ELEMENTS

  const dotsContainer = document.getElementById("dots");
  const purpleCount = document.getElementById("purpleCount");
  const greenCount = document.getElementById("greenCount");
  const slider = document.getElementById("myRange");
  const purpleCircle = document.getElementById("purple");
  const greenCircle = document.getElementById("green");
  const yearTxt = document.getElementById("year");
  const greenCircleAbsolute = document.getElementsByClassName("green-circle-absolute");
  const circles = document.getElementsByClassName("circles");
  const greenContainer = document.getElementById("greenContainer");
  const purpleCirclesContainer = document.getElementById("purpleCirclesContainer");
  const purpleCircleContainer = document.getElementById("purpleCircleContainer");
  const greenCirclesContainer = document.getElementById("greenCirclesContainer");
  const headerTxts = document.querySelectorAll("header p");
  const purpleTitle = document.getElementById("purpleTitle");
  for (let p of headerTxts) {
    gsap.set(p, { alpha: 0 });
  }
  headerTxts[0].style.display = "block";
  gsap.to(headerTxts[0], { alpha: 1, duration: 0.5 });
  //  JAVASCRIPT VARIABLES

  const purpleCounter = { val: 0 };
  const greenCounter = { val: 0 };
  let greenMin = 0;
  let greenMax = 0;
  let purpleMax = 0;
  let purpleMin = 0;
  let value = 0;
  let year = "2022";
  let years = [];
  let dots = [];
  let greenTxtPlaying = false;
  let purpleActive = false;
  let isGreen = false;
  let isPurple = false;
  gsap.set(greenCircleAbsolute[0], { alpha: 0 });

  //  EVENT LISTENERS
  window.addEventListener("keyup", keyClicked);
  purpleCircleContainer.addEventListener("click", onPurpleCircleOpen);
  greenContainer.addEventListener("click", onGreenCircleOpen);

  // CLOSE FUNCTION
  function keyClicked(e) {
    if (e.key === "Escape") {
      closeCircles(e);
    }
  }
  function closeCircles(e) {
    if (isGreen) {
      onGreenCircleClose();
    }
    if (isPurple) {
      onPurpleCircleClose();
    }
  }
  // PURPLE FUNCTIONS

  function onPurpleCircleOpen() {
    isPurple = !isPurple;
    gsap.to(headerTxts[0], {
      alpha: 0,
      duration: 0.5,
      onComplete: () => {
        headerTxts[0].style.display = "none";
        headerTxts[1].style.display = "block";
        gsap.to(headerTxts[1], { alpha: 1, duration: 0.5 });
      },
    });

    purpleCircleContainer.removeEventListener("click", onPurpleCircleOpen);
    greenContainer.removeEventListener("click", onGreenCircleOpen);
    window.removeEventListener("keyup", keyClicked);
    gsap.to(purpleCircleContainer, 1.2, {
      right: "-20%",
      onComplete: function () {
        purpleCircleContainer.addEventListener("click", onPurpleCircleClose);
        window.addEventListener("keyup", keyClicked);
        circles[0].addEventListener("click", closeCircles);
        circles[0].style.cursor = "url('./close.svg'), auto";
      },
    });
    gsap.to(greenContainer, 0.4, { alpha: 0 });
    gsap.set(purpleCirclesContainer, { opacity: 0, display: "flex" });
    gsap.to(purpleCirclesContainer, 1, { opacity: 1, display: "flex" });
    const yearArr = years.filter((el) => el.year === year);
    for (const [key, value] of Object.entries(yearArr[0].purple)) {
      if (key !== "total") {
        const fieldName = "purple-" + key + "-txt";
        const textFieled = document.getElementById(fieldName);
        textFieled.innerText = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
    gsap.set(".purple-devision", { scale: 0 });
    gsap.fromTo(
      ".purple-devision",
      0.4,
      { scale: 0 },
      {
        scale: function (index, target) {
          const name = target.id.replaceAll("purple-", "");
          const scale = Math.round(Number(yearArr[0].purple[name])) / Math.round(Number(years[0].purple.total));
          return scale + 0.2;
        },
        stagger: 0.2,
      }
    );
    gsap.set(".text-top-purple", { alpha: 0 });
    gsap.fromTo(
      ".text-top-purple",
      1,
      { alpha: 0, top: -60 },
      {
        alpha: 1,
        top: -40,
        stagger: 0.4,
      }
    );
    gsap.fromTo(
      ".text-bottom-purple",
      1,
      { alpha: 0, top: 110 },
      {
        alpha: 1,
        top: 90,
        stagger: 0.4,
      }
    );
  }
  function onPurpleCircleClose() {
    isPurple = !isPurple;
    circles[0].removeEventListener("click", closeCircles);
    circles[0].style.cursor = "default";
    gsap.to(headerTxts[1], {
      alpha: 0,
      duration: 0.5,
      onComplete: () => {
        headerTxts[1].style.display = "none";
        headerTxts[0].style.display = "block";
        gsap.to(headerTxts[0], { alpha: 1, duration: 0.5 });
      },
    });
    purpleCircleContainer.removeEventListener("click", onPurpleCircleClose);
    gsap.to(purpleCircleContainer, 1.2, {
      right: "0%",
      onComplete: function () {
        purpleCircleContainer.addEventListener("click", onPurpleCircleOpen);
        greenContainer.addEventListener("click", onGreenCircleOpen);
      },
    });
    gsap.to(purpleCirclesContainer, 1, { opacity: 0 });
    gsap.to(greenContainer, 1, { alpha: 1, delay: 0.6 });
    gsap.to(".purple-devision", 0.4, {
      scale: 0,
      stagger: -0.2,
    });
    gsap.to(".text-top-purple", 0.5, {
      alpha: 1,
    });
    gsap.to(".text-bottom-purple", 0.5, {
      alpha: 0,
    });
  }

  //  GREEN FUNCTIONS

  function onGreenCircleOpen() {
    isGreen = !isGreen;
    gsap.to(headerTxts[0], {
      alpha: 0,
      duration: 0.5,
      onComplete: () => {
        headerTxts[0].style.display = "none";
        headerTxts[2].style.display = "block";
        gsap.to(headerTxts[2], { alpha: 1, duration: 0.5 });
      },
    });

    greenContainer.removeEventListener("click", onGreenCircleOpen);
    purpleCircleContainer.removeEventListener("click", onPurpleCircleOpen);
    window.removeEventListener("keyup", keyClicked);
    gsap.to(greenContainer, 1.2, {
      left: "60%",
      onComplete: function () {
        greenContainer.addEventListener("click", onGreenCircleClose);
        window.addEventListener("keyup", keyClicked);
        circles[0].addEventListener("click", closeCircles);
        circles[0].style.cursor = "url('./close.svg'), auto";
      },
    });
    gsap.to(purpleCircleContainer, 0.4, { alpha: 0 });
    gsap.set(greenCirclesContainer, { opacity: 0, display: "flex" });
    gsap.to(greenCirclesContainer, 1, { opacity: 1, display: "flex" });
    const yearArr = years.filter((el) => el.year === year);
    for (const [key, value] of Object.entries(yearArr[0].green)) {
      if (key !== "total") {
        const fieldName = "green-" + key + "-txt";
        const textFieled = document.getElementById(fieldName);
        textFieled.innerText = "Â£" + value + "m";
      }
    }
    gsap.set(".green-devision", { scale: 0 });
    gsap.fromTo(
      ".green-devision",
      0.4,
      { scale: 0 },
      {
        scale: (index, target) => {
          const name = target.id.replaceAll("green-", "");
          const scale = yearArr[0].green[name] / years[years.length - 1].green.total;
          if (scale * 2 < 0.005) {
            return scale * 2 + 0.1;
          }
          return scale * 2 + 0.3;
        },
        stagger: 0.2,
      }
    );
    gsap.set(".text-top-green", { alpha: 0 });
    gsap.fromTo(
      ".text-top-green",
      1,
      { alpha: 0, top: -60 },
      {
        alpha: 1,
        top: -40,
        stagger: 0.4,
      }
    );
    gsap.fromTo(
      ".text-bottom-green",
      1,
      { alpha: 0, top: 120 },
      {
        alpha: 1,
        top: 100,
        stagger: 0.4,
      }
    );
  }
  function onGreenCircleClose() {
    isGreen = !isGreen;
    circles[0].removeEventListener("click", closeCircles);
    circles[0].style.cursor = "default";
    gsap.to(headerTxts[2], {
      alpha: 0,
      duration: 0.5,
      onComplete: () => {
        headerTxts[2].style.display = "none";
        headerTxts[0].style.display = "block";
        gsap.to(headerTxts[0], { alpha: 1, duration: 0.5 });
      },
    });

    greenContainer.removeEventListener("click", onGreenCircleClose);
    gsap.to(greenContainer, 1.2, {
      left: "0%",
      onComplete: function () {
        greenContainer.addEventListener("click", onGreenCircleOpen);
        purpleCircleContainer.addEventListener("click", onPurpleCircleOpen);
      },
    });
    gsap.to(greenCirclesContainer, 1, { opacity: 0 });
    gsap.to(purpleCircleContainer, 1, { alpha: 1, delay: 0.6 });
    gsap.to(".green-devision", 0.4, {
      scale: 0,
      stagger: -0.2,
    });
    gsap.to(".text-top-green", 0.5, {
      alpha: 1,
    });
    gsap.to(".text-bottom-green", 0.5, {
      alpha: 0,
    });
  }

  //  ON SLIDER INPUT

  slider.oninput = function () {
    year = this.value;
    value = ((this.value - this.min) / (this.max - this.min)) * 100;
    this.style.background = "linear-gradient(to right, #126942 0%, #126942 " + value + "%, #5ACCC1 " + value + "%, #5ACCC1 100%)";
    let dotIndex = dots.length - (slider.max - slider.value) - 1;
    for (let i = 0; i < dots.length; i++) {
      if (i > dotIndex) {
        dots[i].style.background = "#BCBEC0";
      } else {
        dots[i].style.background = "#126942";
      }
    }
    yearTxt.innerText = this.value;
    if (this.value > 2022) {
      gsap.to(greenCircleAbsolute[0], 1.2, { alpha: 1 });
    } else {
      gsap.to(greenCircleAbsolute[0], 1.2, { alpha: 0 });
    }
    if (this.value > "2029") {
      gsap.to(greenCount, 1.2, { marginTop: "-230px", color: "white", zIndex: 99 });
    }
    if (this.value < "2028") {
      gsap.to(greenCount, 1.2, { marginTop: "0", color: "#00A39B", zIndex: 99 });
    }
    const yearArr = years.filter((year) => year.year === this.value);
    const purpleScale = Math.round(Number(yearArr[0].purple.total)) / Math.round(Number(years[0].purple.total));
    const greenScale = 1 + Math.round(Number(yearArr[0].green.total)) / Math.round(Number(years[years.length - 1].green.total)) - 0.097;
    if (slider.max === slider.value) {
      gsap.to(purpleTitle, { alpha: 0, duration: 0.5, delay: 0.5 });
    } else {
      gsap.to(purpleTitle, { alpha: 1, duration: 0.5 });
    }
    gsap.to(purpleCounter, 0.8, {
      val: Number(yearArr[0].purple.total),
      onUpdate: function () {
        const num = String(Math.round(purpleCounter.val)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        purpleCount.innerText = num;
        console.log('update purple number')
      },
      onComplete: () => {
        if (slider.max === slider.value) {
          purpleCount.innerText = "NET ZERO";
        }
      },
      ease: Power4.easeOut,
    });
    gsap.to(greenCounter, 0.8, {
      val: Number(yearArr[0].green.total),
      onUpdate: function () {
        greenCount.innerText = `Â£${greenCounter.val.toFixed(1)}m`;
      },
      ease: Power4.easeOut,
    });
    if (value === 0) {
      gsap.to(purpleCircle, 0.8, { scale: 1.2, ease: Back.easeOut });
      gsap.to(greenCircle, 0.8, { scale: 1, ease: Back.easeOut });
    } else {
      gsap.to(purpleCircle, 0.8, { scale: purpleScale + 0.2, ease: Back.easeOut });
      gsap.to(greenCircle, 0.8, { scale: greenScale + greenScale * 0.2, ease: Back.easeOut });
    }
    // green circles animations
    if (isGreen) {
      for (const [key, objValue] of Object.entries(yearArr[0].green)) {
        if (key !== "total") {
          const fieldName = "green-" + key + "-txt";
          const textFieled = document.getElementById(fieldName);
          textFieled.innerText = "Â£" + objValue + "m";
        }
      }
      gsap.to(".green-devision", 0.4, {
        scale: (index, target) => {
          const name = target.id.replaceAll("green-", "");
          const scale = yearArr[0].green[name] / years[years.length - 1].green.total;
          if (scale * 2 < 0.005) {
            return scale * 2 + 0.1;
          }
          return scale * 2 + 0.3;
        },
        stagger: 0.02,
      });
    }

    // purlpe circes animations
    if (isPurple) {
      for (const [key, objValue] of Object.entries(yearArr[0].purple)) {
        if (key !== "total") {
          const fieldName = "purple-" + key + "-txt";
          const textFieled = document.getElementById(fieldName);
          textFieled.innerText = objValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      }
      gsap.to(".purple-devision", 0.4, {
        scale: function (index, target) {
          const name = target.id.replaceAll("purple-", "");
          const scale = Math.round(Number(yearArr[0].purple[name])) / Math.round(Number(years[0].purple.total));
          return scale + 0.2;
        },
      });
    }
  };

  // FETCH JSON

  fetch("data-new.json")
    .then((response) => response.json())
    .then((json) => {
      years = json.years;
      purpleCount.innerText = years[0].purple.total.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      greenCount.innerText = `Â£${years[0].green.total}m`;
      for (let i = 0; i < json.years.length; i++) {
        const dot = document.createElement("div");
        dot.style.width = "10px";
        dot.style.height = "10px";
        if (i === 0) {
          dot.style.background = "#126942";
        } else {
          dot.style.background = "#BCBEC0";
        }
        dot.style.borderRadius = "50%";
        dots.push(dot);
        dotsContainer.appendChild(dot);
      }
    });
});