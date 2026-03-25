/**
 * UI Component Library v1.0
 * A framework-agnostic button with multiple variations.
 */

class MyButton extends HTMLElement {
    constructor() {
        super();
        // Encapsulation: Creates a private scope so styles don't leak out
        this.attachShadow({ mode: 'open' });
    }

    // Runs when the component is added to the DOM
    connectedCallback() {
        this.render();
    }

    // Tells the browser which attributes to watch for changes
    static get observedAttributes() {
        return ['variant', 'size', 'disabled'];
    }

    // Re-renders the button if an attribute (like variant) is changed via JS
    attributeChangedCallback() {
        this.render();
    }

    render() {
        // 1. Get properties or set defaults
        const variant = this.getAttribute('variant') || 'primary';
        const size = this.getAttribute('size') || 'medium';
        const isDisabled = this.hasAttribute('disabled');

        // 2. Define Internal HTML & Scoped CSS
        this.shadowRoot.innerHTML = `
        <style>
            button {
                font-family: 'Segoe UI', system-ui, sans-serif;
                border: none;
                border-radius: 6px;
                font-weight: 600;
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                outline: none;
                
                /* Smooth transition for hover effects */
                transition: all 0.2s ease-in-out;
                
                /* Base Shadow */
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            /* --- INTERACTIVE STATES --- */
            
            /* Hover: Highlight and Shadow effect */
            button:hover:not(:disabled) {
                filter: brightness(110%);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                transform: translateY(-1px); /* Subtle lift */
            }

            /* Active: Click effect */
            button:active:not(:disabled) {
                transform: translateY(0px);
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            }

            /* Focus: Keyboard navigation highlight */
            button:focus-visible {
                box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
            }

            /* --- VARIATIONS: SIZES --- */
            .small { padding: 6px 14px; font-size: 12px; }
            .medium { padding: 10px 22px; font-size: 14px; }
            .large { padding: 16px 36px; font-size: 18px; }

            /* --- VARIATIONS: COLORS (VARIANTS) --- */
            .primary { background-color: #007bff; color: white; }
            .secondary { background-color: #6c757d; color: white; }
            .danger { background-color: #dc3545; color: white; }

            /* --- STATE: DISABLED --- */
            button:disabled { 
                background-color: #e9ecef; 
                color: #adb5bd; 
                cursor: not-allowed; 
                box-shadow: none;
                transform: none;
            }
        </style>
        
        <button class="${variant} ${size}" ${isDisabled ? 'disabled' : ''}>
            <slot></slot> </button>
        `;
    }
}

// Register the custom tag <my-button>
customElements.define('my-button', MyButton);