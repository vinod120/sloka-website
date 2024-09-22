import React from 'react'
import './ImageTextComponent.css'

function ImageTextComponent(props) {
    const { title = "", image = {}, titleSuffix = "", description = "" } = props

    return (<div className='left-side-rigth-text-container'>
        {title &&
            <blockquote className="blockquote text-right title">
                <p className="mb-0 title p-0">{title}</p>
                {titleSuffix && <footer className="blockquote-footer"><cite title="Source Title title">{titleSuffix}</cite></footer>}
            </blockquote>
        }
        <div className='left-side-rigth-text-wrapper'>
            {image &&
                <div className='book-highlight-wrapper1 fadeInLeft animated'>
                    <figure className='figure' >
                        <img {...image} width={300} alt="books" height={380} className="cover" />
                    </figure>
                </div>
            }
            {description.length ? <div className='text-container-wrapper fadeInRight animated'>
                    <div dangerouslySetInnerHTML={{ __html: description }} className='right-side-content-para' />
            </div> : null}
        </div>
    </div>)
}

export default ImageTextComponent