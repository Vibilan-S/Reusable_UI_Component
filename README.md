# Simple UI Component Library v1.0

A lightweight, framework-agnostic button component built using **Vanilla Web Components**. This library is designed to be "Write Once, Run Anywhere"—it works in React, Angular, Vue, or plain HTML/CSS projects without any dependencies.

## 🚀 Features

- **Zero Dependencies:** Built using native browser APIs (Custom Elements & Shadow DOM).
- **CSS Encapsulation:** Styles are scoped internally so they won't conflict with global project CSS.
- **Reactive Variations:** Supports multiple sizes and color variants via HTML attributes.
- **Interactive UX:** Includes smooth transitions for hover, active, and focus states with dynamic highlighting and shadows.

---

## 📦 How to Use

1. **Include the Library:**
   Add the JavaScript file to your HTML `<head>`:
   ```html
   <script src="ui-components.js"></script>
   ```

2. **Use the Component:**
   Simply use the `<my-button>` tag anywhere in your HTML:
   ```html
   <my-button variant="primary" size="medium">Click Me</my-button>
   ```

---

## 🎨 Available Variations

### 1. Variants (`variant`)
| Attribute Value | Description |
| :--- | :--- |
| `primary` | Standard blue action button (Default) |
| `secondary` | Gray neutral button |
| `danger` | Red button for destructive actions |

### 2. Sizes (`size`)
| Attribute Value | Description |
| :--- | :--- |
| `small` | Compact padding and font |
| `medium` | Standard sizing (Default) |
| `large` | Increased padding and font for CTAs |

### 3. States
| Attribute | Effect |
| :--- | :--- |
| `disabled` | Grays out the button and disables all pointer events. |
| `hover` | (Automatic) Increases brightness and adds a lift shadow. |

---

## 🛠️ Technical Implementation Details

- **Custom Elements API:** Extends `HTMLElement` to create a valid, semantic custom tag.
- **Shadow DOM:** Initialized in `open` mode to ensure complete style isolation.
- **Lifecycle Hooks:** Uses `observedAttributes` and `attributeChangedCallback` to ensure the UI updates instantly when properties are changed via JavaScript.
- **Flexbox Layout:** The demo page utilizes CSS Flexbox for clean, responsive alignment of component variations.

---

## 📂 Project Structure
- `ui-components.js`: The core logic and styling for the Web Components.
- `index.html`: A demonstration gallery showing all component states and variations.
- `README.md`: Documentation for the library.
