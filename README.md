# ExtensionKit.io Starter Template

Template last updated: January 30, 2023

## Overview

This template comes ready with Manifest V3 support.

## Developing with the template

1. Navigate to `chrome://extensions` in your browser
2. Ensure `Developer mode` is `enabled` (top right)
3. Click `Load unpacked` in the top left
4. Select the folder for this extension template only

After completing the above steps, you should see the developer, unpacked version appear in your extension list as well as the extension icon appear in your browser bar alongside the other extensions you may have installed.

### Styling

There are temporary styles in `css/content.css` that gets injected to every page matched in the `manifest.json`. You can add as many style sheets as you want in the manifest.

### JavaScript

There is temporary JS in `js/content.js` that gets injected to every page matched in the `manifest.json`. You can add as many scripts as you want in the manifest.

### Manifest

The manifest file is located in the root of the project in `manifest.json` and controls how the extension should behave.

### Extension icons

All extension icons live in the `/icons` folder in the root of the project. Any additional icon sizes you add in here can be referenced relative to an `icons` folder in the manifest like the following:

```json
"icons": {
  "128": "icons/icon.png"
},
```

## Preparing to publish

To prepare this template for publishing, add all the contents of this folder to a `.zip` file, including the `manifest.json`. Keep in mind, with every new publish of the same extension, you will need to bump the manifest `version` number up.

## Manifest explained

The key sections of the manifest with this template are:

### Content Scripts

```
"content_scripts": [
  {
    "matches": ["https://www.google.com/"],
    "css": ["css/content.css"],
    "js": ["js/content.js"]
  }
]
```

This portion of the manifest is used to define all the content scripts for each match, as you can provide multiple. In the example above, we are looking for matches to `https://www.google.com` and when matched (i.e. when you visit the page), load `css/content.css` and `js/content.js`. You can also provide wildcards for the matching, such as `"matches": ["https://*.google.com"]`.

## Need additional help?

Check out the FAQs and documentation on the dashboard for additional help. If you're still having difficulties, please create a ticket.
