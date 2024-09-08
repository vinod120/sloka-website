import React from 'react'
import './Articles.css'
import sloka from '../sloka.json'

const Articles = () => {
  const {content} = sloka.articles[0]
  return (
    <div className='articles-page-wrapper'>
      <div className='articles-page-content-wrapper'>

        <h1 className="mb-20">Photo Gazing Therapy: A Simple Exercise to Revisit, Relive Your Cherished Memories</h1>
        <p className='title'>A Photo as a Time Machine; The Therapeutic Power a Photograph</p>
        {content.map(item =>
                    <div dangerouslySetInnerHTML={{ __html: item }} className='right-side-content-para' />
                )}
        <p></p>
      </div>

    </div>
  )
}

export default Articles