class MyButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['variant', 'size', 'disabled'];
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const variant = this.getAttribute('variant') || 'primary';
        const size = this.getAttribute('size') || 'medium';
        const isDisabled = this.hasAttribute('disabled');

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
                
                transition: all 0.2s ease-in-out;
                
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            
            button:hover:not(:disabled) {
                filter: brightness(110%);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                transform: translateY(-1px);
            }

            button:active:not(:disabled) {
                transform: translateY(0px);
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            }

            button:focus-visible {
                box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
            }

            .small { padding: 6px 14px; font-size: 12px; }
            .medium { padding: 10px 22px; font-size: 14px; }
            .large { padding: 16px 36px; font-size: 18px; }

            .primary { background-color: #007bff; color: white; }
            .secondary { background-color: #6c757d; color: white; }
            .danger { background-color: #dc3545; color: white; }

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

customElements.define('my-button', MyButton);
