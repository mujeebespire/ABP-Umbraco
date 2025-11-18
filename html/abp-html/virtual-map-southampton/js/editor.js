// Virtual Tour Editor

// Global variables
let hotspotEditMode = false;
let hotspotAddMode = false;
let isDragging = false;
let draggedHotspot = null;
let dragStartX = 0;
let dragStartY = 0;
let dragStartAth = 0;
let dragStartAtv = 0;

// Global functions for hotspot drag handling
function handleHotspotDragStart(hotspotName) {
  const krpano = window.krpanoSWFObject;
  if (!krpano) return;

  const hotspot = krpano.get(`hotspot[${hotspotName}]`);
  if (!hotspot) return;

  isDragging = true;
  draggedHotspot = hotspotName;
  dragStartAth = hotspot.ath;
  dragStartAtv = hotspot.atv;
}

function handleHotspotDragEnd(hotspotName) {
  const krpano = window.krpanoSWFObject;
  if (!krpano) return;

  const hotspot = krpano.get(`hotspot[${hotspotName}]`);
  if (!hotspot) return;

  isDragging = false;
  draggedHotspot = null;
  const finalAth = hotspot.ath;
  const finalAtv = hotspot.atv;

  // Get fresh data from XML to ensure we have all attributes
  const hotspotData = getHotspotDataFromXML(hotspotName);
  if (hotspotData) {
    // Update the coordinates
    hotspotData.ath = finalAth;
    hotspotData.atv = finalAtv;
    
    // Store the updated data
    originalHotspotData.set(hotspotName, hotspotData);
    
    // Update XML output with new position
    const xmlString = generateHotspotXML(hotspotData);
    updateXMLOutput(xmlString);
  }
}

// Add mousemove handler for dragging
document.addEventListener('mousemove', function(e) {
  if (!isDragging || !draggedHotspot || !hotspotEditMode) {
    return;
  }

  const krpano = window.krpanoSWFObject;
  if (!krpano) {
    return;
  }

  // Calculate new position
  const rect = document.getElementById('pano').getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Convert screen coordinates to sphere coordinates
  krpano.call(`screentosphere(${x}, ${y}, ath, atv);`);
  const newAth = krpano.get("ath");
  const newAtv = krpano.get("atv");

  // Update hotspot position
  krpano.set(`hotspot[${draggedHotspot}].ath`, newAth);
  krpano.set(`hotspot[${draggedHotspot}].atv`, newAtv);
});

let spotStyles = [
  "spot_link_scene",
  "spot_link_bubble",
  "hs_circle",
  "hs_info",
  "hs_info_simple"
];
let savedSceneData = {
  info: null,
  view: null,
  hotspots: []
};
let originalSceneXML = null;
let originalHotspotData = new Map();

// Create cursor overlay element
const cursorOverlay = document.createElement('div');
cursorOverlay.id = 'cursor-overlay';
document.body.appendChild(cursorOverlay);

// Add mousemove handler for cursor overlay
document.addEventListener('mousemove', function(e) {
  if (cursorOverlay && hotspotEditMode) {
    cursorOverlay.style.left = (e.clientX - 20) + 'px';
    cursorOverlay.style.top = (e.clientY - 20) + 'px';
  }
});

// Function to load spot styles from tour.xml
function loadSpotStyles() {
  const krpano = window.krpanoSWFObject;
  if (!krpano) return;
  const styleCount = krpano.get("style.count");
  spotStyles = [];

  for (let i = 0; i < styleCount; i++) {
    const name = krpano.get(`style[${i}].name`);
    if (name && name.startsWith('spot_')) {
      spotStyles.push(name);
    }
  }
}

// Function to get scene thumbnail URL
function getSceneThumbUrl(sceneName) {
  const krpano = window.krpanoSWFObject;
  return krpano.get(`scene[${sceneName}].thumburl`);
}

const panoElem = document.getElementById('pano');
const toggleAddHotspot = document.getElementById("toggle-add-hotspot");
const editorWrapper = document.getElementById('editor-wrapper');

function updateHotspotCursor() {
  if (
    editorWrapper.classList.contains('active') &&
    (toggleAddHotspot.classList.contains('active') || document.getElementById('toggle-edit-hotspot').classList.contains('active'))
  ) {
    panoElem.classList.add('hotspot-cursor');
  } else {
    panoElem.classList.remove('hotspot-cursor');
  }
}

function updateHotspotBehaviors() {
  const krpano = window.krpanoSWFObject;
  if (!krpano) return;

  // Get all hotspots
  const hotspotCount = krpano.get("hotspot.count");
  for (let i = 0; i < hotspotCount; i++) {
    const name = krpano.get(`hotspot[${i}].name`);

    if (hotspotEditMode) {
      // Store original data before modifying
      if (!originalHotspotData.has(name)) {
        const originalData = {
          onclick: krpano.get(`hotspot[${i}].onclick`),
          onclick2: krpano.get(`hotspot[${i}].onclick2`),
          onover: krpano.get(`hotspot[${i}].onover`),
          onout: krpano.get(`hotspot[${i}].onout`),
          ondown: krpano.get(`hotspot[${i}].ondown`),
          onup: krpano.get(`hotspot[${i}].onup`),
          linkedscene: krpano.get(`hotspot[${i}].linkedscene`),
          style: krpano.get(`hotspot[${i}].style`),
          name: krpano.get(`hotspot[${i}].name`),
          tooltip: krpano.get(`hotspot[${i}].tooltip`),
          title: krpano.get(`hotspot[${i}].title`),
          tag: krpano.get(`hotspot[${i}].tag`),
          url: krpano.get(`hotspot[${i}].url`),
          ath: krpano.get(`hotspot[${i}].ath`),
          atv: krpano.get(`hotspot[${i}].atv`)
        };
        originalHotspotData.set(name, originalData);
      }

      // Set edit mode behaviors
      krpano.set(`hotspot[${name}].onclick`, `js(handleHotspotClick('${name}'))`);
      krpano.set(`hotspot[${name}].onclick2`, `js(handleHotspotClick('${name}'))`);
      krpano.set(`hotspot[${name}].onover`, "");
      krpano.set(`hotspot[${name}].onout`, "");
      krpano.set(`hotspot[${name}].ondown`, `js(handleHotspotDragStart('${name}'))`);
      krpano.set(`hotspot[${name}].onup`, `js(handleHotspotDragEnd('${name}'))`);
    } else {
      // Restore original behaviors
      const originalData = originalHotspotData.get(name);
      if (originalData) {
        krpano.set(`hotspot[${name}].onclick`, originalData.onclick);
        krpano.set(`hotspot[${name}].onclick2`, originalData.onclick2);
        krpano.set(`hotspot[${name}].onover`, originalData.onover);
        krpano.set(`hotspot[${name}].onout`, originalData.onout);
        krpano.set(`hotspot[${name}].ondown`, originalData.ondown);
        krpano.set(`hotspot[${name}].onup`, originalData.onup);
        originalHotspotData.delete(name);
      }
    }
  }
}

function updateEditorState() {
  // Editor is open and Add Hotspot is active
  const editorActive = editorWrapper.classList.contains('active');
  const addHotspotActive = toggleAddHotspot.classList.contains('active');
  const editHotspotActive = document.getElementById('toggle-edit-hotspot').classList.contains('active');
  
  // Ensure only one mode is active at a time
  if (addHotspotActive) {
    document.getElementById('toggle-edit-hotspot').classList.remove('active');
  }
  if (editHotspotActive) {
    toggleAddHotspot.classList.remove('active');
  }
  
  hotspotAddMode = editorActive && addHotspotActive;
  hotspotEditMode = editorActive && editHotspotActive;
  
  if (hotspotEditMode) {
    editorWrapper.classList.add('hotspot-edit-mode');
    updateHotspotBehaviors(); // Update hotspot behaviors when entering edit mode
  } else {
    editorWrapper.classList.remove('hotspot-edit-mode');
    updateHotspotBehaviors(); // Restore original behaviors when leaving edit mode
  }
  
  updateHotspotCursor();
  
  // Ensure #toggle-cursor is active if editor is open and no other menu is active
  if (editorWrapper.classList.contains('active')) {
    const anyMenuActive = [toggleAddHotspot, document.getElementById('toggle-edit-hotspot'), toggleSetSceneStart, toggleSceneList, toggleEditSceneInfo].some(btn => btn && btn.classList.contains('active'));
    if (!anyMenuActive && toggleCursor) {
      editorMenuItems.forEach(i => i && i.classList.remove('active'));
      toggleCursor.classList.add('active');
    }
  }
}

toggleAddHotspot.addEventListener("click", (event) => {
  event.preventDefault();
  // The menu item click handler above will handle active class and state
  // Just prevent default here
});

// Show or hide #editor-wrapper when Shift+E is pressed
window.addEventListener('keydown', function(e) {
  const wrapper = document.getElementById('editor-wrapper');
  const tourWrapper = document.getElementById('tour-wrapper');
  if (!wrapper) return;
  
  // Only open on Shift+E
  if ((e.key === 'E' || e.key === 'e') && e.shiftKey) {
    if (!wrapper.classList.contains('active')) {
      wrapper.classList.add('active');
      wrapper.style.display = 'block';
      if (tourWrapper) {
        tourWrapper.style.width = 'calc(100% - 80px)';
        tourWrapper.style.marginLeft = '80px';
      }
    }
  }
});

document.getElementById("pano").addEventListener("click", function (e) {
  if (!hotspotAddMode || window.krpanoSWFObject.get("control.mousedown")) return;

  // Remove any existing modal to prevent duplicate listeners
  const existingModal = document.querySelector('.xml-output');
  if (existingModal) existingModal.remove();

  const krpano = window.krpanoSWFObject;
  const rect = this.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  krpano.call(`screentosphere(${x}, ${y}, ath, atv);`);
  const ath = krpano.get("ath");
  const atv = krpano.get("atv");

  showHotspotModal(ath, atv);
});

