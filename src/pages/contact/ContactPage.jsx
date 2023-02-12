import { useState } from "react";
import * as api from "../../api";

export function ContactPage() {
  const [wasSent, setWasSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    api.makeContact(Object.fromEntries(formData));
    form.reset();

    // show a
    setWasSent(true);
    setTimeout(() => {
      setWasSent(false);
    }, 2000);
  };
  return (
    <div className="page">
      <h1>Contact</h1>
      <p className={`alert ${wasSent ? "show" : ""}`}>
        <b>Message sent</b>
      </p>
      <p>
        Please send us a detailed message if you&apos;d like to get in touch to
        ask questions about any of our dog grooming services, or anything at
        all.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          required
          id="email"
          type="email"
          name="email"
          placeholder="youremail@youremail.com"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          placeholder="Please let us know what you want answered and we will try to help"
        />
        <div>
          <button type="submit">Contact</button>
        </div>
      </form>
    </div>
  );
}
