import React from "react";
import socialLinks from "../../utils/socialLinks";

const ContactForm = () => {
  return (
    <div className="container-fluid contact py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-12 col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="pb-5">
                <h4 className="text-primary">Get in Touch</h4>
                <p className="mb-0">
                  Need guidance or support? Feel free to reach out!
                  <br />
                  I’ll respond promptly. Thank you htmlFor your patience.
                </p>
              </div>
              <div className="row g-4 mt-30">
                <div className="col-12">
                  <div className="d-flex justify-content-around bg-light rounded p-4">
                  {socialLinks?.map(item =>
                    <a
                      key={item.path}
                      href={item.path}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-xl-square btn-primary rounded-circle"
                    >
                      <i className={`${item.icon} display-7`} />
                    </a>
                  )}
                   
                  </div>
                </div>
              </div>
          </div>
          <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="bg-light p-5 rounded h-100">
              <h5 className="text-primary mb-4">Share what brings you here, and I’ll respond promptly.</h5>
              <form>
                <div className="row g-4">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0"
                        id="name"
                        placeholder="Last Name"
                      />
                      <label htmlFor="name">Last Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control border-0"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input
                        type="phone"
                        className="form-control border-0"
                        id="phone"
                        placeholder="Phone"
                      />
                      <label htmlFor="phone">Your Phone</label>
                    </div>
                  </div>
                 
               
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control border-0"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "160px" }}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3 send-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