// Add hotspot click handler for edit mode
document.addEventListener('DOMContentLoaded', function() {
  const krpano = window.krpanoSWFObject;
  if (!krpano) return;

  // Function to handle hotspot clicks in edit mode
  function handleHotspotEditClick(hotspotName) {
    console.log('Hotspot clicked in edit mode:', hotspotName);
    const hotspotData = getHotspotData(hotspotName);
    if (hotspotData) {
      console.log('Hotspot data:', hotspotData);
      showHotspotModal(hotspotData.ath, hotspotData.atv, hotspotData);
    }
  }

  // Override all hotspot events in edit mode
  krpano.set('hotspot.onclick', function() {
    console.log('Hotspot onclick triggered, edit mode:', hotspotEditMode);
    if (hotspotEditMode) {
      handleHotspotEditClick(this.name);
      return false; // Prevent default action
    }
  });

  krpano.set('hotspot.onclick2', function() {
    console.log('Hotspot onclick2 triggered, edit mode:', hotspotEditMode);
    if (hotspotEditMode) {
      handleHotspotEditClick(this.name);
      return false; // Prevent default action
    }
  });

  // Override the onover event to prevent any hover effects in edit mode
  krpano.set('hotspot.onover', function() {
    if (hotspotEditMode) {
      console.log('Hotspot hover in edit mode:', this.name);
      return false; // Prevent default action
    }
  });

  // Override the onout event in edit mode
  krpano.set('hotspot.onout', function() {
    if (hotspotEditMode) {
      console.log('Hotspot out in edit mode:', this.name);
      return false; // Prevent default action
    }
  });

  // Override the ondown event in edit mode
  krpano.set('hotspot.ondown', function() {
    if (hotspotEditMode) {
      console.log('Hotspot down in edit mode:', this.name);
      return false; // Prevent default action
    }
  });

  // Override the onup event in edit mode
  krpano.set('hotspot.onup', function() {
    if (hotspotEditMode) {
      console.log('Hotspot up in edit mode:', this.name);
      return false; // Prevent default action
    }
  });
});

// Toggle 'active' class on editor menu items when clicked
const toggleCursor = document.getElementById('toggle-cursor');
const toggleEditHotspot = document.getElementById('toggle-edit-hotspot');

const editorMenuItems = [
  document.getElementById('toggle-add-hotspot'),
  toggleEditHotspot,
  document.getElementById('toggle-set-scene-start'),
  toggleCursor
];

editorMenuItems.forEach(item => {
  if (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('Editor menu item clicked:', this.id);
      
      // Remove active class from all items
      editorMenuItems.forEach(i => i && i.classList.remove('active'));
      
      // Add active class to clicked item
      this.classList.add('active');
      
      // Update editor state
      updateEditorState();
      
      // Special handling for hotspot edit mode
      if (this.id === 'toggle-edit-hotspot') {
        console.log('Toggle edit hotspot clicked');
        hotspotEditMode = this.classList.contains('active');
        console.log('Hotspot edit mode set to:', hotspotEditMode);
        
        // Update hotspot behaviors immediately
        updateHotspotBehaviors();
      }
    });
  }
});

// Function to create and show view settings modal
function showViewSettingsModal() {
  const krpano = window.krpanoSWFObject;
  if (!krpano) return;

  const hlookat = krpano.get("view.hlookat");
  const vlookat = krpano.get("view.vlookat");
  const fovtype = krpano.get("view.fovtype");
  const fov = krpano.get("view.fov");
  const maxpixelzoom = krpano.get("view.maxpixelzoom");
  const fovmin = krpano.get("view.fovmin");
  const fovmax = krpano.get("view.fovmax");
  const limitview = krpano.get("view.limitview");
  const projection = krpano.get("view.projection");
  const fisheye = krpano.get("view.fisheye");
  const fisheyefovlink = krpano.get("view.fisheyefovlink");

  // Remove any existing modal
  const existingModal = document.querySelector('.xml-output');
  if (existingModal) existingModal.remove();

  // Helper to build XML from fields
  function buildXml() {
    const getVal = id => {
      const el = modal.querySelector(id);
      return el ? el.value : '';
    };
    // Format hlookat, vlookat, fovmin to 1 decimal place if possible
    const format1dp = val => {
      const num = parseFloat(val);
      return isNaN(num) ? val : num.toFixed(1);
    };
    return `<view hlookat="${format1dp(getVal('#view-hlookat'))}" vlookat="${format1dp(getVal('#view-vlookat'))}" fovtype="${getVal('#view-fovtype')}" fov="${getVal('#view-fov')}" maxpixelzoom="${getVal('#view-maxpixelzoom')}" fovmin="${format1dp(getVal('#view-fovmin'))}" fovmax="${getVal('#view-fovmax')}" limitview="${getVal('#view-limitview')}" projection="${getVal('#view-projection')}" fisheye="${getVal('#view-fisheye')}" fisheyefovlink="${getVal('#view-fisheyefovlink')}" />`;
  }

  const modal = document.createElement("div");
  modal.className = "xml-output view-settings-modal";
  modal.innerHTML = `
    <div class="inner">
      <h3>Set Starting View XML</h3>
      <div class="inner-wrap">
        <div class="field-row">
          <div class="field-wrap col3">
            <label>hlookat: <input id="view-hlookat" type="text" value="${hlookat}"></label>
          </div>
          <div class="field-wrap col3">
            <label>vlookat: <input id="view-vlookat" type="text" value="${vlookat}"></label>
          </div>
          <div class="field-wrap col3">
            <label>fovtype: <input id="view-fovtype" type="text" value="${fovtype}"></label>
          </div>
        </div>
        <div class="field-row">
          <div class="field-wrap col3">
            <label>fov: <input id="view-fov" type="text" value="${fov}"></label>
          </div>
          <div class="field-wrap col3">
            <label>maxpixelzoom: <input id="view-maxpixelzoom" type="text" value="${maxpixelzoom}"></label>
          </div>
          <div class="field-wrap col3">
            <label>fovmin: <input id="view-fovmin" type="text" value="${fovmin}"></label>
          </div>
        </div>
        <div class="field-row">
          <div class="field-wrap col3">
            <label>fovmax: <input id="view-fovmax" type="text" value="${fovmax}"></label>
          </div>
          <div class="field-wrap col3">
            <label>limitview: <input id="view-limitview" type="text" value="${limitview}"></label>
          </div>
          <div class="field-wrap col3">
            <label>projection: <input id="view-projection" type="text" value="${projection}"></label>
          </div>
        </div>
        <div class="field-row">
          <div class="field-wrap col3">
            <label>fisheye: <input id="view-fisheye" type="text" value="${fisheye}"></label>
          </div>
          <div class="field-wrap col3">
            <label>fisheyefovlink: <input id="view-fisheyefovlink" type="text" value="${fisheyefovlink}"></label>
          </div>
          <div class="field-wrap col3"></div>
        </div>
        <textarea id="view-xml-output" readonly style="width:100%; height:80px; margin-top:10px;"></textarea><br>
        <button id="copy-view-xml">Copy XML</button>
        <button id="save-view-xml">Save to Scene</button>
        <button id="close-set-view-modal">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  
  // Set initial XML output after modal is in DOM
  modal.querySelector('#view-xml-output').value = buildXml();

  // Update XML output live as fields change
  [
    'view-hlookat', 'view-vlookat', 'view-fovtype', 'view-fov',
    'view-maxpixelzoom', 'view-fovmin', 'view-fovmax', 'view-limitview',
    'view-projection', 'view-fisheye', 'view-fisheyefovlink'
  ].forEach(id => {
    modal.querySelector(`#${id}`).addEventListener('input', function() {
      modal.querySelector('#view-xml-output').value = buildXml();
    });
  });

  // Copy XML button
  modal.querySelector('#copy-view-xml').addEventListener('click', function() {
    const textarea = modal.querySelector('#view-xml-output');
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    this.textContent = 'Copied!';
    setTimeout(() => { this.textContent = 'Copy XML'; }, 2000);
  });

  // Save XML button
  modal.querySelector('#save-view-xml').addEventListener('click', function() {
    const getVal = id => modal.querySelector(id).value;
    savedSceneData.view = {
      hlookat: getVal('#view-hlookat'),
      vlookat: getVal('#view-vlookat'),
      fovtype: getVal('#view-fovtype'),
      fov: getVal('#view-fov'),
      maxpixelzoom: getVal('#view-maxpixelzoom'),
      fovmin: getVal('#view-fovmin'),
      fovmax: getVal('#view-fovmax'),
      limitview: getVal('#view-limitview'),
      projection: getVal('#view-projection'),
      fisheye: getVal('#view-fisheye'),
      fisheyefovlink: getVal('#view-fisheyefovlink')
    };
    
    // Update scene XML output
    compileSceneXML();
    
    // Also update #scene-xml-output-2 with the new <view> tag
    const sceneXmlOutput2 = document.getElementById('scene-xml-output-2');
    if (sceneXmlOutput2) {
      let val = sceneXmlOutput2.value;
      const newViewTag = buildXml(); // This is the <view ... /> string
      if (val.match(/<view[^>]*\/?>/)) {
        // Replace existing <view ... /> tag
        sceneXmlOutput2.value = val.replace(/<view[^>]*\/?>/, newViewTag);
      } else if (val.match(/<scene[^>]*>/)) {
        // Insert after opening <scene ...> tag
        sceneXmlOutput2.value = val.replace(/(<scene[^>]*>)/, `$1\n${newViewTag}`);
      } else {
        // Fallback: just append
        sceneXmlOutput2.value += (val.trim() ? '\n' : '') + newViewTag;
      }
      updateSceneXmlOutput2Formatting();
    }
    
    // Show success message
    this.textContent = 'Saved!';
    setTimeout(() => { this.textContent = 'Save to Scene'; }, 2000);
    
    // Update status dot
    updateStatusDot('toggle-set-scene-start', 'saved');
  });

  // Close button
  modal.querySelector('#close-set-view-modal').addEventListener('click', function() {
    modal.remove();
  });
}

