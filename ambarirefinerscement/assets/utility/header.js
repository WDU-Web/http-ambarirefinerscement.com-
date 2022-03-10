class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = ` <header>
    <div class="header-top d-none d-md-block bg-theme">
        <div class="container">
            <div class="header-top-wrapper">
                <div class="row">
                    <div class="col-md-8">
                        <ul>
                            <li class="mr-3">
                                <a href="Tel:839394845"><i class="fas fa-phone-square"></i>+91 96634 35276</a>
                            </li>
                          
                        </ul>
                    </div>
                    <div class="col-md-4 d-flex flex-wrap align-items-center justify-content-end">
                        <ul class="social">
                            <li>
                                <a href="#0">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header-bottom">
        <div class="container">
            <div class="header-area">
               <p style="font-size: large; color: #1D112b; text-align: center;"> <b>Ambari Refiners Cement <br> </b> </p>
                <ul class="menu">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                    <a href="product_details.html">Product Details</a>
                </li>
                <li>
                    <a href="#0">Cement</a>
                </li>
                <li>
                    <a href="#0">Cement Types</a>
                </li>
                <li>
                <a href="#0">Cement Grade</a>
            </li>
            <li>
            <a href="#0">Cement Test</a>
        </li>
        <li>
        <a href="#0">FAQ</a>
    </li>
                  <li>
                        <a href="contact.html">Contact Us</a>
                    </li>
                </ul>
                <div class="header-bar d-lg-none">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="select-bar-bar">
                    <i class="fas fa-ellipsis-v"></i>
                </div>
               
            </div>
        </div>
    </div>
</header>
      `;
  }
}

customElements.define("header-component", Header);
