import React, { useEffect, useState } from "react";

const ImageUpload = ({ defaultImage }) => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(defaultImage.src);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = () => {
        if (!image) return;

        const formData = new FormData();
        formData.append('file', image);
    };
    useEffect(() => {
        setPreview(defaultImage.src)
    }, [defaultImage.src])

    return (
        <div className='my-4'>
            <div className='d-flex align-items-center'>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                {preview && (
                    <div className='my-4'>
                        <img src={preview} alt="Selected" style={{ width: '300px', height: 'auto' }} />
                    </div>
                )}
            </div>
            <button onClick={handleUpload} className='my-4 p-2'>Upload Image</button>
        </div>
    );
};

export default ImageUpload