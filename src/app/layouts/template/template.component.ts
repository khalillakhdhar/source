import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template",
  template: `<div class="preloader">
      <div class="preloader-inner">
        <div class="preloader-icon">
          <span></span>
          <span></span>
        </div>
        <!-- /preloader-icon -->
      </div>
      <!-- /preloader-inner -->
    </div>
    <!-- /preloader -->
    <header class="site-header">
      <div class="header-top-navbar">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="top-navbar-left">
                <ul class="info">
                  <li class="info-date">
                    <span class="fa fa-envelope"></span> Email:
                    <a
                      href="contact@protech-it.org
                              "
                      >contact@protech-it.org
                    </a>
                  </li>
                  <li class="temperature">
                    <span class="fa fa-phone"></span>Appelez nous:
                  </li>
                </ul>
              </div>
              <!--~./ top-navbar-left ~-->
            </div>
            <div class="col-lg-5">
              <div class="top-navbar-right">
                <div class="header-social-area">
                  <ul class="header-social-share">
                    <li>
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-google-plus-g"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-instagram"></i></a>
                    </li>
                  </ul>
                  <!--~./ social-share ~-->
                </div>
                <div class="user-registration-area">
                  <a class="user-reg-btn" href="/signin">
                    <span class="icon-user-1"></span>
                    Connexion/Déconnexion
                  </a>
                </div>
              </div>
              <!--~./ top-navbar-right ~-->
            </div>
          </div>
        </div>
      </div>
      <!-- /.header-top-navbar -->

      <div class="site-navigation">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="navbar navbar-expand-lg navigation-area">
                <!-- Site Branding -->
                <div class="site-branding">
                  <a class="site-logo" href="/home">
                    <img src="assets/images/logo/logo.png" alt="Site Logo" />
                  </a>
                </div>
                <!-- /.site-branding -->
                <div class="mainmenu-area">
                  <nav class="menu">
                    <ul id="nav">
                      <li><a class="active" href="/home">Accueil</a></li>
                      <li><a href="/about">A propos</a></li>
                      <li>
                        <a href="enchres">Enchéres</a>
                      </li>

                      <li>
                        <a href="http://localhost:4201/login">Espace vendeur</a>
                      </li>
                    </ul>
                    <!-- /.menu-list -->
                  </nav>
                  <!--/.menu-->
                  <div class="header-navigation-right">
                    <div class="search-wrap">
                      <div class="search-btn">
                        <i class="fas fa-search"></i>
                      </div>
                      <div class="search-form">
                        <form action="#">
                          <input type="search" placeholder="rechercher" />
                          <button type="submit">
                            <i class="fas fa-search"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                    <!--~./ search-wrap ~-->
                  </div>
                </div>
                <!--~./ mainmenu-wrap ~-->
              </div>
              <!--~./ navigation-area ~-->
            </div>
            <!--  /.col-12 -->
          </div>
          <!--  /.row -->
        </div>
      </div>
      <!-- /.site-navigation -->

      <div class="mobile-menu-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <!--~~~~~~~ Start Mobile Menu ~~~~~~~~-->
              <div class="mobile-menu">
                <a class="mobile-logo" href="/home">
                  <img src="assets/images/logo/logo.png" alt="logo" />
                </a>
              </div>
              <!--~~./ end mobile menu ~~-->
            </div>
            <!--  /.col-12 -->
          </div>
          <!--  /.row -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.mobile-menu-area -->
    </header>
    <!--~~./ end site header ~~-->
    <div id="sticky-header"></div>
    <!--~./ end sticky header ~-->

    <router-outlet></router-outlet>
    <footer class="site-footer pd-t-120">
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Footer Widget Area
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <div class="footer-widget-area">
        <div class="container">
          <div class="row">
            <!--~~~~~ Start Widget About us ~~~~~-->
            <div class="col-lg-4">
              <aside class="widget widget_about">
                <h2 class="widget-title">About Us</h2>
                <div class="widget-content">
                  <p>
                    Dempor pede libero dapi useu class venenatis ut bibendum
                    quam ut nibh necnullam. Nonhon Pede mollis vel vitae
                    dolorurpis
                  </p>
                  <div class="contact-info">
                    <div class="icon">
                      <span class="icon-paperplane"></span>
                    </div>
                    <div class="info">
                      <p></p>
                    </div>
                  </div>
                  <!-- /.contact-info -->
                  <div class="contact-info">
                    <div class="icon">
                      <span class="icon-phone2"></span>
                    </div>
                    <div class="info">
                      <p></p>
                    </div>
                  </div>
                  <!-- /.contact-info -->
                  <div class="contact-info">
                    <div class="icon">
                      <span class="icon-mail5"></span>
                    </div>
                    <div class="info">
                      <p>
                        <a href="mailto:contact@protech-it.org"
                          >mailto:contact@protech-it.org</a
                        >
                      </p>
                    </div>
                  </div>
                  <!-- /.contact-info -->
                </div>
              </aside>
            </div>
            <!--~./ end about us widget ~-->

            <!--~~~~~ Start Widget Links ~~~~~-->
            <div class="col-lg-2">
              <aside class="widget widget_links">
                <h2 class="widget-title">Lien utiles</h2>
                <div class="widget-content">
                  <ul>
                    <li><a href="/signin">Mon profile</a></li>
                    <li><a href="#">Mes enchéres</a></li>
                  </ul>
                </div>
              </aside>
            </div>
            <!--~./ end links widget ~-->

            <!--~~~~~ Start Widget Links ~~~~~-->
            <div class="col-lg-2">
              <aside class="widget widget_links">
                <h2 class="widget-title">Nous connaitre</h2>
                <div class="widget-content">
                  <ul>
                    <li><a href="#">A propos de nous</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </aside>
            </div>
            <!--~./ end links widget ~-->

            <!--~~~~~ Start Widget Links ~~~~~-->
            <div class="col-lg-4">
              <aside class="widget widget_payment">
                <h2 class="widget-title">Payment Option</h2>
                <div class="widget-content">
                  <p>
                    Dempor pede libero dapi useu class venenatis ut bibendum
                    quam ut nibh necnullam. Nonhon Pede mollis vel vitae
                    dolorurpis
                  </p>
                  <div class="payment-barcode-area">
                    <div class="payment-accepted">
                      <img
                        src="assets/images/payment/wallet-logo.png"
                        alt="Wallet"
                      />
                      <p class="title">Accepted Here</p>
                    </div>
                    <div class="barcode-thumb">
                      <img
                        src="assets/images/payment/barcode.png"
                        alt="Bar Code"
                      />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            <!--~./ end payment widget ~-->
          </div>
        </div>
      </div>
      <!--~./ end footer widgets area ~-->

      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Footer Bottom Area
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <div class="footer-bottom-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="copyright-text text-center">
                <p>Copyright © protech-it 2020 . All rights reserved</p>
              </div>
              <!--~./ end copyright text ~-->
            </div>
            <!--~./ col-12 ~-->
          </div>
        </div>
      </div>
      <!--~./ end footer bottom area ~-->
    </footer> `,
})
export class TemplateComponent {}
