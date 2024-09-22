import React from "react";
import { Link } from "react-router-dom";

const AdminManagement = () => {
  const cards = [
    { path: "welcome-banner", label: "Home" },
    { path: "books", label: "Books" },
    { path: "articles", label: "Articles" },
    { path: "quotes", label: "Quotes" },
    { path: "about", label: "About" },
  ];

  return (
    <div className="container-fluid py-5">
      <div className="container pb-5">
        <div className="row g-4">
          {cards.map((card) => (
            <div key={card?.label} className="col-md-3">
              <Link to={card?.path} className="card-wrapper">
                <div className="p-4">{card?.label}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminManagement;
