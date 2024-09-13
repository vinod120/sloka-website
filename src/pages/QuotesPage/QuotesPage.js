import React from "react";
import "./QuotesPage.css";
import QuoteItem from "./QuoteItem";

const quotes = [
  {
    id: 1,
    image: "https://drslokauk.netlify.app/static/media/quote.cd67fc6fffa5a746761a.png",
    lightboxId: "Gallery-1",
    colSize: 6,
  },
  {
    id: 2,
    image: "https://drslokauk.netlify.app/static/media/quote2.c46e96b5be6984a84be2.png",
    lightboxId: "Gallery-2",
    colSize: 3,
  },
  {
    id: 3,
    image: "https://drslokauk.netlify.app/static/media/quote3.afe282d919b038e04950.png",
    lightboxId: "Gallery-3",
    colSize: 3,
  },
];

const QuotesPage = () => {
  return (
    <div className="container-fluid gallery py-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Dr. Sloka's</h4>
          <h1 className="display-5 mb-4">TRENDING QUOTES</h1>
        </div>
        <div className="row g-4">
          {quotes.map((quote, index) => (
            <QuoteItem
              key={quote.id}
              image={quote.image}
              lightboxId={quote.lightboxId}
              delay={0.2 + index * 0.2}
              colSize={quote.colSize}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuotesPage;
