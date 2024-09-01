import React from "react";
import "./Quotes.css";

const Quotes = () => {
  return (
    <div className="quotes-container">
      <div className="quotes-content">
        <blockquote>
          Read as if you're finding the writer's heart <br />
          Write like you're reading the reader's mind
        </blockquote>
        <p className="author">-- Dr. Sloka</p>
      </div>
    </div>
  );
};

export default Quotes;
