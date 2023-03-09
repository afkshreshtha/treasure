import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import dayjs from 'dayjs'

import './style.scss'

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import useFetch from '../../../hooks/useFetch'

import Img from '../../../components/lazyLoadImg/img'
import ReactPlayer from 'react-player'

const DetailsBanner = ({ video, crew }) => {

  const { id } = useParams()
  const { data, loading } = useFetch(`/albums?id=${id}`)

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="backdrop-img">
                <Img src={data?.data.image[2].link} />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    <Img src={data?.data.image[2].link} />
                  </div>
                  <div className="right">
                    <div className="title">
                      {`${data?.data.name || data?.data.title} (${dayjs(
                        data?.data.releaseDate,
                      ).format('YYYY')})`}
                    </div>
                    <div className="subtitle">{data?.data.primaryArtists}</div>
                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">
                        Total No. of songs {data?.data.songCount}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="songTitle">
                  {data?.data.songs.map((e) => (
                    <div>
                      <Img src={e.image[0].link} />
                      <span> {e.name}</span>
                      <span className="artist"> {e.primaryArtists}</span>
                      <div>
                      <ReactPlayer
                          url={e.downloadUrl[1]?.link}
                          width="300px"
                          height="50px"
                          playing={false}
                          controls={true}
                          volume={0.5}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  )
}

export default DetailsBanner
