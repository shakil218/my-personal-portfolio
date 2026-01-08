// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer>
      <div className="glass px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white">Shakil</h3>
              <p className="text-gray-400 mt-2 max-w-sm">
                MERN Stack Developer crafting modern, scalable web applications.
              </p>
            </motion.div>

            {/* CENTER */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center  gap-6 text-gray-300"
            >
              <li>
                <HashLink smooth to="#home" className="hover:text-cyan-400">
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#about" className="hover:text-cyan-400">
                  About
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#skills" className="hover:text-cyan-400">
                  Skills
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="#contact" className="hover:text-cyan-400">
                  Contact
                </HashLink>
              </li>
            </motion.ul>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-end gap-5"
            >
              <Link
                to={"https://github.com/shakil218"}
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transition text-xl"
              >
                <FaGithub />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transition text-xl"
              >
                <FaLinkedin />
              </Link>
              <Link
                to={"https://www.facebook.com/rabiulhasan.shakil"}
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transition text-xl"
              >
                <FaFacebook />
              </Link>
              <Link
                to={"mailto:your@email.com"}
                className="text-gray-400 hover:text-cyan-400 transition text-xl"
              >
                <FaEnvelope />
              </Link>
            </motion.div>
          </div>

          <div className="border-t border-slate-700 my-8"></div>

          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Shakil. All rights reserved.
          </p>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
