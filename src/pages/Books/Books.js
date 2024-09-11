import React, { useEffect } from 'react'
import './Books.css'
import ImageTextComponent from '../../components/ImageTextComponent/ImageTextComponent'
import sloka from '../sloka.json'
import { Link, useParams } from 'react-router-dom'
import '../Articles/Articles.css'

const books = sloka.books

function Books() {
  const { id } = useParams()

  const findBookObj = books[id - 1] || {}

  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])

  return (
    <div className='books-page-wrapper'>
      <div className='books-page-content-wrapper'>
        {id ?
          <BookComponent {...findBookObj} />
          :
          <div>
            <div
              className="text-center mx-auto bg-[lightgrey] pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: "800px", marginTop: "60px" }}
            ><h4 className="text-primary">Dr.Sloka's</h4>
              <h1 className="display-5 mb-4"> Book Self</h1>
            </div>
            <div className="row g-4 justify-content-center">
              {books.map((obj, index) => {
                index = index + 1
                return <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s" key={`books_${index}`}>
                  <div className="blog-item">
                    <div className="blog-img">
                      <Link to={`${index}`}>
                        <img
                          {...obj.image}
                          className="rounded-top"
                          width={400}
                          height={400}
                        />
                      </Link>
                    </div>
                    <div className="blog-content p-4">
                      <Link to={`${index}`} className="h4 d-inline-block mb-4">
                        {obj.title}
                        {obj.titleSuffix ? <span>{obj.titleSuffix}</span> : null}
                      </Link>
                      <p className="mb-4">
                        {obj.content?.[0].slice(0, 100)}.....
                      </p>
                      <Link to={`${index}`} className="btn btn-primary rounded-pill py-2 px-4">
                        Read More <i className="fas fa-arrow-right ms-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        }
      </div>
    </div>
  )
}
const BookComponent = (bookObj) => {
  const videoLink = bookObj?.videoLink
  return <div className='books-page-content-wrapper'>
    {<ImageTextComponent {...bookObj} />}
    {videoLink && <p className='title'>Quick Demo About This Book</p>}
    {
      videoLink && <div id="video-background">
        <iframe title="video" id="youtube-background-video" src={`https://www.youtube.com/embed/${videoLink}?autoplay=1&mute=1&loop=1&playlist=${videoLink}&controls=0&showinfo=0&autohide=1&modestbranding=1&vq=hd1080`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    }
    {<p className='title'>Available at</p>}
    <div className='d-flex justify-content-center gap-5'>
      {bookObj.links?.map((obj, index) => {
        return <Link to={obj.link} target='blank' key={`link_url_${index}`}>
          <figure className='figure link-figure-wrapper'>
            <img src={obj.image} width={100} alt={obj.alt} height={100} className="cover" />
          </figure>
        </Link>
      }
      )}
    </div>
  </div>
}
export default Books