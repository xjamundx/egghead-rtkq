import { useState } from "react";
import { useMakeContactMutation } from "../../store/apiSlice";

export function ContactPage() {
  const [wasSent, setWasSent] = useState(false);
  const [makeContact] = useMakeContactMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    makeContact(Object.fromEntries(formData));
    form.reset();

    // show an alert when the message sends
    setWasSent(true);
    setTimeout(() => {
      setWasSent(false);
    }, 2000);
  };

  // ...
}
