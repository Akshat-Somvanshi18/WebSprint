import React from "react";

const Footer = () => {
  return (
    <>
    <section className="">
      <section className="d-flex flex-column align-items-center py-5" id="FooterSection1">
        <h1 className="fw-bold">Subscribe To</h1>
        <h1 className="fw-bold">Our Newsletter</h1>
        <h4 id="FooterDesc" className="text-center py-4">
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
          consectetu Lorem ipsum 
        </h4>
        <button id="FooterBtn">Subscribe</button>
      </section>
      <section className="d-flex align-items-center justify-content-evenly pt-5" id="MainFooter">
        <div>
            <h4 className="py-4 d-flex flex-column text-light">Product</h4>
            <h5><a href="#">For Individual</a></h5>
            <h5><a href="#">For Children</a></h5>
            <h5><a href="#">For Enterprises</a></h5>
        </div>
        <div>
            <h4 className="py-4 d-flex flex-column text-light">Company</h4>
            <h5><a href="#">About Us</a></h5>
            <h5><a href="#">Blogs</a></h5>
            <h5><a href="#">Terms & Condition</a></h5>
        </div>
        <div>
            <h4 className="py-4 d-flex flex-column text-light">Follow Us</h4>
            <h5><a href="#"><a href="#" class="fa fa-facebook pe-2"></a>Facebook</a></h5>
            <h5><a href="#"><a href="#" class="fa fa-instagram pe-2"></a>Instagram</a></h5>
            <h5><a href="#"><a href="#" class="fa fa-twitter pe-2"></a>Twitter</a></h5>
        </div>
        <img src="./images/FooterImg2.svg" alt="..." id="FooterImg2"/>
      </section>
      <h5 className="copyright pb-5">2023, All Rights Reserved</h5>
      </section>
    </>
  );
};

export default Footer;
