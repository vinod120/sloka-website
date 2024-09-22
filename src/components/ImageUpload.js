import React, { useState } from "react";

const ImageUpload = ({ defaultImage = {}, onImgChange = () => {} }) => {
  const [preview, setPreview] = useState(defaultImage?.src || null);

  const handleFileChange = async (event) => {
    if (!event.target.files[0]) return alert('please select image')
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      onImgChange(file);
    }
  };

  return (
    <div className="my-4">
      <div className="d-flex align-items-center justify-content-between">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {preview && (
          <div className="my-4">
            <img
              src={preview}
              alt="Selected"
              style={{ width: "300px", height: "auto" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
