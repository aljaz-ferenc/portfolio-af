import "./Contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <form name="contact" netlify netlify-honeypot="bot-field">
        <h2>Contact</h2>
        <h3>Say hello! 👋</h3>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
