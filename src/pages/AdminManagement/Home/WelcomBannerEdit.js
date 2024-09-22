import React, { useContext, useState, useEffect } from "react";
import ImageUpload from "../../../components/ImageUpload";
import TextEditor from "../../../components/TextEditor/TextEditor";
import { AppContext } from "../../../App";
import { uploadImgToS3, uploadJsonToS3 } from "../../../AWS";

function WelcomBannerEdit() {
  const { appData } = useContext(AppContext);

  const [data, setData] = useState([]);
  const [isDataChanged, setIsDataChanged] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChangeFun = (editedText, fieldName, index) => {
    const updatedSlides = [...data];
    updatedSlides[index] = { ...updatedSlides[index], [fieldName]: editedText };
    setData(updatedSlides);
    setIsDataChanged(true);
  };

  const onImgChange = (imgUrl, fieldName, index) => {
    const updatedSlides = [...data];
    updatedSlides[index] = { ...updatedSlides[index], [fieldName]: imgUrl };
    setData(updatedSlides);
    setIsDataChanged(true);
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const updatedSlide = { ...data[0] };
      // Check if profileImage has been changed
      if (data[0]?.profileImage && typeof data[0]?.profileImage === "object") {
        updatedSlide.profileImage = await uploadImgToS3(data[0]?.profileImage);
      }

      // Check if backgroundImage has been changed
      if (data[0]?.backgroundImage && typeof data[0]?.backgroundImage === "object") {
        updatedSlide.backgroundImage = await uploadImgToS3(data[0]?.backgroundImage);
      }

      const updatedJSON = { ...appData };

    // Update only the welcomeBannerSlides
    updatedJSON.welcomeBannerSlides[0] = updatedSlide;
    await uploadJsonToS3(updatedJSON);

    } catch (error) {
      console.error("Error updating welcomeBannerSlide:", error);
      setLoading(false);
      setIsDataChanged(false);
    } finally {
      setLoading(false);
      setIsDataChanged(false);
    }
  };

  useEffect(() => {
    if (appData?.welcomeBannerSlides) {
      setData(appData?.welcomeBannerSlides); 
    }
  }, [appData]);

  return (
    <div className="container-fluid py-5">
      <div className="container pb-5">
        <p className="text-center display-6">Welcome Banner</p>
        {data.length > 0 &&
          data.map((slide, index) => (
            <div key={index}>
              <h3>Title</h3>
              <TextEditor
                onChangeFun={(editedText) =>
                  onChangeFun(editedText, "title", index)
                }
                defaultText={slide?.title || ""}
              />
              <h3>Intro</h3>
              <TextEditor
                onChangeFun={(editedText) =>
                  onChangeFun(editedText, "description", index)
                }
                defaultText={slide?.description || ""}
              />
              <h3>Image 1</h3>
              <ImageUpload
                onImgChange={(imgUrl) =>
                  onImgChange(imgUrl, "backgroundImage", index)
                }
                defaultImage={{ src: slide?.backgroundImage || "" }}
              />
              <h3>Image 2</h3>
              <ImageUpload
                onImgChange={(imgUrl) =>
                  onImgChange(imgUrl, "profileImage", index)
                }
                defaultImage={{ src: slide?.profileImage || "" }}
              />
            </div>
          ))}

        {isDataChanged && (
          <div
            className="btn btn-primary rounded-pill text-white py-3 px-5 w-25 m-auto d-block"
            onClick={handleUpdate}
          >
            {loading ? "Loading..." : "Update"}
          </div>
        )}
      </div>
    </div>
  );
}

export default WelcomBannerEdit;
