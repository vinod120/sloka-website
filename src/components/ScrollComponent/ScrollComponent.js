import React from 'react'
import './ScrollComponent.css'
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
        </div>
    )
}


export default ScrollComponent