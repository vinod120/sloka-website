import React from 'react'
import json from '../../../utils/app.json'
import ImageUpload from '../../../components/ImageUpload'
function HomeEditor() {
    const { homepage } = json
    return (
        <div>
            <div className='mt-5 p-4 border-bottom' >
                <div className='d-flex'>
                    <h2>Home Page</h2>
                </div>
                <h3>Image Upload</h3>
                <ImageUpload defaultImage={obj.image} />
                <h3>Book Title</h3>
                <TextEditor onChangeFun={(editedText) => onChangeFun(editedText, "title")} defaultText={obj.title} />
                {obj.titleSuffix && <><h3>Book Sub Title</h3>
                    <TextEditor onChangeFun={(editedText) => onChangeFun(editedText, "titleSuffix")} defaultText={obj.titleSuffix} /></>}
                <h3 className='mt-3'>Description</h3>
                <TextEditor onChangeFun={(editedText) => onChangeFun(editedText, "description")} defaultText={obj.description} />
            </div>
        </div>
    )
}

export default HomeEditor