// Event listeners for view setting buttons
const toggleSetSceneStart = document.getElementById("toggle-set-scene-start");
const setStartingViewBtn = document.getElementById("set-starting-view-btn");

if (toggleSetSceneStart) {
  toggleSetSceneStart.addEventListener("click", function(e) {
    e.preventDefault();
    showViewSettingsModal();
  });
}

if (setStartingViewBtn) {
  setStartingViewBtn.addEventListener('click', function(e) {
    e.preventDefault();
    showViewSettingsModal();
  });
}

// Add openInfoPopupSimple function - REMOVED: This is now handled in lightbox.js
// function openInfoPopupSimple(file) {
//   const lightbox = document.querySelector(".lightbox");
//   const container = document.querySelector(".lightbox-container");

//   if (!lightbox || !container) {
//     console.error("Lightbox structure not found in DOM.");
//     return;
//   }

//   // Add 'simple' class
//   lightbox.classList.add("simple");

//   // Reset and show lightbox
//   container.innerHTML = "Loading...";
//   lightbox.style.opacity = 0;
//   lightbox.style.display = "flex";
//   requestAnimationFrame(() => {
//     lightbox.style.transition = "opacity 0.4s ease";
//     lightbox.style.opacity = 1;
//   });

//   // Load content
//   fetch(`inline/info/${file}`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Failed to load ${file}`);
//       return res.text();
//     })
//     .then(html => {
//       container.innerHTML = html;
//     })
//     .catch(err => {
//       container.innerHTML = `<p>Error loading content: ${err.message}</p>`;
//     });

//   // Close logic
//   function closeLightbox() {
//     lightbox.style.opacity = 0;
//     setTimeout(() => {
//       lightbox.style.display = "none";
//       container.innerHTML = "";
//       lightbox.classList.remove("simple"); // Remove 'simple' class on close
//     }, 400);
//   }

//   // Clicking outside content closes lightbox
//   lightbox.onclick = (e) => {
//     if (e.target === lightbox) {
//       closeLightbox();
//     }
//   };

//   // Clicking close button closes lightbox
//   const closeBtn = lightbox.querySelector(".close-btn");
//   if (closeBtn) {
//     closeBtn.onclick = closeLightbox;
//     closeBtn.onkeydown = (e) => {
//       if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
//         closeLightbox();
//       }
//     };
//   }
// }

const toggleSceneList = document.getElementById('toggle-scene-list');
const sceneListMenu = document.getElementById('scene-list-menu');

function showSceneListMenu() {
  console.log('Scene list button clicked');
  sceneListMenu.classList.add('active');
  if (!window.krpanoSWFObject) {
    sceneListMenu.innerHTML = '<div style="color:#fff;padding:24px;">Krpano is not ready. Scene list cannot be loaded.</div>';
    return;
  }
  const krpano = window.krpanoSWFObject;
  const sceneCount = krpano.get('scene.count');
  if (!sceneCount || sceneCount === 0) {
    sceneListMenu.innerHTML = '<div style="color:#fff;padding:24px;">No scenes found in tour.</div>';
    return;
  }
  const currentScene = krpano.get('xml.scene');
  // Count scenes and groups
  let groupSet = new Set();
  for (let i = 0; i < sceneCount; i++) {
    const group = krpano.get(`scene[${i}].group`);
    if (group) groupSet.add(group);
  }
  const groupCount = groupSet.size;

  // Build group map: group name -> array of scenes
  let groupMap = {};
  for (let i = 0; i < sceneCount; i++) {
    const group = krpano.get(`scene[${i}].group`) || 'Ungrouped';
    if (!groupMap[group]) groupMap[group] = [];
    groupMap[group].push({
      name: krpano.get(`scene[${i}].name`),
      title: krpano.get(`scene[${i}].title`),
      thumb: krpano.get(`scene[${i}].thumburl`)
    });
  }

  // Add counter above search field
  let html = `
    <div class="scene-list-counter">
      <span>${sceneCount} Scene${sceneCount !== 1 ? 's' : ''}</span> &middot; <span>${groupCount} Group${groupCount !== 1 ? 's' : ''}</span>
    </div>
    <div class="scene-search-wrapper">
      <input type="text" id="scene-search" placeholder="Search scenes..." autocomplete="off">
      <img src="assets/icons/search.svg" alt="Search" class="scene-search-icon">
    </div>
  `;
  html += '<div class="scene-list">';
  // Render each group
  for (const group in groupMap) {
    html += `<div class="scene-group"><div class="scene-group-title">${group}</div>`;
    groupMap[group].forEach(scene => {
      const activeClass = (scene.name === currentScene) ? ' active' : '';
      html += `
        <div class="scene-list-item${activeClass}" data-scene="${scene.name}" data-title="${scene.title}" data-group="${group}">
          <img class="scene-list-thumb" src="${scene.thumb}" alt="${scene.title}">
          <div class="scene-list-title">${scene.title}</div>
          ${(scene.name === currentScene) ? '<img src="assets/icons/view.svg" class="scene-active-icon" alt="Current scene">' : ''}
        </div>
      `;
    });
    html += '</div>';
  }
  html += '</div>';
  sceneListMenu.innerHTML = html;
  console.log('Scene list menu populated with', sceneCount, 'scenes');

  // Filtering logic
  const searchInput = sceneListMenu.querySelector('#scene-search');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const val = this.value.trim().toLowerCase();
      sceneListMenu.querySelectorAll('.scene-group').forEach(groupDiv => {
        const groupTitle = groupDiv.querySelector('.scene-group-title');
        const groupName = groupTitle ? groupTitle.textContent.toLowerCase() : '';
        const sceneItems = Array.from(groupDiv.querySelectorAll('.scene-list-item'));
        let groupMatch = groupName.indexOf(val) !== -1;
        let anySceneMatch = false;
        sceneItems.forEach(item => {
          const name = item.getAttribute('data-scene') || '';
          const title = item.getAttribute('data-title') || '';
          // If group matches, show all scenes
          if (groupMatch) {
            item.style.display = '';
            anySceneMatch = true;
          } else if (name.toLowerCase().indexOf(val) !== -1 || title.toLowerCase().indexOf(val) !== -1) {
            item.style.display = '';
            anySceneMatch = true;
          } else {
            item.style.display = 'none';
          }
        });
        // Show group if group matches or any scene matches
        groupDiv.style.display = (groupMatch || anySceneMatch) ? '' : 'none';
      });
    });
  }

  // Add click handlers for scene switching
  sceneListMenu.querySelectorAll('.scene-list-item').forEach(item => {
    item.addEventListener('click', function(e) {
      const scene = this.getAttribute('data-scene');
      if (scene && window.krpanoSWFObject) {
        window.krpanoSWFObject.call(`loadscene(${scene}, null, MERGE, BLEND(1));`);
      }
      // Hide menu and remove active from toggleSceneList
      hideSceneListMenu();
      if (toggleSceneList) toggleSceneList.classList.remove('active');
      // Hide set starting view button
      const setStartingViewBtn = document.getElementById('set-starting-view-btn');
      if (setStartingViewBtn) setStartingViewBtn.style.display = 'none';
      // Make toggle-cursor active
      if (toggleCursor) {
        editorMenuItems.forEach(i => i && i.classList.remove('active'));
        toggleCursor.classList.add('active');
        updateEditorState();
      }
    });
  });
}

function hideSceneListMenu() {
  sceneListMenu.classList.remove('active');
  sceneListMenu.innerHTML = '';
}

// Attach direct handler for scene list button
if (toggleSceneList) {
  toggleSceneList.addEventListener('click', function(e) {
    e.preventDefault();
    const isActive = this.classList.contains('active');
    // Remove active from all menu items
    editorMenuItems.forEach(i => i && i.classList.remove('active'));
    if (isActive) {
      this.classList.remove('active');
      hideSceneListMenu();
    } else {
      this.classList.add('active');
      updateEditorState();
      showSceneListMenu();
      // Hide edit scene info menu and remove its active class
      editSceneInfoMenu.classList.remove('active');
      editSceneInfoMenu.style.display = 'none';
      if (toggleEditSceneInfo) toggleEditSceneInfo.classList.remove('active');
    }
  });
}

// Hide scene list menu and remove active from toggleSceneList when other menu items are clicked
editorMenuItems.forEach(item => {
  if (item) {
    item.addEventListener('click', function (e) {
      editorMenuItems.forEach(i => i && i.classList.remove('active'));
      this.classList.add('active');
      updateEditorState();
      hideSceneListMenu();
      if (toggleSceneList) toggleSceneList.classList.remove('active');
    });
  }
});

const toggleEditSceneInfo = document.getElementById('toggle-edit-scene-info');
const editSceneInfoMenu = document.getElementById('edit-scene-info-menu');

