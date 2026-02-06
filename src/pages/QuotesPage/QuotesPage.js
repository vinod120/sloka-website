import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import QuoteItem from "./QuoteItem";
import "./QuotesPage.css";

const QuotesPage = () => {
  const { appData } = useContext(AppContext);
  const quotesData = appData?.quotes;
  useEffect(() => {
    window && window.scrollTo(0, 0);
  }, []);

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
          {quotesData?.length > 0 &&
            quotesData?.map((quote, index) => (
              <QuoteItem
                key={quote.id}
                image={quote.image}
                lightboxId={quote.lightboxId}
                delay={0.2 + index * 0.2}
                colSize="4"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default QuotesPage;
