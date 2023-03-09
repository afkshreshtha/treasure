import React, { useRef } from 'react'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import ContentWrapper from '../contentWrapper/ContentWrapper'
import Img from '../lazyLoadImg/img'

import './style.scss'

const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef()

  const navigate = useNavigate()

  const navigation = (dir) => {
    const container = carouselContainer.current

    const scrollAmount =
      dir === 'left'
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20)

    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    })
  }

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation('left')}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation('right')}
        />
        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item.image[2].link

              return (
                <div
                  key={item.id}
                  className="carouselItem"
                  onClick={() => navigate(`playlist/${item.id}`)}
                >
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">{item.year}</span>
                    <span className="date">
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  )
}

export default Carousel