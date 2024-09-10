import React from 'react'
import './Books.css'
import ImageTextComponent from '../../components/ImageTextComponent/ImageTextComponent'
import sloka from '../sloka.json'
import { Link, useParams } from 'react-router-dom'

const books = sloka.books

function Books() {
  const { id } = useParams()

  const findBookObj = books[id - 1] || {}
  return (
    <div className='books-page-wrapper'>
      <div className='books-page-content-wrapper'>
        {id ?
          <BookComponent {...findBookObj} />
          :
          books.map((obj, index) => {
            return <BookComponent {...obj} key={`book_comp_${index}`} />
          })
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
    <div className='d-flex justify-content-center'>
      {bookObj.links?.map((obj, index) => {
        return <Link to={obj.link} target='blank' key={`link_url_${index}`}>
          <figure className='figure'>
            <img src={obj.image} width={100} alt={obj.alt} height={100} className="cover" />
          </figure>
        </Link>
      }
      )}
    </div>
  </div>
}
export default Books