function showEditSceneInfoMenu() {
  const krpano = window.krpanoSWFObject;
  if (!krpano) return;

  const currentScene = krpano.get("xml.scene");
  const menu = document.getElementById('edit-scene-info-menu');
  if (!menu) return;

  // Get current values from krpano or use saved values if they exist
  const title = savedSceneData.info?.title || krpano.get(`scene[${currentScene}].title`) || '';
  const description = savedSceneData.info?.description || krpano.get(`scene[${currentScene}].description`) || '';
  const group = savedSceneData.info?.group || krpano.get(`scene[${currentScene}].group`) || '';
  const onstart = savedSceneData.info?.onstart || krpano.get(`scene[${currentScene}].onstart`) || '';
  const thumburl = savedSceneData.info?.thumburl || krpano.get(`scene[${currentScene}].thumburl`) || '';
  const lat = savedSceneData.info?.lat || krpano.get(`scene[${currentScene}].lat`) || '';
  const lng = savedSceneData.info?.lng || krpano.get(`scene[${currentScene}].lng`) || '';
  const alt = savedSceneData.info?.alt || krpano.get(`scene[${currentScene}].alt`) || '';
  const heading = savedSceneData.info?.heading || krpano.get(`scene[${currentScene}].heading`) || '';

  menu.innerHTML = `
    <div class="edit-scene-info-form">
      <h5>Edit Scene: <code>${currentScene}</code></h5>
      <label>Title:<br><input type="text" id="scene-title-input" value="${title.replace(/"/g, '&quot;')}"></label>
      <label>Description:<br><textarea id="scene-description-input">${description}</textarea></label>
      <div class="field-wrap first">
        <label>Group:<br><input type="text" id="scene-group-input" value="${group.replace(/"/g, '&quot;')}"></label>
      </div>
      <div class="field-wrap">
        <label>onstart:<br><input type="text" id="scene-onstart-input" value="${onstart.replace(/"/g, '&quot;')}"></label>
      </div>
      <label>thumburl:<br><input type="text" id="scene-thumburl-input" value="${thumburl.replace(/"/g, '&quot;')}"></label>
      <div class="field-wrap first">
        <label>lat:<br><input type="text" id="scene-lat-input" value="${lat.replace(/"/g, '&quot;')}"></label>
      </div>
      <div class="field-wrap">
        <label>lng:<br><input type="text" id="scene-lng-input" value="${lng.replace(/"/g, '&quot;')}"></label>
      </div>
      <div class="field-wrap first">
        <label>alt:<br><input type="text" id="scene-alt-input" value="${alt.replace(/"/g, '&quot;')}"></label>
      </div>
      <div class="field-wrap">
        <label>heading:<br><input type="text" id="scene-heading-input" value="${heading.replace(/"/g, '&quot;')}"></label>
      </div>
      <div class="edit-scene-info-actions">
        <button id="generate-scene-xml" class="save-btn">Save</button>
        <button class="close-btn" onclick="hideEditSceneInfoMenu()">Close</button>
      </div>
    </div>
  `;

  menu.style.display = 'block';
  
  // Add event listener for Enter key in description textarea
  const descInput = document.getElementById('scene-description-input');
  if (descInput) {
    descInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;
        const value = this.value;
        this.value = value.substring(0, start) + '<br>' + value.substring(end);
        this.selectionStart = this.selectionEnd = start + 4;
      }
    });
  }
  
  // Add save button handler
  const saveBtn = menu.querySelector('#generate-scene-xml');
  if (saveBtn) {
    saveBtn.addEventListener('click', function() {
      const titleInput = document.getElementById('scene-title-input');
      const descInput = document.getElementById('scene-description-input');
      const groupInput = document.getElementById('scene-group-input');
      const onstartInput = document.getElementById('scene-onstart-input');
      const thumburlInput = document.getElementById('scene-thumburl-input');
      const latInput = document.getElementById('scene-lat-input');
      const lngInput = document.getElementById('scene-lng-input');
      const altInput = document.getElementById('scene-alt-input');
      const headingInput = document.getElementById('scene-heading-input');
      
      if (titleInput && descInput) {
        // Get the krpano object
        const krpano = window.krpanoSWFObject;
        if (!krpano) {
          console.error('Krpano object not found');
          return;
        }

        // Get current scene
        const currentScene = krpano.get('xml.scene');
        if (!currentScene) {
          console.error('Current scene not found');
          return;
        }

        console.log('Saving to scene:', currentScene);

        // Save the escaped values to krpano
        if (titleInput.value) {
          krpano.set(`scene[${currentScene}].title`, titleInput.value);
        }
        if (descInput.value) {
          // First replace <br> tags with &lt;br&gt;
          const escapedDescription = descInput.value
            .replace(/<br>/g, '&lt;br&gt;');
          // Then escape special characters
          const finalDescription = escapeXml(escapedDescription);
          console.log('Saving description:', finalDescription);
          krpano.set(`scene[${currentScene}].description`, finalDescription);
        }
        if (groupInput.value) {
          krpano.set(`scene[${currentScene}].group`, groupInput.value);
        }
        if (onstartInput.value) {
          krpano.set(`scene[${currentScene}].onstart`, onstartInput.value);
        }
        if (thumburlInput.value) {
          krpano.set(`scene[${currentScene}].thumburl`, thumburlInput.value);
        }
        if (latInput.value) {
          krpano.set(`scene[${currentScene}].lat`, latInput.value);
        }
        if (lngInput.value) {
          krpano.set(`scene[${currentScene}].lng`, lngInput.value);
        }
        if (altInput.value) {
          krpano.set(`scene[${currentScene}].alt`, altInput.value);
        }
        if (headingInput.value) {
          krpano.set(`scene[${currentScene}].heading`, headingInput.value);
        }

        // Update saved data
        savedSceneData.info = {
          title: titleInput.value,
          description: descInput.value,
          group: groupInput.value,
          onstart: onstartInput.value,
          thumburl: thumburlInput.value,
          lat: latInput.value,
          lng: lngInput.value,
          alt: altInput.value,
          heading: headingInput.value
        };
        
        // Update scene XML output
        compileSceneXML();
        
        // Also update the <scene ...> tag in #scene-xml-output-2
        const xmlOutput2 = document.getElementById('scene-xml-output-2');
        if (xmlOutput2) {
          let val = xmlOutput2.value;
          // Build new <scene ...> tag
          let newSceneTag = `<scene name="${currentScene}"`;
          if (titleInput.value) newSceneTag += ` title="${escapeXml(titleInput.value)}"`;
          if (descInput.value) {
            const escapedDescription = descInput.value
              .replace(/<br>/g, '&lt;br&gt;');
            newSceneTag += ` description="${escapeXml(escapedDescription)}"`;
          }
          if (groupInput.value) newSceneTag += ` group="${escapeXml(groupInput.value)}"`;
          if (onstartInput.value) newSceneTag += ` onstart="${escapeXml(onstartInput.value)}"`;
          if (thumburlInput.value) newSceneTag += ` thumburl="${escapeXml(thumburlInput.value)}"`;
          if (latInput.value) newSceneTag += ` lat="${latInput.value}"`;
          if (lngInput.value) newSceneTag += ` lng="${lngInput.value}"`;
          if (altInput.value) newSceneTag += ` alt="${altInput.value}"`;
          if (headingInput.value) newSceneTag += ` heading="${headingInput.value}"`;
          newSceneTag += '>';
          // Replace the opening <scene ...> tag only
          xmlOutput2.value = val.replace(/<scene[^>]*>/, newSceneTag);
          updateSceneXmlOutput2Formatting();
        }

        // Show success message
        this.textContent = 'Saved!';
        setTimeout(() => { this.textContent = 'Save to Scene'; }, 2000);
        
        // Update status dot
        updateStatusDot('toggle-edit-scene-info', 'saved');
      }
    });
  }
}

if (toggleEditSceneInfo) {
  toggleEditSceneInfo.addEventListener('click', function(e) {
    e.preventDefault();
    const isActive = this.classList.contains('active');
    // Remove active from all menu items
    editorMenuItems.forEach(i => i && i.classList.remove('active'));
    if (isActive) {
      this.classList.remove('active');
      editSceneInfoMenu.classList.remove('active');
      editSceneInfoMenu.style.display = 'none';
    } else {
      this.classList.add('active');
      updateEditorState();
      showEditSceneInfoMenu();
      // Hide other menus and remove their active classes
      hideSceneListMenu();
      if (toggleSceneList) toggleSceneList.classList.remove('active');
    }
  });
}
// Hide edit scene info menu when other menu items are clicked
editorMenuItems.forEach(item => {
  if (item) {
    item.addEventListener('click', function (e) {
      editSceneInfoMenu.classList.remove('active');
      editSceneInfoMenu.style.display = 'none';
      if (toggleEditSceneInfo) toggleEditSceneInfo.classList.remove('active');
    });
  }
});

// Function to get current scene XML from Krpano
function getCurrentSceneXML() {
  const krpano = window.krpanoSWFObject;
  if (!krpano) return null;
  
  const currentScene = krpano.get("xml.scene");
  return krpano.get(`scene[${currentScene}].content`);
}

// Function to save original scene XML
function saveOriginalSceneXML() {
  originalSceneXML = getCurrentSceneXML();
}

// Function to update status dot
function updateStatusDot(elementId, status) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  let statusDot = element.querySelector('.status-dot');
  if (!statusDot) {
    statusDot = document.createElement('div');
    statusDot.className = 'status-dot';
    element.appendChild(statusDot);
  }
  
  statusDot.className = 'status-dot ' + status;
}

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

// Function to compile scene XML
function compileSceneXML() {
  const krpano = window.krpanoSWFObject;
  if (!krpano) return;
  
  const currentScene = krpano.get("xml.scene");
  let xml = `<scene name="${currentScene}"`;
  
  // Add basic scene attributes
  if (savedSceneData.info) {
    xml += ` title="${escapeXml(savedSceneData.info.title)}"`;
    if (savedSceneData.info.description) {
      // First replace <br> tags with &lt;br&gt;
      const escapedDescription = savedSceneData.info.description
        .replace(/<br>/g, '&lt;br&gt;');
      
      const finalDescription = escapeXml(escapedDescription);
      
      xml += ` description="${finalDescription}"`;
    }
    if (savedSceneData.info.group) {
      xml += ` group="${escapeXml(savedSceneData.info.group)}"`;
    }
    if (savedSceneData.info.onstart) {
      xml += ` onstart="${escapeXml(savedSceneData.info.onstart)}"`;
    }
    if (savedSceneData.info.thumburl) {
      xml += ` thumburl="${escapeXml(savedSceneData.info.thumburl)}"`;
    }
    if (savedSceneData.info.lat) {
      xml += ` lat="${savedSceneData.info.lat}"`;
    }
    if (savedSceneData.info.lng) {
      xml += ` lng="${savedSceneData.info.lng}"`;
    }
    if (savedSceneData.info.alt) {
      xml += ` alt="${savedSceneData.info.alt}"`;
    }
    if (savedSceneData.info.heading) {
      xml += ` heading="${savedSceneData.info.heading}"`;
    }
  }
  
  xml += '>\n';
  
  // Add control element
  xml += '\t<control bouncinglimits="calc:image.cube ? true : false" />\n';
  
  // Add view element
  if (savedSceneData.view) {
    xml += `\t<view hlookat="${savedSceneData.view.hlookat}" vlookat="${savedSceneData.view.vlookat}" fovtype="${savedSceneData.view.fovtype}" fov="${savedSceneData.view.fov}" maxpixelzoom="${savedSceneData.view.maxpixelzoom}" fovmin="${savedSceneData.view.fovmin}" fovmax="${savedSceneData.view.fovmax}" limitview="${savedSceneData.view.limitview}" projection="${savedSceneData.view.projection}" fisheye="${savedSceneData.view.fisheye}" fisheyefovlink="${savedSceneData.view.fisheyefovlink}" />\n`;
  }
  
  // Always add preview element
  const previewUrl = krpano.get(`scene[${currentScene}].preview.url`) || `panos/${currentScene.replace('scene_', '')}.tiles/preview.jpg`;
  xml += `\t<preview url="${previewUrl}" />\n`;
  
  // Always add image element
  const imageUrl = krpano.get(`scene[${currentScene}].image.cube.url`) || `panos/${currentScene.replace('scene_', '')}.tiles/pano_%s.jpg`;
  xml += '\t<image>\n';
  xml += `\t\t<cube url="${imageUrl}" />\n`;
  xml += '\t</image>\n';
  
  // Add hotspots if any
  if (savedSceneData.hotspots && savedSceneData.hotspots.length > 0) {
    savedSceneData.hotspots.forEach(hotspot => {
      xml += `\t${hotspot}\n`;
    });
  }
  
  xml += '</scene>';
  
  // Update the XML output in the save scene info menu
  const xmlOutput = document.getElementById('scene-xml-output');
  if (xmlOutput) {
    xmlOutput.value = xml;
  }
}

