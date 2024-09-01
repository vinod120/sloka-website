import React from 'react'
import './ImageTextComponent.css'
import { Link } from 'react-router-dom'

function ImageTextComponent(props) {
    const { title = "", image = {},titleSuffix="", content = [] } = props

    return (<div className='left-side-rigth-text-container'>
        {title && <p className='title'>{title}{titleSuffix &&<span className='title-suffix'>{titleSuffix}</span>}</p>}
        <div className='left-side-rigth-text-wrapper'>
            {image && <div className='book-highlight-wrapper'>
                <Link ></Link>
                <figure className='figure'  >
                    <img {...image} width={300} alt="books" height={380} className="cover" />
                </figure>
            </div>}
            {content.length ? <div className='text-container-wrapper'>
                {content.map(item =>
                    <div dangerouslySetInnerHTML={{ __html: item }} className='right-side-content-para' />
                )}
            </div> : null}
        </div>
    </div>)
}

export default ImageTextComponent