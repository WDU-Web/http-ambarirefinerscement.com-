class Counter extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `      <section class="counter-up-section">
      <div class="container">
          <div class="counter-wrapper">
              <div class="counter-item wow fadeInUp" data-wow-delay=".3s">
                  <div class="counter-header">
                      <i class="flaticon-call-center"></i>
                      <h2 class="title">
                         No  :  <span class="counter">1 </span>
                      </h2>
                  </div>
                  <p>UltraTech Cement Quality</p>
              </div>
              <div class="counter-item wow fadeInUp" data-wow-delay=".3s">
                  <div class="counter-header">
                      <i class="flaticon-happiness"></i>
                      <h2 class="title">
                          <span class="counter">35</span>k
                      </h2>
                  </div>
                  <p>happy customers</p>
              </div>
              <div class="counter-item wow fadeInUp" data-wow-delay=".3s">
                  <div class="counter-header">
                      <i class="flaticon-project"></i>
                      <h2 class="title">
                          <span class="counter">230</span>
                      </h2>
                  </div>
                  <p>Customer User Experience</p>
              </div>
              <div class="counter-item wow fadeInUp" data-wow-delay=".3s">
                  <div class="counter-header">
                      <i class="flaticon-collaboration"></i>
                      <h2 class="title">
                          <span class="counter">80</span> %
                      </h2>
                  </div>
                  <p>market reach </p>
              </div>
          </div>
      </div>
  </section>
      `;
    }
  }
  
  customElements.define('counter-component', Counter);