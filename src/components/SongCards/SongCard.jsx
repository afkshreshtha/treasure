import React from 'react'
import { useNavigate } from 'react-router-dom'


import './style.scss'
import Img from '../lazyLoadImg/img'

import { Link } from 'react-router-dom'
const SongCard = ({ data}) => {
  const navigate = useNavigate()

  return (
    <div className="movieCard">
      <div className="textBlock"></div>
      <div className="textBlock">
        <h2>PLAYLISTS</h2>
        {data.playlists.results.map((e) => {
          return (
            <>
              <Link
                to={`/playlist/${e.id}`}
                style={{ color: 'white', textDecoration: 'none' }}
              >
                <div className="posterBlock">
                  <Img className="posterImg" src={e.image[2].link} />
                </div>

                <span>{e.title}</span>
              </Link>
            </>
          )
        })}
      </div>
      <br />
      <div className="textBlock">
        <h2>Related Artists</h2>
        <br />
        {data.artists.results.map((e) => {
          return (
            <>
              <br />

              <br />
              <div className="posterBlock">
                <Img className="posterImg" src={e.image[2].link} />
              </div>
              <br />
              <span>Artist Name - {e.title}</span>
              <span>
                <br />
              </span>
              <br />
              <span>Artist Decription - {e.description}</span>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default SongCard
