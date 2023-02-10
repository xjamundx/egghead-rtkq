import * as api from "../../api";

export function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    api.makeContact(Object.fromEntries(formData));
  };
  return (
    <div className="page">
      <h1>Contact</h1>
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
        <label htmlFor="subject">Subject: </label>
        <input
          required
          type="text"
          id="subject"
          name="subject"
          placeholder="Short subject line..."
        />
        <label htmlFor="contents">Services:</label>
        <textarea
          required
          id="contents"
          name="contents"
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
