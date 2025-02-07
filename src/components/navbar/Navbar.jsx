import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <a href="#">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="/vpncenteral.png"
            width={50}
            height={50}
            alt=""
          />
        </a>

        <div className="social">
          <a href="#">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="/facebook.png"
              alt=""
            />
          </a>
          <a href="#">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="/instagram.png"
              alt=""
            />
          </a>
          <a href="#">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="/github.png"
              alt=""
            />
          </a>
          <a href="#">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="/dribbble.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