// Function to show save scene info menu
function showSaveSceneInfoMenu() {
  const menu = document.getElementById('save-scene-info-menu');
  if (menu) {
    menu.classList.add('active');
    compileSceneXML();
    // Add close button to .save-scene-info-header if not already present
    const header = menu.querySelector('.save-scene-info-header');
    if (header && !header.querySelector('.close-save-scene-info')) {
      const closeBtn = document.createElement('button');
      closeBtn.className = 'close-save-scene-info';
      closeBtn.title = 'Close';
      closeBtn.innerHTML = '<img src="assets/icons/close.svg" width="40" height="40" alt="Close">';
      closeBtn.style.background = 'none';
      closeBtn.style.border = 'none';
      closeBtn.style.padding = '0';
      closeBtn.style.cursor = 'pointer';
      closeBtn.style.zIndex = '10001';
      header.appendChild(closeBtn);
      closeBtn.addEventListener('click', function() {
        menu.classList.remove('active');
        menu.style.display = 'none';
        const toggleBtn = document.getElementById('toggle-save-scene');
        if (toggleBtn) toggleBtn.classList.remove('active');
      });
    }
  }
}

// Function to hide save scene info menu
function hideSaveSceneInfoMenu() {
  const menu = document.getElementById('save-scene-info-menu');
  if (menu) {
    menu.classList.remove('active');
  }
}

// Add event listeners for save scene info menu
document.addEventListener('DOMContentLoaded', function() {
  const editorMenuItems = document.querySelectorAll('#editor-wrapper a');
  const saveSceneInfoMenu = document.getElementById('save-scene-info-menu');
  const toggleSaveScene = document.getElementById('toggle-save-scene');

  editorMenuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // Skip if this is the save scene toggle
      if (this.id === 'toggle-save-scene') return;
      
      // Hide save scene info menu and deactivate its toggle
      if (saveSceneInfoMenu) {
        saveSceneInfoMenu.style.display = 'none';
        saveSceneInfoMenu.classList.remove('active');
      }
      if (toggleSaveScene) {
        toggleSaveScene.classList.remove('active');
      }
    });
  });

  // Add toggle for save scene info menu
  if (toggleSaveScene) {
    toggleSaveScene.addEventListener('click', function(e) {
      e.preventDefault();
      if (saveSceneInfoMenu) {
        // Hide all other menus and sidebars
        document.querySelectorAll('.editor-menu, #scene-list-menu, #edit-scene-info-menu').forEach(m => {
          if (m !== saveSceneInfoMenu) {
            m.style.display = 'none';
            m.classList.remove('active');
          }
        });

        // Remove active class from all editor buttons except this one
        document.querySelectorAll('#editor-wrapper a').forEach(btn => {
          if (btn !== this) {
            btn.classList.remove('active');
          }
        });
        
        // Toggle this menu
        const isVisible = saveSceneInfoMenu.style.display === 'block';
        saveSceneInfoMenu.style.display = isVisible ? 'none' : 'block';
        saveSceneInfoMenu.classList.toggle('active');
        
        // Update button state
        this.classList.toggle('active');
        
        // Compile XML if showing
        if (!isVisible) {
          compileSceneXML();
        }

        // Clean up #scene-xml-output-2 formatting every time the menu is toggled
        updateSceneXmlOutput2Formatting();

        // Hide cursor overlay if visible
        const cursorOverlay = document.getElementById('cursor-overlay');
        if (cursorOverlay) {
          cursorOverlay.style.display = 'none';
        }

        // Remove hotspot cursor from pano
        const pano = document.getElementById('pano');
        if (pano) {
          pano.classList.remove('hotspot-cursor');
        }

        // Remove margin-left from #tour-wrapper
        var tourWrapper = document.getElementById('tour-wrapper');
        if (tourWrapper) {
          tourWrapper.className = '';
          tourWrapper.style.marginLeft = '0';
          tourWrapper.style.width = '100%';
        }
      }
    });
  }

  // Update #copy-scene-xml button to copy from #scene-xml-output-2
  const copyBtn = document.getElementById('copy-scene-xml');
  const xmlOutput2 = document.getElementById('scene-xml-output-2');
  if (copyBtn && xmlOutput2) {
    copyBtn.addEventListener('click', function() {
      xmlOutput2.select();
      xmlOutput2.setSelectionRange(0, 99999);
      document.execCommand('copy');
      const originalText = copyBtn.textContent;
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2000);
    });
  }

  // Store the original content of #scene-xml-output-2 on page load
  let originalSceneXmlOutput2 = '';
  if (xmlOutput2) {
    originalSceneXmlOutput2 = xmlOutput2.value;
  }

  // Add reset XML functionality for #reset-scene-xml
  const resetXmlBtn = document.getElementById('reset-scene-xml');
  if (resetXmlBtn) {
    resetXmlBtn.addEventListener('click', function() {
      // Create overlay
      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay';
      document.body.appendChild(overlay);

      // Create confirmation modal
      const modal = document.createElement('div');
      modal.className = 'xml-output reset-confirm-modal';
      modal.innerHTML = `
        <div class="inner">
          <h3>Reset Scene Changes</h3>
          <div class="inner-wrap">
            <p>You are about to clear all of the updates you have made to this scene. Do you want to continue?</p>
            <div class="button-group">
              <button id="confirm-reset" class="action-btn">Confirm</button>
              <button id="cancel-reset" class="close-btn">Cancel</button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      // Add specific styles for the reset confirmation modal and overlay
      const style = document.createElement('style');
      style.textContent = `
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.5);
          z-index: 9998;
        }
        .reset-confirm-modal {
          width: 50% !important;
          max-width: 400px;
          margin: 0 auto;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 9999;
          background: transparent;
        }
        .reset-confirm-modal .inner {
          width: 100%;
        }
        .reset-confirm-modal .button-group {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
        }
      `;
      document.head.appendChild(style);

      // Handle confirm button
      modal.querySelector('#confirm-reset').addEventListener('click', function() {
        if (xmlOutput2) {
          xmlOutput2.value = originalSceneXmlOutput2;
          updateSceneXmlOutput2Formatting();
        }
        // Reset saved data
        savedSceneData = {
          info: null,
          view: null,
          hotspots: []
        };
        // Update status dots
        updateStatusDot('toggle-edit-scene-info', '');
        updateStatusDot('toggle-set-scene-start', '');
        updateStatusDot('toggle-add-hotspot', '');
        modal.remove();
        overlay.remove();
        style.remove(); // Remove the style element when modal is closed
      });

      // Handle cancel button
      modal.querySelector('#cancel-reset').addEventListener('click', function() {
        modal.remove();
        overlay.remove();
        style.remove(); // Remove the style element when modal is closed
      });
    });
  }

  // Add close handler for .close-scene-info-menu
  const closeSceneInfoBtn = document.querySelector('.close-scene-info-menu');
  if (closeSceneInfoBtn) {
    closeSceneInfoBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const menu = document.getElementById('save-scene-info-menu');
      if (menu) {
        menu.classList.remove('active');
        menu.style.display = 'none';
      }
      const toggleBtn = document.getElementById('toggle-save-scene');
      if (toggleBtn) toggleBtn.classList.remove('active');
    });
  }
});

// ESC key handler for closing the editor with confirmation
(function() {
  document.addEventListener('keydown', function(e) {
    // Only act on ESC key
    if (e.key !== 'Escape') return;
    // Prevent multiple popups
    if (document.querySelector('.reset-confirm-modal') || document.querySelector('.close-editor-confirm-modal')) return;
    // Check if editor is open (editor-wrapper is visible)
    const editorWrapper = document.getElementById('editor-wrapper');
    if (!editorWrapper || !editorWrapper.classList.contains('active')) return;

    // Prevent default ESC behavior and stop propagation
    e.preventDefault();
    e.stopPropagation();

    // Create overlay if not already present
    let overlay = document.querySelector('.modal-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'modal-overlay';
      document.body.appendChild(overlay);
    } else {
      // Move overlay to end of body to ensure it's behind the modal
      document.body.appendChild(overlay);
    }

    // Create confirmation modal
    const modal = document.createElement('div');
    modal.className = 'xml-output close-editor-confirm-modal';
    modal.innerHTML = `
      <div class="inner">
        <h3>Close Editor</h3>
        <div class="inner-wrap">
          <p>Are you sure you want to close the editor?</p>
          <div class="button-group">
            <button id="confirm-close-editor" class="action-btn">Confirm</button>
            <button id="cancel-close-editor" class="close-btn">Cancel</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Add specific styles for the close editor confirmation modal and overlay
    const style = document.createElement('style');
    style.textContent = `
      .close-editor-confirm-modal {
        width: 50% !important;
        max-width: 400px;
        margin: 0 auto;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
        background: transparent;
      }
      .close-editor-confirm-modal .inner {
        width: 100%;
      }
      .close-editor-confirm-modal .button-group {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 20px;
      }
      .modal-overlay {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.5);
        z-index: 9998;
      }
    `;
    document.head.appendChild(style);

    // Handle confirm button
    modal.querySelector('#confirm-close-editor').addEventListener('click', function() {
      // Hide the editor UI and all menus/sidebars/overlays
      if (editorWrapper) {
        editorWrapper.style.display = 'none';
        editorWrapper.classList.remove('active'); // Remove active class
      }
      document.querySelectorAll('.editor-menu, #scene-list-menu, #edit-scene-info-menu, #save-scene-info-menu').forEach(m => {
        m.style.display = 'none';
        m.classList.remove('active');
      });
      // Remove margin-left from #tour-wrapper
      var tourWrapper = document.getElementById('tour-wrapper');
      if (tourWrapper) {
        tourWrapper.className = '';
        tourWrapper.style.marginLeft = '0';
        tourWrapper.style.width = '100%';
      }
      // Remove overlays and modal
      modal.remove();
      overlay.remove();
      style.remove();
    });

    // Handle cancel button
    modal.querySelector('#cancel-close-editor').addEventListener('click', function() {
      modal.remove();
      overlay.remove();
      style.remove();
    });
  });
})();

