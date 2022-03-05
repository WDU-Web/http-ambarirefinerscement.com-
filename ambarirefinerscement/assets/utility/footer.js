class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `    <footer>
      <div class="footer-top padding-top padding-bottom">
          <div class="container">
              <div class="row mb-50-none">
                  <div class="col-sm-6 col-lg-4">
                      <div class="footer-widget footer-link">
                          <h5 class="title">Corporate office</h5>
                         <address style="text-align: justify;"> Ambari Refiners Cement <br>
                          Plot / Street / Area GHATENKANIVE, BH ROAD, MC HALLI POST, TARIKERE Tarikere

                          (District Chikmagalur) <br> Karnataka, India-577228</address>
                      </div>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                      <div class="footer-widget footer-link">
                           <h5 class="title">Website Overview</h5>
                          <ul>
                              <li>
                                  <a href="#0">about</a>
                              </li>
                              <li>
                                  <a href="#0">product</a>
                              </li>
                              <li>
                                  <a href="#0">privacy</a>
                              </li>
                              <li>
                                  <a href="#0">Terms</a>
                              </li>
                              <li>
                                  <a href="#0">contact page</a>
                              </li>
                           
                          </ul> 
                      </div>
                  </div>
    
                  <div class="col-sm-6 col-lg-4">
                      <div class="footer-widget footer-about">
                          <h5 class="title">Contact us</h5>
                          <a href="tel: +91 96634 35276">+91 96634 35276</a> <br><br>
                          <a href="mail:">mail</a> <br><br>
                          <ul class="footer-social">
                              <li>
                                  <a href="#0"><i class="fab fa-facebook-f"></i></a>
                              </li>
                              <li>
                                  <a href="#0"><i class="fab fa-twitter"></i></a>
                              </li>
                              <li>
                                  <a href="#0"><i class="fab fa-instagram"></i></a>
                              </li>
                              <li>
                                  <a href="#0"><i class="fab fa-linkedin-in"></i></a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="footer-bottom py-3 py-sm-4 text-center">
          <div class="container">
              <p class="m-0"> <a href="https://wedigitizeu.com/">Powered By We Digitize U</a></p>
          </div>
      </div>
  </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);