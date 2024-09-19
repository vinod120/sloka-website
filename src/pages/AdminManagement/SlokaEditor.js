import React from "react";
import { Link, useParams } from "react-router-dom";
import BookEditor from "./Books/BookEditor";
import "./SlokaEditor.css";

function SlokaEditor() {
  const { id } = useParams();
  return (
    <div className="container-fluid py-5">
      <div className="container pb-5">
        {!id && (
          <div>
            <Link to="home">
              <div className="card-wrapper">Home</div>
            </Link>
            <Link to="books">
              <div className="card-wrapper">books</div>
            </Link>
            <Link to="articles">
              <div className="card-wrapper">Articles</div>
            </Link>
            <Link to="quotes">
              <div className="card-wrapper">Quotes</div>
            </Link>
            <Link to="about">
              <div className="card-wrapper">About</div>
            </Link>
          </div>
        )}
        {id === "books" && <BookEditor />}
      </div>
    </div>
  );
}

export default SlokaEditor;
