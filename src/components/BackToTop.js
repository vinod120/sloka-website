import React, { useEffect } from "react";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const backToTop = document.querySelector(".back-to-top");
      if (window.scrollY > 300) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className="btn btn-primary btn-lg-square rounded-circle back-to-top"
      aria-label="Back to top"
      style={{ display: "none" }} // Initially hidden
    >
      <i className="fa fa-arrow-up" />
    </button>
  );
};

export default BackToTop;
