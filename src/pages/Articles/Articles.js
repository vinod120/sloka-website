import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";

const Articles = () => {

  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])

  const { id } = useParams()
  return (
    <div className="container-fluid blog pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px", marginTop: "60px" }}
        >
          {!id ? <><h4 className="text-primary">Dr.Sloka's</h4>
            <h1 className="display-5 mb-4"> Articles</h1></> : <>
            <h1 class="mb-20">Photo Gazing Therapy: A Simple Exercise to Revisit, Relive Your Cherished Memories</h1>
            <p class="title">A Photo as a Time Machine; The Therapeutic Power a Photograph</p>
          </>
          }
        </div>
        {!id ? <div className="row g-4 justify-content-center">
          {[1, 2, 3].map((artObj, index) => <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s" key={`articles_${index}`}>
            <div className="blog-item">
              <div className="blog-img">
                <img
                  src="/images/articles_img1.png"
                  className="img-fluid w-100 rounded-top"
                  alt="blog"
                  style={{ height: "300px" }}
                />
                <div className="blog-date">
                  <i className="fas fa-clock me-2" />August 19, 2025
                </div>
              </div>
              <div className="blog-content p-4">
                <Link to="1" className="h4 d-inline-block mb-4">
                  Photo Gazing Therapy
                </Link>
                <p className="mb-4">
                  We all know that we live every moment only once but if there’s
                  anything that can make us relive the same moment- It’s a
                  Photograph.....
                </p>
                <Link to="1" className="btn btn-primary rounded-pill py-2 px-4 article-read-more">
                  Read More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
          )}
        </div> : <div>
          <div className="about-page-content-wrapper about-page-content-wrapper2">
            <div className="about-image fadeInRight animated">
              <img
                src="/images/articles_img1.png"
                width={"100%"}
                alt="About Me"
                decoding="async"
                loading="lazy"
              />
            </div>
            <div className="about-text fadeInLeft animated">
              <div className="about-text-content">
                <p>
                  We all know that we live every moment only once but if there’s anything that can make us relive the same moment- It’s a Photograph. The power of a single photograph is so incredible that it takes us quickly back to the same moment. The photograph doesn’t have any moving objects in it, yet the video of the entire scene gets replayed in our minds. It is an absolute multisensory experience, which means all of our senses are evoked by the moment. We tend to see the same location, visualise the same colours, and hear the sounds of our conversation, background noise and voices, if any, smells and touch of the bygone era. We’d not just recall the moment, but rather the feelings and emotions attached to that moment.
                </p>
                <p>
                  Any moment, clicked and stored as a photo becomes a wonderful time machine to transport us back to the past and make us relive the passed on moment. Ever you’re alone or feeling low, lonely, and want to instantly cheer up, elevate your mood quickly; gazing at a photo can be one of the quickest ways to opt for. This is so therapeutic. But how you do it?
                </p>
              </div>
            </div>
          </div>

          <div className="about-text fadeInLeft animated">
            <p>
              Here’s the process I’d recommend. Go to your gallery, give it a quick eye scan and choose a photo that catches your attention or is close to your heart or the one that holds a moment you’d like to travel back to, and gaze at it for a few minutes. Allow yourself to slowly move back in time and visualise what you were doing at that moment when that photo was clicked, look for the people around you, imagine being in the same location, play and hear the conversations of the scene, gently bring a smile on your lips, feel the sense of smells and the touch of the objects and people, relish the taste of the food you had that day, recall every single and small detail associated with that photo. You already must have travelled back into one of your memories as you’re reading this now. You did, right!?
            </p>
            <p>Have you noticed the change in your emotional state before and after doing this photo gazing exercise? Look at your surroundings now, you’re just where you are but already travelled into the past and came back to this moment and so I call a photo as a time machine in your pocket. Get in touch with a therapist for more detailed and intense way of therapeutic process and healing. Happy Times!</p>
          </div>
          <p className="sloka-sign-text">--Dr.Sloka</p>
        </div>
        }
      </div>
    </div >
  );
};

export default Articles;
