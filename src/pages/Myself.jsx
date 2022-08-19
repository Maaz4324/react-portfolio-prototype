import React, { useState } from "react";
import { motion } from "framer-motion";
import "../style/Myself.css";
import engineer from "../images/engineer2.jpg";
import freelancer from "../images/freelancer.jpg";
import webDev from "../images/webdevelopment.jpg";
import designer from "../images/designer.jpg";
import blockchain from "../images/blockchain.jpg";

function Myself() {
  const [background, setBackground] = useState(designer);

  return (
    <motion.div className="myself_container" id="aboutme">
      <motion.div className="myself_txt">
        <motion.div
          className="myself-info-container"
          initial={{ x: 500 }}
          // whileHover={{ scale: 1.1 }}
          // transition={{ duration: 1 }}
          whileInView={{ x: 0 }}
        >
          <div className="myself_txt_head">
            <h1>
              I'm <span> Maaz Hamed</span>,
            </h1>
          </div>
          <div className="myself_txt_info">
            <h4>
              a 19 years old{" "}
              <motion.span whileHover={() => setBackground(engineer)}>
                engineer
              </motion.span>
              ,{" "}
              <motion.span whileHover={() => setBackground(designer)}>
                designer
              </motion.span>
              , frontend website, and{" "}
              <motion.span whileHover={() => console.log("blockchain")}>
                blockchain{" "}
              </motion.span>
              developer. I currently live in India. I've just started my
              freelancing journey, pretty new to the field. I love making
              projects related to blockchain technology and dapp, and I also
              have a keen interest in Artificial Intelligence and machine
              learning. There are a few projects based on machine learning in my
              portfolio.
            </h4>
          </div>
          <div className="myself_btn btn">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8, backgroundColor: "#5b3cb1" }}
            >
              See more
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="myself_img">
        <img src="" alt="" />
      </motion.div>
    </motion.div>
  );
}

export default Myself;
