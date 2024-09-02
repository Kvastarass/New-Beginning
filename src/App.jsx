import { useState, useEffect } from "react";
import "./App.css";
import "./checkbox.css";

// to review:
// react hooks: https://reactjs.org/docs/hooks-intro.html
// useEffect: https://reactjs.org/docs/hooks-effect.html
// useState: https://reactjs.org/docs/hooks-state.html
// component lifecycle: https://reactjs.org/docs/state-and-lifecycle.html
// terenary operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// to do:
// implement close button in contact us modal

function App() {
  const [isContactUsOpen, setContactUsOpen] = useState(false);
  // below we're gonna initialte state
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [contactUsEmail, setContactUsEmail] = useState("");
  const [contactUsName, setContactUsName] = useState("");
  const [contactUsMessage, setContactUsMessage] = useState("");
  const [contactUsSubmit, setContactUsSubmit] = useState("");

  const handleOpen = () => {
    if (!isContactUsOpen) {
      setContactUsOpen(true);
      // document.body.classList.add("no-scroll");
    }
  };

  const handleClose = () => {
    setContactUsOpen(false);
    // document.body.classList.remove("no-scroll")
  };

  const handleEscape = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("contact-us-container")) {
      handleClose();
    }
  };

  useEffect(() => {
    (async function () {
      const response = await fetch("/api/content");
      const data = await response.json();
      // we're gonna take each property from the response in data variable and store to state we initiated before!!!
      setTitle(data.title);
      setText(data.paragraph);
      setContactUsEmail(data.contactUsLabels.email);
      setContactUsName(data.contactUsLabels.name);
      setContactUsMessage(data.contactUsLabels.message);
      setContactUsSubmit(data.contactUsLabels.submit);
      console.log(data);
    })();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <main>
      <h1 className="text-huge text-center">{title}</h1>
      <div className="flex-center mb-20">
        <img
          className="profile-pic"
          src="Tony.jpg"
          alt="succsessful wealthy man"
        />
      </div>
      <p className="info mb-20">{text}</p>
      <div className="flex-center">
        <button onClick={handleOpen} className="btn" type="button">
          Contact Us
        </button>
      </div>
      <div
        className={`contact-us-container flex-center ${
          !isContactUsOpen ? "hidden" : ""
        }`}
        onClick={handleOutsideClick}
      >
        <fieldset className={`contact-us flex-center flex-column`}>
          <legend align="center">Contact us</legend>
          <button
            onClick={handleClose}
            className="close-contact-btn"
            type="button"
          >
            <div className="deg45">+</div>
          </button>
          <label htmlFor="name">{contactUsName}</label>
          <input type="Name" id="name" />
          <div className="spam">
            <label htmlFor="email" className="text-center" align="center">
              {contactUsEmail}
            </label>
            <input type="email" id="email" placeholder="" />
            <div className="flex-center mb-10">
              <div className="checkbox-wrapper-5">
                <div className="check">
                  <input id="check-5" type="checkbox" />
                  <label htmlFor="check-5"></label>
                </div>
              </div>
              <label htmlFor="check-5">Subscribe htmlFor more spam</label>
            </div>
          </div>
          <label htmlFor="phone" className="text-center">
            Enter your phone number:
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="+380XX-XXX-XX-XX"
          />
          <label htmlFor="txt-area">{contactUsMessage}</label>
          <textarea
            name="Enter you message"
            id="txt-area"
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={handleClose} className="btn" type="button">
            {contactUsSubmit}
          </button>
        </fieldset>
      </div>
    </main>
  );
}

export default App;
