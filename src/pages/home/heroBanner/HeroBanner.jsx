import React, { useEffect, useState } from 'react'
import './style.scss'
import useFetch from '../../../hooks/useFetch'
import Img from '../../../components/lazyLoadImg/img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import { useNavigate } from 'react-router-dom'
const HeroBanner = () => {
  const navigate = useNavigate()
  const [background, setBackground] = useState('')
  const [query, setQuery] = useState('')

  const { data, loading } = useFetch('/modules?language=hindi,english')

  const searchQueryHandler = (event) => {
    if (event.key === 'Enter' || event.key==="" && query.length > 0) {
      navigate(`/search/${query}`)
    }
  }

  useEffect(() => {
    const bg = data?.data.albums.map((e) => {
      return e.image[2].link
    })
    setBackground(bg?.[Math.floor(Math.random() * 20)])
  }, [data])

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of songs, playLists and artist to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner
