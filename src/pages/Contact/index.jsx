import { Navbar, Footer } from "../../components";
import { Helmet } from "react-helmet";
import { useState } from "react";
import "./index.scss";
import Swal from "sweetalert2";

function Contact() {
  const routePath = "Contact";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendFormPopUp = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Please fill in all the fields!",
        confirmButtonColor: "#6366f1",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your message has been sent successfully!",
      confirmButtonColor: "#6366f1",
    });

    // Clear form after successful submission
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <>
      <Helmet>
        <title>Contact Us - Fake Store | Get In Touch</title>
        <meta
          name="description"
          content="Have questions? Contact Fake Store's customer support team. We're here to help with your inquiries about products, orders, and more."
        />
        <meta
          name="keywords"
          content="contact us, customer support, get in touch, fake store contact, help"
        />
      </Helmet>

      <Navbar path={routePath} />

      <section className="contact-page">
        <div className="container py-5">
          <div className="contact-hero text-center mb-5">
            <h1 className="display-4 mb-4">Get In Touch</h1>
            <p className="lead">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="contact-info-card">
                <div className="info-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h5>Visit Us</h5>
                <p>
                  Nasr City, Cairo
                  <br />
                  Egypt
                </p>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <h5>Email Us</h5>
                <p>support@fakestore.com</p>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <h5>Call Us</h5>
                <p>+20 102 132 5101</p>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="contact-form-card">
                <h3 className="mb-4">Send us a Message</h3>
                <form onSubmit={sendFormPopUp}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Your Email</label>
                      <input
                        type="email"
                        className="form-control custom-input"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="How can we help?"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control custom-input"
                        rows="5"
                        placeholder="Your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-submit">
                        Send Message{" "}
                        <i className="fa-solid fa-paper-plane ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
