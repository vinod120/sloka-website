import React from "react";
import "./Quotes.css";
import { Carousel } from "react-responsive-carousel";

const Quotes = () => {
  return (<div className="quotes-container-wrapper">
    <h3 className="mb-4"> TRENDING QUOTES</h3>
    <Carousel
      showArrows={false}
      showStatus={false}
      autoPlay
      infiniteLoop
      centerMode={true}
      showThumbs={false} >
      <div className="quotes-container">
        <div className="quotes-content">
          <blockquote>
            <p className="quotes-text">
              <p className="quotes-text">
                Read as if you're finding the writer's heart
              </p>
              <p className="quotes-text">
                Write like you're reading the reader's mind
              </p>
            </p>
          </blockquote>
          <p className="author">-- Dr. Sloka</p>
        </div>
        </div>
        <div className="quotes-container">
          <div className="quotes-content">
            <blockquote>
              <p className="quotes-text">
                <p className="quotes-text">
                  Progression in Life need Initiation
                </p>
                <p className="quotes-text">
                  The seed of Initiation is Determination
                </p>
              </p>
            </blockquote>
            <p className="author">-- Dr. Sloka</p>
          </div>
        </div>
    </Carousel>
  </div>
  );
};

export default Quotes;
