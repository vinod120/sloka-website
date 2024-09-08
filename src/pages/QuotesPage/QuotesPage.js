import React from 'react';
import './QuotesPage.css';
import quotes1 from "../../images/quote.png";
import quotes2 from "../../images/quote2.png";
import quotes3 from "../../images/quote3.png";


const quotesData = [
  {
    imageUrl: quotes1,
    downloadLink: quotes1,
  },
  {
    imageUrl: quotes2,
    downloadLink: quotes2,
  },
  {
    imageUrl: quotes3,
    downloadLink: quotes3,
  }, {
    imageUrl: quotes1,
    downloadLink: quotes1,
  }, {
    imageUrl: quotes2,
    downloadLink: quotes1,
  }, {
    imageUrl: quotes3,
    downloadLink: quotes3
  },
];

const QuotesPage = () => {
  return (
    <div className="quotes-main-container">
      {quotesData.map((quote, index) => (
        <div className="quote-card" key={index}>
          <img src={quote.imageUrl} alt={`Quote ${index + 1}`} loading='lazy' decoding='async' />
          <a
            href={quote.downloadLink}
            download
            className="download-button"
          >
            Download Here
          </a>
        </div>
      ))}
    </div>
  );
};

export default QuotesPage;
