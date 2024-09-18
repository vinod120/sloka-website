import React, {  useState } from 'react'
import json from '../../sloka.json'
import './BookEditor.css'
import TextEditor from '../../../components/TextEditor/TextEditor'
import ImageUpload from '../../../components/ImageUpload'
const defaultObj = {
    "image": {
        "src": "",
        "className": "homepage-left-side-image",
        "alt": ""
    },
    "title": "",
    "titleSuffix": "",
    "description": "",
    "videoLink": "",
    "links": [
        {
            "link": "",
            "image": "/images/book_leaf.png",
            "name": "blueroseone"
        },
        {
            "link": "",
            "image": "/images/amazon_logo.png",
            "name": "amazon"
        },
        {
            "image": "/images/flipkart_logo.png",
            "link": "",
            "name": "flipkart"
        }
    ]
}

function BookEditor() {
    const { books } = json
    const [booksPageData, setBooksPageData] = useState(books)
    const onChangeFun = (editedText, name, index) => {
        setBooksPageData((prevData) =>
            prevData.map((book, i) => {
                if (i === index) {
                    return {
                        ...book,
                        [name]: editedText
                    };
                }
                return book;
            })
        );
    }
    const onChange = (e, index) => {
        setBooksPageData((prevData) =>
            prevData.map((book, i) => {
                if (i === index) {
                    return {
                        ...book,
                        [e.target.name]: e.target.value
                    };
                }
                return book;
            })
        );
    }
    const onBtnClick = () => {
        const newBooksPageData = JSON.parse(JSON.stringify(booksPageData))
        newBooksPageData.push(defaultObj)
        setBooksPageData(newBooksPageData)
    }
    const onRemoveBtnClick = (index) => {
        setBooksPageData((prevData) => prevData.filter((_, i) => i !== index));

    }
    return (
        <div className='editor-wrapper'>
            <h2 className='text-center'>Books</h2>
            <button className='d-flex mr-auto p-2 editor-create-btn' onClick={onBtnClick}>+ Create New Book</button>
            {booksPageData.map((obj, index) => <div className='mt-5 p-4 border-bottom' key={index}>
                <div className='d-flex'>
                    <h2>Book {index + 1}</h2>
                    <button onClick={() => onRemoveBtnClick(index)} className='editor-create-btn'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg></button>
                </div>
                <h3>Image Upload</h3>
                <ImageUpload defaultImage={obj.image} />
                <h3>Book Title</h3>
                <TextEditor onChangeFun={(editedText) => onChangeFun(editedText, "title")} defaultText={obj.title} />
                {obj.titleSuffix && <><h3>Book Sub Title</h3>
                    <TextEditor onChangeFun={(editedText) => onChangeFun(editedText, "titleSuffix")} defaultText={obj.titleSuffix} /></>}
                <h3 className='mt-3'>Description</h3>
                <TextEditor onChangeFun={(editedText) => onChangeFun(editedText, "description")} defaultText={obj.description} />
                {obj.videoLink && <><h3 className='mt-3'>Video</h3>
                    <input className='mt-3' defaultValue={obj.videoLink} onChange={onChange} name={"videoLink"} /></>}
                <h3 className='mt-3'>Purchase Links</h3>
                <div className='d-flex '>
                    {obj.links.length && obj.links.map((obj, index) => <div className='d-flex row p-3'>
                        <img src={obj.image} alt="Selected" style={{ width: '100px', height: '100' }} />
                        <input className='mt-3' defaultValue={obj.link} onChange={onChange} name={obj.name} />
                    </div>)
                    }
                </div>
            </div>)}
        </div>
    )
}


export default BookEditor