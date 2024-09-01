import React from 'react'
import './ScrollComponent.css'
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MediaQuery from 'react-responsive';

function ScrollComponent(props) {
    const navigate = useNavigate();

    const { title = "", content = [], cssClass = "scroll-component-home" } = props
    const onLinkClick = (selectedIndex) => {
        const findObj = content[selectedIndex]
        navigate(findObj.path)
    }
    return (
        <div className={cssClass}>
            {title && <h1 className='mb-20 mt-4'>{title}</h1>}
            <MediaQuery minWidth={991.98}>
            <Carousel
                showArrows={false}
                showStatus={false}
                autoPlay
                infiniteLoop
                centerMode={true}
                centerSlidePercentage={33} // Shows 3 items (100% / 3 = 33.33%)
                showThumbs={false}
                onClickItem={(e) => onLinkClick(e)} >
                {content.map((obj, index) => {
                    return <figure className='figure' key={`scroll_component_${index}`} >
                        <img src={obj.image} width={300} height={380} alt={obj.alt} className="cover" />
                    </figure>

                })}
            </Carousel>
            </MediaQuery>
            <MediaQuery minWidth={575.98} maxWidth={991.98}>
            <Carousel
                showArrows={false}
                showStatus={false}
                autoPlay
                infiniteLoop
                centerMode={true}
                centerSlidePercentage={50} // Shows 3 items (100% / 3 = 33.33%)
                showThumbs={false}
                onClickItem={(e) => onLinkClick(e)} >
                {content.map((obj, index) => {
                    return <figure className='figure' key={`scroll_component_${index}`} >
                        <img src={obj.image} width={300} height={380} alt={obj.alt} className="cover" />
                    </figure>

                })}
            </Carousel>
            </MediaQuery>
            <MediaQuery maxWidth={575.98}>
            <Carousel
                showArrows={false}
                showStatus={false}
                autoPlay
                infiniteLoop
                centerMode={true}
                centerSlidePercentage={100} // Shows 3 items (100% / 3 = 33.33%)
                showThumbs={false}
                onClickItem={(e) => onLinkClick(e)} >
                {content.map((obj, index) => {
                    return <figure className='figure' key={`scroll_component_${index}`} >
                        <img src={obj.image} width={300} height={380} alt={obj.alt} className="cover" />
                    </figure>

                })}
            </Carousel>
            </MediaQuery>
        </div>
    )
}


export default ScrollComponent