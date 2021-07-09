import * as React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact me</h2>
      <form action="https://formspree.io/f/xjvjoneb" method="POST">
        <input type="text" name="_replytoname" placeholder="Name" />
        <input type="email" name="_replytoemail" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
