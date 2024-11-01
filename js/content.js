//content.js
console.log(
  `%c 🗃️ Core Data Viewer 👁️  %c
    Hello from your Chrome extension!`,
  "background: #3f51b5; color: #fff; padding: 5px 10px; border-radius: 5px; font-size: 16px;",
  "color: #333; font-size: 14px;"
);

let isJsonView = false;
let originalContent = null;
let jsonEditor = null;
let storedCoreData = null;

// Create container for JSON editor
const editorContainer = document.createElement("div");
editorContainer.id = "jsoneditor";
editorContainer.style.display = "none";
document.body.appendChild(editorContainer);

// Create toggle button
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle JSON View";
toggleButton.className = "json-toggle-btn";
document.body.appendChild(toggleButton);

// Initialize JSON Editor
function initializeJsonEditor(data) {
  const container = document.getElementById("jsoneditor");
  const options = {
    mode: "tree",
    modes: ["view", "form", "code", "tree", "text"],
    navigationBar: true,
    statusBar: true,
    mainMenuBar: true,
    search: true,
    expandAll: true,
    colorPicker: true,
    language: "en",
    enableSort: true,
    enableTransform: true,
  };

  jsonEditor = new JSONEditor(container, options, data);
}

// Inject the script that can access the page's variables
function injectScript() {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("js/pageScript.js");
  script.onload = function () {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(script);
}

// Listen for the message from the injected script
window.addEventListener("message", function (event) {
  if (event.data.type === "CORE_DATA_EXTRACTED") {
    storedCoreData = event.data.data;
    if (isJsonView && !jsonEditor) {
      initializeJsonEditor(storedCoreData);
    }
  }
});

// Toggle function
function toggleView() {
  if (!originalContent) {
    originalContent = document.body.innerHTML;
  }

  if (isJsonView) {
    // Restore original content
    document.body.innerHTML = originalContent;
    // Re-add our elements
    document.body.appendChild(editorContainer);
    document.body.appendChild(toggleButton);
    editorContainer.style.display = "none";
  } else {
    try {
      if (!storedCoreData) {
        injectScript();
        alert(
          "Trying to access coreData. Please try toggling again in a moment."
        );
        return;
      }

      // Hide original content
      Array.from(document.body.children).forEach((child) => {
        if (child !== editorContainer && child !== toggleButton) {
          child.style.display = "none";
        }
      });

      // Show JSON editor
      editorContainer.style.display = "block";

      if (!jsonEditor) {
        initializeJsonEditor(storedCoreData);
      }
    } catch (error) {
      alert("Error accessing coreData: " + error.message);
    }
  }

  isJsonView = !isJsonView;
}

// Add click event listener
toggleButton.addEventListener("click", toggleView);

// Inject the script when the content script loads
injectScript();
