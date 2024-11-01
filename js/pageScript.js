// pageScript.js
function extractCoreData() {
  const coreData = window.coreData;
  if (coreData) {
    window.postMessage(
      { type: "CORE_DATA_EXTRACTED", data: window.coreData },
      "*"
    );
  } else {
    console.error("coreData is not defined on the page.");
  }
}
extractCoreData();
