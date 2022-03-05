class Call extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = ` 
      <a href="tel:+91 96634 35276"class="custom-button active">Call Us</a>

        `;
    }
  }
  
  customElements.define("call-component", Call);
  