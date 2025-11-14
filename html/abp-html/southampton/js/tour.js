let isHovering = false;
let isMouseDown = false;
let hoverActive = false;
let hoverTimeout;

let baseHlookat = 0;
let baseVlookat = 0;
let targetHlookat = 0;
let targetVlookat = 0;


// DOM Content Loaded

document.addEventListener("DOMContentLoaded", function () {
  const panoElem = document.getElementById("pano");

  panoElem.addEventListener("mouseenter", () => {
    isHovering = true;
  });

  panoElem.addEventListener("mouseleave", () => {
    isHovering = false;
    hoverActive = false;
  });

  document.addEventListener("mousedown", () => {
    isMouseDown = true;
    hoverActive = false;
  });

  document.addEventListener("mouseup", () => {
    isMouseDown = false;
    const krpano = window.krpanoSWFObject;
    if (!krpano || !isHovering) return;

    hoverActive = false;
    if (hoverTimeout) clearTimeout(hoverTimeout);

    const waitForStability = () => {
      const currentH = krpano.get("view.hlookat");
      const currentV = krpano.get("view.vlookat");

      setTimeout(() => {
        const newH = krpano.get("view.hlookat");
        const newV = krpano.get("view.vlookat");

        if (Math.abs(newH - currentH) < 0.1 && Math.abs(newV - currentV) < 0.1) {
          baseHlookat = newH;
          baseVlookat = newV;
          targetHlookat = newH;
          targetVlookat = newV;

          hoverTimeout = setTimeout(() => {
            if (isHovering && !isMouseDown) {
              hoverActive = true;
            }
          }, 500);
        } else {
          waitForStability();
        }
      }, 50);
    };

    waitForStability();
  });

  // Utility function to check if the editor is active
  function isEditorActive() {
    const editor = document.getElementById('editor-wrapper');
    return editor && editor.classList.contains('active');
  }

  document.addEventListener("mousemove", (e) => {
    // Disable parallax if editor is active
    if (!hoverActive || isMouseDown || !window.krpanoSWFObject || isEditorActive()) return;

    const rect = panoElem.getBoundingClientRect();
    const offsetX = (e.clientX / rect.width - 0.5) * 2;
    const offsetY = (e.clientY / rect.height - 0.5) * 2;
    const strength = 5;

    targetHlookat = baseHlookat + offsetX * strength;
    targetVlookat = baseVlookat - offsetY * strength;
  });

  function applyParallax() {
    // Disable parallax if editor is active
    if (hoverActive && window.krpanoSWFObject && !isEditorActive()) {
      const krpano = window.krpanoSWFObject;
      const ease = 0.08;

      const h = krpano.get("view.hlookat");
      const v = krpano.get("view.vlookat");

      const newH = h + (targetHlookat - h) * ease;
      const newV = v + (targetVlookat - v) * ease;

      krpano.set("view.hlookat", newH);
      krpano.set("view.vlookat", newV);
    }

    requestAnimationFrame(applyParallax);
  }
  applyParallax();

  console.log("DOM loaded, attempting to embed pano...");
  embedpano({
    id: "krpanoSWFObject",
    xml: "tour.xml",
    target: "pano",
    html5: "only",
    consolelog: true,
    onready: function (krpano) {
      console.log("Krpano ready", krpano);
      window.krpanoSWFObject = krpano;

      // Set up update event first
      krpano.set("events.onloadcomplete", "js(updateSceneInfo(get(xml.scene)))");

      // Then initialise scene controls so window.krpanoScenes is ready
      initSceneNavigation(krpano);

      // Check for scene parameter in URL
      const urlParams = new URLSearchParams(window.location.hash.substring(1));
      const targetScene = urlParams.get('s');
      
      // Handle intro container and UI elements based on URL
      const introContainer = document.getElementById('intro-container');
      const uiElements = document.querySelectorAll('.ui');
      
      if (targetScene) {
        // Hide intro container if we're loading a specific scene
        if (introContainer) {
          introContainer.style.opacity = '0';
          setTimeout(() => {
            introContainer.style.display = 'none';
          }, 300); // Match transition time
        }
        // Show UI elements
        uiElements.forEach(el => el.style.display = 'block');
      } else {
        // Show intro container if no specific scene
        if (introContainer) {
          introContainer.style.display = 'flex';
          // Force reflow
          introContainer.offsetHeight;
          introContainer.style.opacity = '1';
        }
        // Hide UI elements
        uiElements.forEach(el => el.style.display = 'none');
      }
      
      if (targetScene) {
        // Verify the scene exists before loading
        const sceneExists = krpano.get(`scene[${targetScene}]`) !== null;
        if (sceneExists) {
          krpano.call(`loadscene(${targetScene}, null, MERGE, BLEND(1));`);
        } else {
          // If scene doesn't exist, load default splash screen
          krpano.call("loadscene(scene_aa_splash);");
        }
      } else {
        // No scene parameter, load default splash screen
        krpano.call("loadscene(scene_aa_splash);");
      }

      // Output scene XML to textarea
      outputSceneXMLToTextarea();
    }
  });

  const titleElem = document.getElementById("scene-title");
  const descContainer = document.getElementById("scene-description-container");
  const closeBtn = document.querySelector(".close-desc");

  // Title click â†’ show description, hide title
  if (titleElem && descContainer) {
    titleElem.addEventListener("click", () => {
      descContainer.classList.add("show");
      titleElem.style.display = "none";
    });
  }

  // Close button â†’ hide description, show title after animation
  if (closeBtn && descContainer && titleElem) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      descContainer.classList.remove("show");
      setTimeout(() => {
        titleElem.style.display = "block";
      }, 300); // Match transition time in CSS
    });
  }
});