function hideEditSceneInfoMenu() {
  const menu = document.getElementById('edit-scene-info-menu');
  if (menu) {
    menu.style.display = 'none';
    menu.classList.remove('active');
  }
  if (toggleEditSceneInfo) {
    toggleEditSceneInfo.classList.remove('active');
  }
}

// Utility to clean up scene XML formatting in #scene-xml-output-2
function cleanSceneXmlFormatting(xml) {
  // First escape any unescaped special characters in attribute values
  xml = xml.replace(/([^=])"([^"]*?)([^=])"/g, (match, p1, p2, p3) => {
    // Skip if the value is already properly escaped
    if (p2.includes('&amp;') || p2.includes('&lt;') || p2.includes('&gt;') || p2.includes('&quot;') || p2.includes('&apos;')) {
      return match;
    }
    // Otherwise escape special characters
    let value = p2
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
    return `${p1}"${value}${p3}"`;
  });

  // Now proceed with the original formatting logic
  const match = xml.match(/(<scene[^>]*>)([\s\S]*)(<\/scene>)/);
  if (!match) return xml;

  const openTag = match[1];
  const content = match[2];
  const closeTag = match[3];

  let lines = content.split('\n').map(line => line.trim()).filter(line => line.length > 0);

  let formatted = [];
  let insideImage = false;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    // Handle <image> block indentation
    if (line.startsWith('<image')) {
      formatted.push('\t' + line);
      insideImage = true;
      continue;
    }
    if (line.startsWith('</image')) {
      formatted.push('\t' + line);
      insideImage = false;
      // Add a blank line after </image> if not last line
      if (i < lines.length - 1) formatted.push('');
      continue;
    }

    // Indent <cube> inside <image>
    if (insideImage) {
      formatted.push('\t\t' + line);
      continue;
    }

    // Indent all other top-level elements
    formatted.push('\t' + line);

    // Add a blank line after top-level elements except the last one
    if (
      i < lines.length - 1 &&
      !lines[i + 1].startsWith('</scene>') &&
      !line.startsWith('<image') &&
      !lines[i + 1].startsWith('</image')
    ) {
      formatted.push('');
    }
  }

  return `${openTag}\n${formatted.join('\n')}\n${closeTag}`;
}

// After any update to #scene-xml-output-2, clean up formatting
function updateSceneXmlOutput2Formatting() {
  const xmlOutput2 = document.getElementById('scene-xml-output-2');
  if (xmlOutput2) {
    xmlOutput2.value = cleanSceneXmlFormatting(xmlOutput2.value);
  }
}

// Add event listener for the clean button above #scene-xml-output-2
window.addEventListener('DOMContentLoaded', function() {
  const cleanBtn = document.getElementById('clean-xml-output-2');
  if (cleanBtn) {
    cleanBtn.addEventListener('click', function() {
      updateSceneXmlOutput2Formatting();
    });
  }
});

// Update the getHotspotData function to be more robust
function getHotspotData(name) {
  const krpano = window.krpanoSWFObject;
  if (!krpano) {
    console.error('Krpano not available');
    return null;
  }

  console.log('Getting data for hotspot:', name);
  
  // If we have original data stored, use that instead
  if (originalHotspotData.has(name)) {
    console.log('Using stored original data for hotspot:', name);
    return originalHotspotData.get(name);
  }

  // Otherwise get current data
  const hotspot = krpano.get(`hotspot[${name}]`);
  console.log('Raw hotspot object:', hotspot);
  
  if (!hotspot) {
    console.error('Hotspot not found:', name);
    return null;
  }

  // Get all attributes directly from krpano
  const data = {
    name: krpano.get(`hotspot[${name}].name`),
    style: krpano.get(`hotspot[${name}].style`),
    ath: krpano.get(`hotspot[${name}].ath`),
    atv: krpano.get(`hotspot[${name}].atv`),
    tooltip: krpano.get(`hotspot[${name}].tooltip`),
    linkedscene: krpano.get(`hotspot[${name}].linkedscene`),
    onclick: krpano.get(`hotspot[${name}].onclick`),
    onclick2: krpano.get(`hotspot[${name}].onclick2`),
    onover: krpano.get(`hotspot[${name}].onover`),
    onout: krpano.get(`hotspot[${name}].onout`),
    ondown: krpano.get(`hotspot[${name}].ondown`),
    onup: krpano.get(`hotspot[${name}].onup`),
    tag: krpano.get(`hotspot[${name}].tag`),
    title: krpano.get(`hotspot[${name}].title`),
    url: krpano.get(`hotspot[${name}].url`)
  };

  console.log('Extracted hotspot data:', data);
  return data;
}

// Add global function to handle hotspot clicks
window.handleHotspotClick = function(hotspotName) {
  console.log('Hotspot clicked:', hotspotName, 'Edit mode:', hotspotEditMode, 'Dragging:', isDragging);
  
  // Only show modal if we're in edit mode and not dragging
  if (hotspotEditMode && !isDragging) {
    console.log('Attempting to show modal for hotspot:', hotspotName);
    const krpano = window.krpanoSWFObject;
    if (!krpano) {
      console.log('Krpano not available');
      return false;
    }

    // Get hotspot data directly from Krpano
    const hotspotData = {
      name: hotspotName,
      ath: krpano.get(`hotspot[${hotspotName}].ath`),
      atv: krpano.get(`hotspot[${hotspotName}].atv`),
      style: krpano.get(`hotspot[${hotspotName}].style`),
      tooltip: krpano.get(`hotspot[${hotspotName}].tooltip`),
      linkedscene: krpano.get(`hotspot[${hotspotName}].linkedscene`),
      onclick: krpano.get(`hotspot[${hotspotName}].onclick`),
      title: krpano.get(`hotspot[${hotspotName}].title`),
      tag: krpano.get(`hotspot[${hotspotName}].tag`),
      url: krpano.get(`hotspot[${hotspotName}].url`)
    };

    // Try to get the original onclick from XML
    const xmlData = getHotspotDataFromXML(hotspotName);
    if (xmlData && xmlData.onclick) {
      hotspotData.onclick = xmlData.onclick;
    }

    console.log('Hotspot data:', hotspotData);
    showHotspotModal(hotspotData.ath, hotspotData.atv, hotspotData);
    return false;
  }
  return false;
};

