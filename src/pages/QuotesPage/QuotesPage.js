import React,{useEffect} from "react";
import "./QuotesPage.css";
import QuoteItem from "./QuoteItem";
import quote1 from "../../images/quote.png"
import quote2 from "../../images/quote2.png"
import quote3 from "../../images/quote3.png"


const quotes = [
  {
    id: 1,
    image: quote1,
    lightboxId: "Gallery-1",
    colSize: 4,
  },
  {
    id: 2,
    image: quote2,
    lightboxId: "Gallery-2",
    colSize: 4,
  },
  {
    id: 3,
    image: quote3,
    lightboxId: "Gallery-3",
    colSize: 4,
  },
];

const QuotesPage = () => {
  useEffect(() => {
    window && window.scrollTo(0, 0)

  }, [])
  
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
        <div className="row g-4 justify-content-center">
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