// Function to update URL with current scene
function updateURLWithScene(sceneName) {
  if (!sceneName) return;
  
  // Don't update URL for the first scene to preserve clean initial load
  if (sceneName === 'scene_aa_splash') return;
  
  // Get current URL without hash
  const baseUrl = window.location.href.split('#')[0];
  // Create new URL with scene parameter
  const newUrl = `${baseUrl}#s=${sceneName}`;
  
  // Update URL without reloading the page - DISABLED to prevent browser back button navigation
  // window.history.pushState({ scene: sceneName }, '', newUrl);
}

// Update Scene
function updateSceneInfo(sceneName) {
  const krpano = window.krpanoSWFObject;
  if (!krpano || !krpano.get) return;

  const title = krpano.get(`scene[${sceneName}].title`);
  const description = krpano.get(`scene[${sceneName}].description`);

  const titleEl = document.getElementById("scene-title");
  const descEl = document.getElementById("scene-description");
  if (titleEl) titleEl.textContent = title || "";
  if (descEl) descEl.innerHTML = (description || "").replace(/&lt;br&gt;/g, '<br>');
  // Ensure <br> tags create visible line breaks
  descEl.style.marginBottom = '1em';
  descEl.style.lineHeight = '1.5';
  // Add a style to <br> tags to create a gap
  const brTags = descEl.getElementsByTagName('br');
  for (let i = 0; i < brTags.length; i++) {
    brTags[i].style.marginBottom = '1em';
  }

  // Update URL with current scene
  updateURLWithScene(sceneName);

  const tryUpdatePagination = () => {
    if (window.krpanoScenes && window.krpanoSceneRender && typeof window.krpanoSceneRender === 'function') {
      const index = window.krpanoScenes.findIndex(s => s.name === sceneName);
      if (index !== -1 && typeof window.setKrpanoCurrentIndex === 'function') {
        window.setKrpanoCurrentIndex(index);
        window.krpanoSceneRender();
        return;
      }
    }
    setTimeout(tryUpdatePagination, 50);
  };

  tryUpdatePagination();
  
  // Update scene XML output when scene changes
  outputSceneXMLToTextarea();
}

window.updateSceneInfo = updateSceneInfo;

// Scene Navigation and Controls

function initSceneNavigation(krpano) {
  const total = krpano.get("scene.count");
  const scenes = [];
  for (let i = 0; i < total; i++) {
    const name = krpano.get(`scene[${i}].name`);
    const title = krpano.get(`scene[${i}].title`) || name;
    const thumb = krpano.get(`scene[${i}].thumburl`) || "";
    scenes.push({ name, title, thumb });
  }
  window.krpanoScenes = scenes;
  buildSceneControls(scenes, krpano);
}

function buildSceneControls(scenes, krpano) {
  const dotsContainer = document.getElementById("scene-dots");
  const indexElem = document.getElementById("scene-index");
  const totalElem = document.getElementById("scene-total");
  const prevButton = document.querySelector(".-prev");
  const nextButton = document.querySelector(".-next");

  // If any of the required elements don't exist, return early
  if (!dotsContainer || !indexElem || !totalElem || !prevButton || !nextButton) {
    console.log('Scene controls elements not found, skipping scene controls initialization');
    return;
  }

  let currentIndex = 0;

  function render() {
    dotsContainer.innerHTML = "";
    totalElem.textContent = scenes.length;
    indexElem.textContent = currentIndex + 1;

    scenes.forEach((scene, i) => {
      const li = document.createElement("li");
      if (i === currentIndex) li.classList.add("active");

      const dot = document.createElement("div");
      dot.className = "dot";
      dot.dataset.panoId = scene.name;

      const hover = document.createElement("div");
      hover.className = "dot-hover";
      hover.innerHTML = `
        <div class="image__wrapper">
          <img src="${scene.thumb}" alt="${scene.title}" />
        </div>
        <p>${scene.title}</p>
      `;

      dot.addEventListener("click", () => {
        krpano.call(`loadscene(${scene.name}, null, MERGE, BLEND(1));`);
        currentIndex = i;
        render();
        updateSceneInfo(scenes[currentIndex].name);
      });

      li.appendChild(dot);
      li.appendChild(hover);
      dotsContainer.appendChild(li);
    });

    updateArrowHoverPreviews(scenes, currentIndex);
  }

  window.krpanoSceneRender = render;
  window.setKrpanoCurrentIndex = (i) => { currentIndex = i; };

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + scenes.length) % scenes.length;
    krpano.call(`loadscene(${scenes[currentIndex].name}, null, MERGE, BLEND(1));`);
    render();
    updateSceneInfo(scenes[currentIndex].name);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % scenes.length;
    krpano.call(`loadscene(${scenes[currentIndex].name}, null, MERGE, BLEND(1));`);
    render();
    updateSceneInfo(scenes[currentIndex].name);
  });

  render();
}

