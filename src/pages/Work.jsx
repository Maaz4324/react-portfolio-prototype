import React from "react";
import "../style/Work.css";
import blockchain_icon from "../images/blockchain_icon.png";
import webdev from "../images/web-development.png";
import { motion } from "framer-motion";

function Work() {
  return (
    <div className="work_container">
      <div className="work">
        <div className="work_head">
          <h1>What I do</h1>
        </div>
        <div className="work_card">
          <motion.div
            className="card_webdev card"
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#ffff",
              color: "#000000",
            }}
            transition={{ duration: 0.6 }}
          >
            <img src={webdev} alt="" />
            <h2>Frontend web development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              asperiores odit deleniti nesciunt neque incidunt totam cum facilis
              temporibus. Nobis animi vitae necessitatibus ut voluptatibus illo,
              nam autem quo exercitationem!
            </p>
          </motion.div>
          <motion.div
            className="card_dapp card"
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#ffff",
              color: "#000000",
            }}
            transition={{ duration: 0.6 }}
          >
            <img src={blockchain_icon} alt="" />
            <h2>Blockchain development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              nostrum, suscipit cumque accusamus obcaecati nesciunt totam nemo
              vitae culpa! Cupiditate distinctio nemo totam fugit aut recusandae
              laborum dolorum non iste.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Work;
