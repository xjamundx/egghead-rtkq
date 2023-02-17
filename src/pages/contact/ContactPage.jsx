import { useMakeContactMutation } from "../../store/apiSlice";

export function ContactPage() {
  const [makeContact, { isSuccess, isLoading }] = useMakeContactMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    makeContact(Object.fromEntries(formData));
    form.reset();
  };

  const disabled = isLoading || isSuccess;
  return (
    <div className="page">
      <h1>Contact</h1>
      <p className={`alert ${isSuccess ? "show" : ""}`}>
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
          disabled={disabled}
          required
          id="email"
          type="email"
          name="email"
          placeholder="youremail@youremail.com"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          disabled={disabled}
          required
          id="message"
          name="message"
          rows={5}
          placeholder="Please let us know what you want answered and we will try to help"
        />
        <div>
          <button disabled={disabled} type="submit">
            Contact
          </button>
        </div>
      </form>
    </div>
  );
}
