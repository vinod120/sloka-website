import React from "react";
import { useParams } from "react-router-dom";
import BookEditor from "./Books/BookEditor";
import "./SlokaEditor.css";
import WelcomBannerEdit from "./Home/WelcomBannerEdit";

function SlokaEditor() {
  const { id } = useParams();
  return (
    <div className="container-fluid py-5">
      <div className="container pb-5">
        {id === "books" && <BookEditor />}
        {id === "welcome-banner" && <WelcomBannerEdit />}
      </div>
    </div>
  );
}

export default SlokaEditor;
