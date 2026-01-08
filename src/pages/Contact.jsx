import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaUser,
  FaEnvelope,
  FaPenFancy,
  FaPaperPlane,
  FaCommentDots,
} from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        formRef.current.reset();
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to send message");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* MAIN CONTENT */}
        <div className="glass grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          {/* LEFT TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className=""
          >
            <div className=" p-8 h-full flex flex-col justify-center">
              <h3 className="flex items-center gap-3 text-3xl font-bold text-white mb-4">
                <FaPaperPlane className="text-cyan-400 w-7 h-7" />
                Get In <span className="text-cyan-400">Touch</span>
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                I’m currently open to new opportunities, freelance work, and
                collaborative projects. If you have an idea, a question, or just
                want to say hello — feel free to reach out.
              </p>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  Open to full-time & freelance roles
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Quick response via email
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                  Passionate about clean, scalable code
                </li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="gradient-border m-7"
          >
            <div className="glass p-8 h-full">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* NAME */}
                <div className="relative">
                  <FaUser className="absolute top-3.5 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                {/* EMAIL */}
                <div className="relative">
                  <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                {/* SUBJECT */}
                <div className="relative">
                  <FaPenFancy className="absolute top-3.5 left-3 text-gray-400" />
                  <input
                    type="text"
                    name="title"
                    required
                    placeholder="Subject"
                    className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                {/* MESSAGE */}
                <div className="relative">
                  <FaCommentDots className="absolute top-3.5 left-3 text-gray-400" />
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Your Message"
                    className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-linear-to-r from-cyan-400 to-purple-500 text-black font-semibold transition hover:opacity-90"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