// Add the showHotspotModal function
function showHotspotModal(ath, atv, existingHotspot = null) {
  console.log('Starting showHotspotModal');
  console.log('Existing hotspot data:', existingHotspot);
  
  // Remove any existing modal
  const existingModal = document.querySelector('.xml-output');
  if (existingModal) {
    console.log('Removing existing modal');
    existingModal.remove();
  }

  const krpano = window.krpanoSWFObject;
  if (!krpano) {
    console.log('Krpano not available');
    return;
  }

  // Get fresh hotspot data from XML
  let hotspotData = null;
  if (existingHotspot && existingHotspot.name) {
    console.log('Getting fresh data for hotspot:', existingHotspot.name);
    hotspotData = getHotspotDataFromXML(existingHotspot.name);
    console.log('Fresh hotspot data from XML:', hotspotData);
  }

  // Use fresh data if available, otherwise use existing data
  const dataToUse = hotspotData || existingHotspot;
  console.log('Using hotspot data:', dataToUse);

  // Ensure ath/atv are set from data
  if (dataToUse) {
    if (ath === undefined || ath === null) ath = dataToUse.ath;
    if (atv === undefined || atv === null) atv = dataToUse.atv;
  }

  // Always refresh spotStyles from tour.xml before showing modal
  loadSpotStyles();

  const currentScene = krpano.get("xml.scene");
  const sceneCount = krpano.get("scene.count");
  const scenes = [];
  for (let i = 0; i < sceneCount; i++) {
    const name = krpano.get(`scene[${i}].name`);
    const title = krpano.get(`scene[${i}].title`);
    scenes.push({ name, title });
  }

  // Get info files from the tour.xml
  const infoFiles = [];
  const infoElement = krpano.get("xml.scene.info");
  if (infoElement) {
    Array.from(infoElement).forEach(info => {
      if (info.file) infoFiles.push(info.file);
    });
  }

  console.log('Available scenes:', scenes);
  console.log('Available info files:', infoFiles);

  // Load info files from PHP endpoint
  fetch('inline/info/_list-html-files.php')
    .then(response => response.json())
    .then(files => {
      console.log('Loaded info files:', files);
      // Update the target field if it's an info type
      const typeSelect = document.getElementById('hs-type');
      if (typeSelect && (typeSelect.value === 'info' || typeSelect.value === 'info_simple')) {
        const targetWrapper = document.getElementById('target-wrapper');
        if (targetWrapper) {
          targetWrapper.innerHTML = `
            <label>Info File:<br>
              <select id="hs-target">
                ${files.map(file => `<option value="${file}">${file}</option>`).join("")}
              </select>
            </label>
          `;
          // Set selected info file if editing
          if (dataToUse && dataToUse.target) {
            const targetSelect = document.getElementById('hs-target');
            if (targetSelect) {
              console.log('Setting target info file to:', dataToUse.target);
              targetSelect.value = dataToUse.target;
            }
          }
        }
      }
    })
    .catch(error => {
      console.error('Error loading info files:', error);
    });

  const modal = document.createElement("div");
  modal.className = "xml-output";
  modal.style.display = "flex";
  modal.innerHTML = `
    <div class="inner">
      <h3>${dataToUse ? 'Edit' : 'Add'} Hotspot: <code>${currentScene}</code></h3>
      <div class="inner-wrap">
        <label>Name:<br><input type="text" id="hs-name" ${dataToUse ? 'readonly' : ''}></label><br>
        <div class="field-wrap" style="margin-right:10px;">
          <label>Spot Style:<br>
            <select id="hs-style">
              ${spotStyles.map(style => `<option value="${style}">${style}</option>`).join("")}
            </select>
          </label>
        </div>
        <div class="field-wrap">
          <label>Action:<br>
            <select id="hs-type">
              <option value="link">Link to scene</option>
              <option value="info">Info popup</option>
              <option value="info_simple">Info popup simple</option>
            </select>
          </label>
        </div>
        <div id="target-wrapper"></div>
        <br>
        <div class="button-group">
          <button id="create-hotspot" class="action-btn">${dataToUse ? 'Update' : 'Create'} Hotspot</button>
          <button id="save-hotspot" class="action-btn"><img src="assets/icons/save.svg" class="icon" alt="Save"> Save</button>
          <button id="close-editor" class="close-btn">Close</button>
        </div>
        <textarea id="xml-snippet" readonly style="width:100%; height:150px;"></textarea>
      </div>
    </div>
  `;

  console.log('Appending modal to document');
  document.body.appendChild(modal);

  // Populate form fields if editing existing hotspot
  if (dataToUse) {
    console.log('Populating form with hotspot data:', dataToUse);
    const nameInput = document.getElementById('hs-name');
    const styleSelect = document.getElementById('hs-style');
    const typeSelect = document.getElementById('hs-type');

    // Set name from the name attribute
    if (nameInput) {
      console.log('Setting name to:', dataToUse.name);
      nameInput.value = dataToUse.name || '';
    }

    // Set style from the style attribute
    if (styleSelect) {
      const style = dataToUse.style ? dataToUse.style.split('|')[0] : '';
      console.log('Setting style to:', style);
      styleSelect.value = style;
    }

    // Determine action type from hotspot properties
    if (typeSelect) {
      let actionType = 'link'; // default
      
      // Check for linkedscene or linked_scene first
      if (dataToUse.linkedscene || dataToUse.linked_scene) {
        actionType = 'link';
      }
      // Then check for info popup
      else if (dataToUse.onclick) {
        console.log('Checking onclick for action type:', dataToUse.onclick);
        // Check for openInfoPopup in the onclick attribute
        if (dataToUse.onclick.toLowerCase().includes('openinfopopup(')) {
          actionType = 'info';
        } else if (dataToUse.onclick.toLowerCase().includes('showinfosimple(')) {
          actionType = 'info_simple';
        }
      }
      
      console.log('Setting action type to:', actionType, 'based on:', {
        linkedscene: dataToUse.linkedscene,
        linked_scene: dataToUse.linked_scene,
        onclick: dataToUse.onclick
      });
      typeSelect.value = actionType;
    }
  }

  // Add event listeners
  const closeBtn = document.getElementById('close-editor');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      console.log('Close button clicked');
      const modal = document.querySelector('.xml-output');
      if (modal) {
        console.log('Removing modal');
        modal.remove();
      }
    });
  }

  // Handle action type change
  const typeSelect = document.getElementById('hs-type');
  if (typeSelect) {
    typeSelect.addEventListener('change', () => {
      const type = typeSelect.value;
      const targetWrapper = document.getElementById('target-wrapper');
      const nameInput = document.getElementById('hs-name');

      if (type === 'link') {
        // Get available scenes from krpano
        const krpano = window.krpanoSWFObject;
        const scenes = [];
        const total = krpano.get("scene.count");
        
        for (let i = 0; i < total; i++) {
          const name = krpano.get(`scene[${i}].name`);
          const title = krpano.get(`scene[${i}].title`) || name;
          scenes.push({ name, title });
        }

        console.log('Available scenes:', scenes);
        
        targetWrapper.innerHTML = `
          <label>Target Scene:<br>
            <select id="hs-target">
              ${scenes.map(scene => `<option value="${scene.name}">${scene.title}</option>`).join("")}
            </select>
          </label>
        `;

        // Add change event to target select to update name field
        const targetSelect = document.getElementById('hs-target');
        if (targetSelect) {
          targetSelect.addEventListener('change', () => {
            const selectedScene = scenes.find(s => s.name === targetSelect.value);
            if (selectedScene && nameInput) {
              nameInput.value = selectedScene.title;
            }
          });
          
          // Set selected target scene if editing existing hotspot
          if (dataToUse && (dataToUse.linkedscene || dataToUse.linked_scene)) {
            const targetScene = dataToUse.linkedscene || dataToUse.linked_scene;
            console.log('Setting target scene to:', targetScene);
            targetSelect.value = targetScene;
            // Trigger change event to update the name field
            targetSelect.dispatchEvent(new Event('change'));
          } else {
            // Trigger change event to set initial name
            targetSelect.dispatchEvent(new Event('change'));
          }
        }
      } else if (type === 'info' || type === 'info_simple') {
        // Load info files from PHP endpoint
        fetch('inline/info/_list-html-files.php')
          .then(response => response.json())
          .then(files => {
            console.log('Loaded info files:', files);
            targetWrapper.innerHTML = `
              <label>Info File:<br>
                <select id="hs-target">
                  ${files.map(file => `<option value="${file}">${file}</option>`).join("")}
                </select>
              </label>
            `;

            // Add change event to target select to update name field
            const targetSelect = document.getElementById('hs-target');
            if (targetSelect) {
              targetSelect.addEventListener('change', () => {
                const selectedFile = targetSelect.value;
                // Fetch the HTML file content
                fetch(`inline/info/${selectedFile}`)
                  .then(response => response.text())
                  .then(html => {
                    // Create a temporary div to parse the HTML
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = html;
                    // Find the h3 element
                    const h3Element = tempDiv.querySelector('h3');
                    if (h3Element && nameInput) {
                      nameInput.value = h3Element.textContent.trim();
                    }
                  })
                  .catch(error => {
                    console.error('Error loading info file:', error);
                  });
              });

              // Set selected info file if editing
              if (dataToUse && dataToUse.target) {
                console.log('Setting target info file to:', dataToUse.target);
                targetSelect.value = dataToUse.target;
                // Trigger change event to load the h3 content
                targetSelect.dispatchEvent(new Event('change'));
              } else {
                // Trigger change event to load initial h3 content
                targetSelect.dispatchEvent(new Event('change'));
              }
            }
          })
          .catch(error => {
            console.error('Error loading info files:', error);
            targetWrapper.innerHTML = '<p class="error">Error loading info files</p>';
          });
      } else {
        targetWrapper.innerHTML = '';
      }
    });

    // Trigger change event to show initial target field
    typeSelect.dispatchEvent(new Event('change'));
  }

  // Function to generate a unique hotspot name
  function generateUniqueHotspotName(baseName, sceneXml) {
    // Convert base name to lowercase and replace spaces with underscores
    let name = baseName.toLowerCase().replace(/\s+/g, '_');
    
    // Check if this name already exists in the scene
    let counter = 1;
    let finalName = name;
    
    while (sceneXml.includes(`name="${finalName}"`)) {
      finalName = `${name}_${counter}`;
      counter++;
    }
    
    return finalName;
  }

  // Handle create/update hotspot button
  const createBtn = document.getElementById('create-hotspot');
  if (createBtn) {
    createBtn.addEventListener('click', () => {
      const displayName = document.getElementById('hs-name').value.trim();
      const style = document.getElementById('hs-style').value;
      const type = document.getElementById('hs-type').value;
      const target = document.getElementById('hs-target').value;

      if (!displayName) {
        alert('Please enter a hotspot name');
        return;
      }

      if ((type === 'info' || type === 'info_simple') && !target) {
        alert('Please select an info file');
        return;
      }

      if (type === 'link' && !target) {
        alert('Please select a target scene');
        return;
      }

      // Get current scene XML to check for existing names
      const sceneXmlOutput2 = document.getElementById('scene-xml-output-2');
      const sceneXml = sceneXmlOutput2 ? sceneXmlOutput2.value : '';
      
      // Generate unique hotspot name
      const uniqueName = generateUniqueHotspotName(displayName, sceneXml);

      // Generate XML based on type
      let xml;
      if (type === 'link') {
        // Check if the style is a link bubble or balloon style that doesn't need |tooltip
        const linkStyles = ['spot_link_bubble', 'spot_link_bubble_small', 'spot_link_balloon', 'spot_link_balloon_small'];
        const styleWithTooltip = linkStyles.includes(style) ? style : `${style}|tooltip`;
        xml = `<hotspot name="${uniqueName}" style="${styleWithTooltip}" linked_scene="${target}" ath="${ath}" atv="${atv}" tooltip="${displayName}" onclick="loadscene(${target}, null, MERGE, BLEND(1));" />`;
      } else if (type === 'info') {
        xml = `<hotspot name="${uniqueName}" style="${style}|tooltip" ath="${ath}" atv="${atv}" tooltip="${displayName}" onclick="js(openInfoPopup('${target}'))" />`;
      } else if (type === 'info_simple') {
        xml = `<hotspot name="${uniqueName}" style="${style}|tooltip" ath="${ath}" atv="${atv}" tooltip="${displayName}" onclick="js(openInfoPopupSimple('${target}'))" />`;
      }

      // Update XML snippet
      const xmlSnippet = document.getElementById('xml-snippet');
      if (xmlSnippet) {
        xmlSnippet.value = xml;
      }
    });
  }

  // Handle save hotspot button
  const saveBtn = document.getElementById('save-hotspot');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const xmlSnippet = document.getElementById('xml-snippet');
      const sceneXmlOutput2 = document.getElementById('scene-xml-output-2');

      if (!xmlSnippet || !sceneXmlOutput2) {
        console.error('Required elements not found');
        return;
      }

      const xml = xmlSnippet.value.trim();
      if (!xml) {
        alert('Please create the hotspot first');
        return;
      }

      let val = sceneXmlOutput2.value;
      const hotspotName = xml.match(/name=["']([^"']+)["']/)[1];

      // Replace the old hotspot using the original name
      const oldName = hotspotName.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
      const hotspotRegex = new RegExp(`<hotspot[^>]*name=["']${oldName}["'][^>]*\/?>`, 'gi');
      let replaced = false;

      if (hotspotRegex.test(val)) {
        val = val.replace(hotspotRegex, xml);
        replaced = true;
      }

      // If not found, append before </scene>
      if (!replaced) {
        if (val.includes('</scene>')) {
          val = val.replace(/<\/scene>/, `${xml}\n</scene>`);
        } else {
          val += (val.trim() ? '\n' : '') + xml;
        }
      }

      sceneXmlOutput2.value = val;
      updateSceneXmlOutput2Formatting();

      // Show save feedback
      const originalText = saveBtn.innerHTML;
      saveBtn.innerHTML = '<img src="assets/icons/save.svg" class="icon" alt="Saved"> Saved';
      saveBtn.style.backgroundColor = '#006241';
      setTimeout(() => {
        saveBtn.innerHTML = originalText;
        saveBtn.style.backgroundColor = '';
      }, 2000);
    });
  }
}

