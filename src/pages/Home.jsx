import React from "react";
import "../style/Home.css";
import { Greetings } from "../greeting.js";
import Parallax from "react-rellax";
import scroll_down from "../images/scrollDown.svg";

function Home() {
  return (
    <div className="home_container">
      <Parallax>
        <div className="home_head">
          <div className="carousel">
            <div className="hide">
              <div className="slide">
                {Greetings.map((greetings) => {
                  return (
                    <>
                      <h1 className="txt">{greetings.greeting} </h1>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="pre">
            <h1>world</h1>
          </div>
        </div>
      </Parallax>

      <a href="#aboutme">
        <div className="scroll_down_container">
          <div>s</div>
          <div>c</div>
          <div>r</div>
          <div>o</div>
          <div>l</div>
          <div>l</div>
          <div></div>
          <div>d</div>
          <div>o</div>
          <div>w</div>
          <div>n</div>
          <div>|</div>
          <div>|</div>
          <div>|</div>
        </div>
      </a>
    </div>
  );
}

export default Home;
