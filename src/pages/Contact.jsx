import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "../assets/contact.jpg"

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-14">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        {/* 🔥 SPLIT CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

          {/* ================= LEFT SIDE ================= */}
          <div className="gradient-border">
            <div className="glass p-6 h-full flex items-center justify-center">
              <img
                src={contact}
                alt="Contact Illustration"
                className="max-w-full h-full rounded-xl opacity-90"
              />
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="gradient-border">
            <div className="glass p-8 h-full flex flex-col">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-cyan-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-cyan-400"
                />

                <input
                  type="text"
                  name="title"
                  placeholder="Subject"
                  required
                  className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-cyan-400"
                />

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-cyan-400"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-linear-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:opacity-90 transition"
                >
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