// Add function to generate hotspot XML
function generateHotspotXML(hotspotData) {
  // Check if the style is a link bubble or balloon style that doesn't need |tooltip
  const linkStyles = ['spot_link_bubble', 'spot_link_bubble_small', 'spot_link_balloon', 'spot_link_balloon_small'];
  const styleWithTooltip = linkStyles.includes(hotspotData.style) ? hotspotData.style : `${hotspotData.style}|tooltip`;
  
  let xml = `<hotspot name="${hotspotData.name}" style="${styleWithTooltip}" ath="${hotspotData.ath.toFixed(2)}" atv="${hotspotData.atv.toFixed(2)}" tooltip="${hotspotData.tooltip}"`;
  
  if (hotspotData.style === "spot_link_bubble" && hotspotData.linkedscene) {
    xml += ` url="${getSceneThumbUrl(hotspotData.linkedscene)}"`;
  }
  
  if (hotspotData.linkedscene) {
    xml += ` linked_scene="${hotspotData.linkedscene}" onclick="loadscene(${hotspotData.linkedscene}, null, MERGE, BLEND(1))"`;
  } else if (hotspotData.onclick) {
    xml += ` onclick="${hotspotData.onclick}"`;
  }
  
  xml += ' />';
  return xml;
}

// Add updateXMLOutput function at the top of the file
function updateXMLOutput(xmlString) {
  const sceneXmlOutput2 = document.getElementById('scene-xml-output-2');
  if (sceneXmlOutput2) {
    let val = sceneXmlOutput2.value;
    const hotspotName = xmlString.match(/name=["']([^"']+)["']/)[1];
    
    // Replace the old hotspot using the original name
    const oldName = hotspotName.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
    const hotspotRegex = new RegExp(`<hotspot[^>]*name=["']${oldName}["'][^>]*\/?>`, 'gi');
    let replaced = false;
    
    if (hotspotRegex.test(val)) {
      val = val.replace(hotspotRegex, xmlString);
      replaced = true;
    }
    
    // If not found, append before </scene>
    if (!replaced) {
      if (val.includes('</scene>')) {
        val = val.replace(/<\/scene>/, `${xmlString}\n</scene>`);
      } else {
        val += (val.trim() ? '\n' : '') + xmlString;
      }
    }
    
    sceneXmlOutput2.value = val;
    updateSceneXmlOutput2Formatting();
  }
}

// ... rest of the existing code ...

function getHotspotDataFromXML(hotspotName) {
  const krpano = window.krpanoSWFObject;
  if (!krpano) return null;

  // Get the current scene name
  const currentScene = krpano.get("xml.scene");
  if (!currentScene) {
    console.log('No current scene found');
    return null;
  }

  // Get the scene XML content using a different method
  const sceneXml = krpano.get(`scene[${currentScene}].content`);
  if (!sceneXml) {
    console.log('No scene XML content found for scene:', currentScene);
    return null;
  }

  console.log('Scene XML content:', sceneXml);

  // Find the hotspot element in the XML - handle both self-closing and regular tags
  // Use case-insensitive name matching
  const hotspotMatch = sceneXml.match(new RegExp(`<hotspot[^>]*name=["']${hotspotName}["'][^>]*\/?>`, 'i'));
  if (!hotspotMatch) {
    console.log('No matching hotspot found in XML for:', hotspotName);
    return null;
  }

  console.log('Found hotspot XML:', hotspotMatch[0]);

  // Parse the hotspot attributes
  const hotspotXml = hotspotMatch[0];
  const nameMatch = hotspotXml.match(/name=["']([^"']+)["']/i);
  const styleMatch = hotspotXml.match(/style=["']([^"']+)["']/i);
  const athMatch = hotspotXml.match(/ath=["']([^"']+)["']/i);
  const atvMatch = hotspotXml.match(/atv=["']([^"']+)["']/i);
  const tooltipMatch = hotspotXml.match(/tooltip=["']([^"']+)["']/i);
  const linkedsceneMatch = hotspotXml.match(/linkedscene=["']([^"']+)["']/i);
  const linkedSceneMatch = hotspotXml.match(/linked_scene=["']([^"']+)["']/i);
  const onclickMatch = hotspotXml.match(/onclick=["']([^"']+)["']/i);
  const titleMatch = hotspotXml.match(/title=["']([^"']+)["']/i);
  const tagMatch = hotspotXml.match(/tag=["']([^"']+)["']/i);
  const urlMatch = hotspotXml.match(/url=["']([^"']+)["']/i);

  // Extract target from onclick if it exists
  let target = null;
  if (onclickMatch) {
    const onclick = onclickMatch[1];
    if (onclick.includes('openInfoPopup(')) {
      const targetMatch = onclick.match(/openInfoPopup\(['"]([^'"]+)['"]\)/);
      if (targetMatch) {
        target = targetMatch[1];
      }
    } else if (onclick.includes('loadscene(')) {
      const targetMatch = onclick.match(/loadscene\(([^,]+)/);
      if (targetMatch) {
        target = targetMatch[1];
      }
    }
  }

  const data = {
    name: nameMatch ? nameMatch[1] : null,
    style: styleMatch ? styleMatch[1] : null,
    ath: athMatch ? parseFloat(athMatch[1]) : null,
    atv: atvMatch ? parseFloat(atvMatch[1]) : null,
    tooltip: tooltipMatch ? tooltipMatch[1] : null,
    linkedscene: linkedsceneMatch ? linkedsceneMatch[1] : (linkedSceneMatch ? linkedSceneMatch[1] : null),
    linked_scene: linkedSceneMatch ? linkedSceneMatch[1] : (linkedsceneMatch ? linkedsceneMatch[1] : null),
    onclick: onclickMatch ? onclickMatch[1] : null,
    title: titleMatch ? titleMatch[1] : null,
    tag: tagMatch ? tagMatch[1] : null,
    url: urlMatch ? urlMatch[1] : null,
    target: target
  };

  console.log('Parsed hotspot data:', data);
  return data;
}

function saveSceneData() {
  const krpano = window.krpanoSWFObject;
  if (!krpano) {
    console.error('Krpano object not found');
    return;
  }

  const currentScene = krpano.get('xml.scene');
  if (!currentScene) {
    console.error('No current scene found');
    return;
  }

  // Get scene data
  const title = document.getElementById('scene-title').value;
  const description = document.getElementById('scene-description').value;
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
  let escapedDescription = description;
  if (escapedDescription) {
    escapedDescription = escapedDescription
      .replace(/<br>/g, '&lt;br&gt;');
    escapedDescription = escapeXml(escapedDescription);
  }

  // Construct the complete scene XML
  let sceneXML = `<scene name="${currentScene}"`;
  
  // Add specific attributes we know about
  if (title) {
    const escapedTitle = escapeXml(title);
    sceneXML += ` title="${escapedTitle}"`;
  }
  if (escapedDescription) sceneXML += ` description="${escapedDescription}"`;
  if (thumburl) {
    const escapedThumburl = escapeXml(thumburl);
    sceneXML += ` thumburl="${escapedThumburl}"`;
  }
  if (lat) sceneXML += ` lat="${lat}"`;
  if (lng) sceneXML += ` lng="${lng}"`;
  if (alt) sceneXML += ` alt="${alt}"`;
  if (heading) sceneXML += ` heading="${heading}"`;
  
  // Add content
  const sceneContent = krpano.get(`scene[${currentScene}].content`);
  if (sceneContent) {
    sceneXML += `>\n${sceneContent}\n</scene>`;
  } else {
    sceneXML += ' />';
  }

  // Output to the textarea
  const outputElement = document.getElementById('scene-xml-output');
  if (outputElement) {
    try {
      outputElement.value = sceneXML;
    } catch (error) {
      console.error('Error setting textarea value:', error);
    }
  } else {
    console.error('Output element #scene-xml-output not found');
  }
}