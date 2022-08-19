import React, { useState } from "react";
import "../style/Portfolio.css";
import { animate, motion } from "framer-motion";
import gif1 from "../images/alienshoot.gif";
import gif2 from "../images/aquilagif.gif";
import gif3 from "../images/carrace.gif";
import { images } from "../components/PortfolioImages";
import { reactImages } from "../components/ReactImages";
import skyheightz from "../images/skyheightz.png";
import jangirkilla from "../images/jangirkilla.png";

function Portfolio() {
  const [gifDisplay, setGifDisplay] = useState(false);
  const [gifDisplay1, setGifDisplay1] = useState(false);
  const [gifDisplay2, setGifDisplay2] = useState(false);

  return (
    <div className="portfolio_container">
      <div className="portfolio_head">
        <h1>Portfolio</h1>
      </div>
      <div className="gif_portfolio">
        <div className="head_gif">
          <h1>Python Projects</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure
            velit est totam beatae ducimus nam ipsum quasi reprehenderit.
            Voluptas qui atque deserunt unde alias dolorum exercitationem sequi
            quia ea.
          </h4>
        </div>
        <div className="gif_container">
          <motion.div
            className="gif_txt gif_txt_one"
            onMouseEnter={() => setGifDisplay(true)}
            onMouseLeave={() => setGifDisplay(false)}
            animate={
              gifDisplay ? { background: "white" } : { backgroundColor: "none" }
            }
          >
            <motion.div
              className="gif_img_overlay overlay_one"
              animate={gifDisplay ? { display: "block" } : { display: "none" }}
              style={{ color: "black" }}
            >
              <h1>python car</h1>
              <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, fugiat? Exercitationem deleniti provident debitis sit
                expedita deserunt reprehenderit distinctio consequuntur impedit
                atque soluta dolorum sunt architecto rerum, nihil optio magnam!
              </h5>
            </motion.div>
          </motion.div>
          <motion.div
            className="gif_txt gif_txt_two"
            onMouseEnter={() => setGifDisplay1(true)}
            onMouseLeave={() => setGifDisplay1(false)}
            animate={
              gifDisplay1
                ? { background: "white" }
                : { backgroundColor: "none" }
            }
          >
            <motion.div
              className="gif_img_overlay overlay_one"
              animate={gifDisplay1 ? { display: "block" } : { display: "none" }}
              style={{ color: "black" }}
            >
              <h1>python car</h1>
              <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, fugiat? Exercitationem deleniti provident debitis sit
                expedita deserunt reprehenderit distinctio consequuntur impedit
                atque soluta dolorum sunt architecto rerum, nihil optio magnam!
              </h5>
            </motion.div>
          </motion.div>
          <motion.div
            className="gif_txt gif_txt_three"
            onMouseEnter={() => setGifDisplay2(true)}
            onMouseLeave={() => setGifDisplay2(false)}
            animate={
              gifDisplay2
                ? { background: "white" }
                : { backgroundColor: "none" }
            }
          >
            <motion.div
              className="gif_img_overlay overlay_one"
              animate={gifDisplay2 ? { display: "block" } : { display: "none" }}
              style={{ color: "black" }}
            >
              <h1>python car</h1>
              <h5>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, fugiat? Exercitationem deleniti provident debitis sit
                expedita deserunt reprehenderit distinctio consequuntur impedit
                atque soluta dolorum sunt architecto rerum, nihil optio magnam!
              </h5>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="html_projects">
        <div className="html_head">
          <h1>Projects without react</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quibusdam ullam numquam mollitia quasi facilis autem,
            deleniti maiores voluptate rerum assumenda porro ad dolore, velit
            expedita quas, incidunt ea id!
          </h4>
        </div>
        <div className="html_img">
          {images.map((htmlimage, key) => (
            <motion.img
              src={htmlimage.image}
              key={key}
              initial={{ scale: "0" }}
              whileInView={{ scale: "1" }}
              whileTap={{ scale: 1.4, zIndex: 999 }}
              transition={{ duration: "1", delay: "0.2" }}
              alt="NA"
            />
          ))}
        </div>
      </div>
      <div className="html_projects">
        <div className="html_head">
          <h1>Projects with react</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quibusdam ullam numquam mollitia quasi facilis autem,
            deleniti maiores voluptate rerum assumenda porro ad dolore, velit
            expedita quas, incidunt ea id!
          </h4>
        </div>
        <div className="html_img react_img">
          {reactImages.map((reactImage, key) => (
            <motion.img
              src={reactImage.img}
              key={key}
              initial={{ scale: "0" }}
              whileInView={{ scale: "1" }}
              whileTap={{ scale: 1.4, zIndex: 999 }}
              transition={{ duration: "1", delay: "0.2" }}
              alt="NA"
            />
          ))}
        </div>
      </div>
      <div className="clients_projects">
        <div className="clients_projects_head html_head">
          <h1>Projects for clients</h1>
          <h4>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            maiores repellendus dolores! Libero perspiciatis temporibus nam,
            recusandae esse earum eos nihil dignissimos, harum maxime voluptas
            voluptatem animi ab doloribus quidem!
          </h4>
        </div>
        <div className="clients_projects_links">
          <a href="https://skyheightz-coaching.web.app/" target="_blank">
            <motion.img
              initial={{ scale: "0" }}
              whileInView={{ scale: "1" }}
              transition={{ duration: "1", delay: "0.2" }}
              src={skyheightz}
              alt=""
            />
          </a>
          <a
            href="https://jangirkillah-seva-club-55e84.web.app/"
            target="_blank"
          >
            <motion.img
              initial={{ scale: "0" }}
              whileInView={{ scale: "1" }}
              transition={{ duration: "1", delay: "0.2" }}
              src={jangirkilla}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