function updateArrowHoverPreviews(scenes, currentIndex) {
  const prevIndex = (currentIndex - 1 + scenes.length) % scenes.length;
  const nextIndex = (currentIndex + 1) % scenes.length;

  const prevHover = document.querySelector(".arrow-hover-prev");
  const nextHover = document.querySelector(".arrow-hover-next");

  if (prevHover && scenes[prevIndex]) {
    prevHover.innerHTML = `
      <div class="image__wrapper">
        <img src="${scenes[prevIndex].thumb}" alt="${scenes[prevIndex].title}" />
      </div>
      <p>${scenes[prevIndex].title}</p>
    `;
  }

  if (nextHover && scenes[nextIndex]) {
    nextHover.innerHTML = `
      <div class="image__wrapper">
        <img src="${scenes[nextIndex].thumb}" alt="${scenes[nextIndex].title}" />
      </div>
      <p>${scenes[nextIndex].title}</p>
    `;
  }
}

// New function specifically for outputting scene XML to textarea
function outputSceneXMLToTextarea() {
  const krpano = window.krpanoSWFObject;
  if (!krpano) {
    console.error('Krpano object not found');
    return;
  }

  // Get current scene name
  const currentScene = krpano.get('xml.scene');
  if (!currentScene) {
    return;
  }

  // Get all scene attributes
  const sceneAttributes = krpano.get(`scene[${currentScene}].attributes`);

  // Get scene content
  const sceneContent = krpano.get(`scene[${currentScene}].content`);

  // Get specific attributes we know we need
  const title = krpano.get(`scene[${currentScene}].title`);
  let description = krpano.get(`scene[${currentScene}].description`);
  const thumburl = krpano.get(`scene[${currentScene}].thumburl`);
  const lat = krpano.get(`scene[${currentScene}].lat`);
  const lng = krpano.get(`scene[${currentScene}].lng`);
  const alt = krpano.get(`scene[${currentScene}].alt`);
  const heading = krpano.get(`scene[${currentScene}].heading`);

  // Function to escape XML special characters
  function escapeXml(text) {
    if (!text) return '';
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  // Escape HTML entities in description
  if (description) {
    description = description
      .replace(/<br>/g, '&lt;br&gt;');
    description = escapeXml(description);
  }

  // Construct the complete scene XML
  let sceneXML = `<scene name="${currentScene}"`;
  
  // Add specific attributes we know about
  if (title) {
    const escapedTitle = escapeXml(title);
    sceneXML += ` title="${escapedTitle}"`;
  }
  if (description) sceneXML += ` description="${description}"`;
  if (thumburl) {
    const escapedThumburl = escapeXml(thumburl);
    sceneXML += ` thumburl="${escapedThumburl}"`;
  }
  if (lat) sceneXML += ` lat="${lat}"`;
  if (lng) sceneXML += ` lng="${lng}"`;
  if (alt) sceneXML += ` alt="${alt}"`;
  if (heading) sceneXML += ` heading="${heading}"`;
  
  // Add any other attributes from the attributes object
  if (sceneAttributes) {
    for (const [key, value] of Object.entries(sceneAttributes)) {
      // Skip attributes we've already added
      if (!['name', 'title', 'description', 'thumburl', 'lat', 'lng', 'alt', 'heading'].includes(key)) {
        const escapedValue = escapeXml(value);
        sceneXML += ` ${key}="${escapedValue}"`;
      }
    }
  }
  
  // Add content
  if (sceneContent) {
    sceneXML += `>\n${sceneContent}\n</scene>`;
  } else {
    sceneXML += ' />';
  }

  // Output to the new textarea
  const outputElement = document.getElementById('scene-xml-output-2');
  if (outputElement) {
    try {
      outputElement.value = sceneXML;
    } catch (error) {
      console.error('Error setting textarea value:', error);
    }
  } else {
    console.error('Output element #scene-xml-output-2 not found');
  }
}

// Prevent browser back/forward button navigation
window.addEventListener('popstate', function(event) {
  // Prevent the default browser back/forward behavior
  event.preventDefault();
  
  // Optionally, you can force the user to stay on the current scene
  // by pushing the current state back to the history
  const currentScene = window.krpanoSWFObject ? window.krpanoSWFObject.get('xml.scene') : 'scene_aa_splash';
  const baseUrl = window.location.href.split('#')[0];
  const currentUrl = `${baseUrl}#s=${currentScene}`;
  
  // Replace the current history entry to prevent navigation
  window.history.replaceState({ scene: currentScene }, '', currentUrl);
  
  console.log('Browser back/forward navigation disabled');
});



