import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={`${styles.footer_container} footer-section`}>
        <h1 className={styles.contact_us_heading}>Contact Us</h1>
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5521153271525!2d77.3855839!3d28.5231201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce89f5ee7f7bb%3A0x81a6341e2a994fbb!2sHari%20Om%20Motors%20Driving%20Training%20School%2C%20Best%20Driving%20School%20in%20Noida!5e0!3m2!1sen!2sin!4v1708809733708!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-3 col-md-3 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>1010 Avenue, sw 54321, chandigarh</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <a href="tel:9876543210">+91-9876543210</a>
                    <br />
                    <a href="tel:9876543210">+91-9876543210</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-3 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Business Hours</h4>
                    <div>
                      <div>
                        <span>Mon : </span>
                        <span>6 AM - 9 PM</span>
                      </div>
                      <div>
                        <span>Tue : </span>
                        <span>6 AM - 9 PM</span>
                      </div>
                      <div>
                        <span>Wed : </span>
                        <span>6 AM - 9 PM</span>
                      </div>
                      <div>
                        <span>Thu : </span>
                        <span>6 AM - 9 PM</span>
                      </div>
                      <div>
                        <span>Fri : </span>
                        <span>6 AM - 9 PM</span>
                      </div>
                      <div>
                        <span>Sat : </span>
                        <span>6 AM - 9 PM</span>
                      </div>
                      <div>
                        <span>Sun : </span>
                        <span>6 AM - 9 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright_container}>
          <p>
            Copyright &copy; 2018, All Right Reserved{" "}
            <a href="https://codepen.io/anupkumar92/">
              @HariomMotorDrivingSchool
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
