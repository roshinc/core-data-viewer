# Core Data JSON Viewer Chrome Extension

A Chrome extension that allows toggling between the rendered view of a webpage and a full-featured JSON viewer for pages that declare their data in a `coreData` variable. Perfect for debugging and inspecting data structures on locally served pages.

## Features

- 🔄 Toggle between rendered page and JSON view
- 🎨 Syntax highlighting
- 🔍 Advanced search functionality (JSONPath supported)
- 🌳 Multiple view modes:
  - Tree view
  - Code view
  - Text view
  - Form view
- 📊 Sort and transform capabilities
- 🔎 Navigation and inspection tools
- 🎯 Path information
- ⚡ Fast performance with large JSON structures

## Installation

### Developer Mode Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the extension directory

## Usage

1. Navigate to your localhost page that contains a `coreData` variable
2. Click the "Toggle JSON View" button in the top right corner of the page
3. Use the JSON editor's features:
   - Press `Ctrl+F` / `Cmd+F` to search
   - Use the mode dropdown to switch between different views
   - Click the expand/collapse icons to navigate the JSON structure
   - Use the navigation bar to track your current path
   - Sort arrays and objects using the sort button
   - Transform JSON data using the transform button

## Dependencies

- [JSONEditor](https://github.com/josdejong/jsoneditor) - Used for JSON visualization and manipulation
