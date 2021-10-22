import React from "react";
import Logo from "../Header/img/logo-teste.png";
import InstagramLogo from "../Footer/img/instagram.png"
import WhatsAppLogo from "../Footer/img/whatsapp.png"

const Header = () => (
  <header>

    <div className="container">
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <img className="img-fluid" src={Logo} alt="Logo O Carioca Web" />
                      <h3 className="text-left">Desenvolvido por CariocaWeb</h3>

                    <div className="menu">
                          <ul class="nav">
                          <li class="nav-item">
                            <a class="nav-link active text-uppercase" aria-current="page" href="#">Home</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-uppercase" href="#">Contato</a>
                          </li>
                        </ul>

                    </div>
                </div>
                
                  <div id="box-header-2" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                      <img className="img-fluid instagramLogoFooter pull-right" src={InstagramLogo} alt="Logo Instagram" />
                      <img className="img-fluid whatsappLogoFooter pull-right" src={WhatsAppLogo} alt="Logo Instagram" /> 
                  </div>
            <div>                 
        </div>             
    </div>
</div>

</header>
)

export default Header
