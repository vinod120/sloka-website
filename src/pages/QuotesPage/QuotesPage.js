import React from 'react';
import './QuotesPage.css';

const quotesData = [
  {
    imageUrl: 'https://placehold.co/400',
    downloadLink: 'https://placehold.co/400',
  },
  {
    imageUrl: 'https://placehold.co/400',
    downloadLink: 'https://placehold.co/400',
  },
  {
    imageUrl: 'https://placehold.co/400',
    downloadLink: 'https://placehold.co/400',
  }, {
    imageUrl: 'https://placehold.co/400',
    downloadLink: 'https://placehold.co/400',
  }, {
    imageUrl: 'https://placehold.co/400',
    downloadLink: 'https://placehold.co/400',
  }, {
    imageUrl: 'https://placehold.co/400',
    downloadLink: 'https://placehold.co/400',
  },
  // Add more quotes as needed
];

const QuotesPage = () => {
  return (
    <div className="quotes-main-container">
      {quotesData.map((quote, index) => (
        <div className="quote-card" key={index}>
          <img src={quote.imageUrl} alt={`Quote ${index + 1}`} />
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
