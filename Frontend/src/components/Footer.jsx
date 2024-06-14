import {} from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <>
      <div id="landing_page_footer_container">
        <hr className="landing_page_footer_hr_1" />
        <div id="landing_page_footer">
          <div className="landing_page_footer_details_section">
            <div className="landing_page_footer_catalog_section">
              <p className="landing_page_footer_titles">CATALOG</p>
              <p className="landing_page_footer_children">Red Wine </p>
              <p className="landing_page_footer_children">Rose wine</p>
              <p className="landing_page_footer_children">White wine</p>
              <p className="landing_page_footer_children">Sparkling wine</p>
              <p className="landing_page_footer_children">Promotions</p>
              <p className="landing_page_footer_children">Set and Gifts</p>
            </div>

            <div className="landing_page_footer_support_section">
              <p className="landing_page_footer_titles">SUPPORT</p>
              <p className="landing_page_footer_children">FAQ </p>
              <p className="landing_page_footer_children">Terms of use</p>
              <p className="landing_page_footer_children">Privacy Policy</p>
              <p className="landing_page_footer_children">
                Delivery and Payment
              </p>
              <p className="landing_page_footer_children">
                Returns and Exchange
              </p>
            </div>

            <div className="landing_page_footer_our_company_section">
              <p className="landing_page_footer_titles">OUR COMPANY</p>
              <p className="landing_page_footer_children">About us</p>
              <p className="landing_page_footer_children">Contact us</p>
              <p className="landing_page_footer_children">Reviews</p>
              <p className="landing_page_footer_children">Blog and News</p>
              <p className="landing_page_footer_children">Loyalty Program</p>
              <p className="landing_page_footer_children">Wine Subscription</p>
            </div>

            <div className="landing_page_footer_contacts_section">
              <div>
                <p className="landing_page_footer_titles">CONTACTS</p>
                <p className="landing_page_footer_children">+91 1234567890</p>
                <p className="landing_page_footer_children">
                  Paypal pioneers.com{" "}
                </p>
              </div>
              <div>
                <p className="landing_page_footer_titles">ADDRESS</p>
                <p className="landing_page_footer_children">Bengulure, India</p>
              </div>
              <div>
                <p className="landing_page_footer_titles">WORKING HOURS</p>
                <p className="landing_page_footer_children">
                  Mon-Fri 9:00-18:00
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="landing_page_footer_titles">
              Subscribe to our newsletter
            </p>
            <p className="landing_page_footer_newsletter_child">
              And get -20% on your first order
            </p>
            <p>
              <input
                className="landing_page_footer_newsletter_input"
                type="text"
                placeholder="example@gmail.com"
              />
            </p>
          </div>
        </div>
        <hr className="landing_page_footer_hr_2" />

        <div className="landing_page_footer_last_child">
          <p><FontAwesomeIcon icon={faStarOfLife} /> We only sell alcohol to adults &nbsp;  </p>
          <p> &nbsp;© 2024 PAYPAL PIONEERS, ALL RIGHTS RESERVED</p>
        </div>
        <hr className="landing_page_footer_hr_3" />
      </div>
    </>
  );
};
