// Import any needed modules.
var { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

async function onLoad(activatedWhileWindowOpen) {
  // WL.injectCSS("chrome://smarttemplate4/content/skin/smartTemplate-overlay.css");
  WL.injectCSS("chrome://Smarttemplate4/content/skin/st-toolbar-overlay.css");
}

async function onUnload(isAddOnShutDown) {
  
}
