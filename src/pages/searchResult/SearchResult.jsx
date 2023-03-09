import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Bars } from 'react-loader-spinner'
import './style.scss'
import { fetchDataFromApi } from '../../utils/api'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import SongCard from '../../components/SongCards/SongCard'

const SearchResult = () => {
  const [data, setData] = useState(null)
  const [pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(false)
  const { query } = useParams()

  const fetchInitialData = () => {
    setLoading(true)
    fetchDataFromApi(`/search/all?query=${query}&page=${pageNum}`).then(
      (response) => {
        setData(response)
        setPageNum((prev) => prev + 1)
        setLoading(false)
      },
    )
  }

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/all?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.data) {
          setData({
            ...data,
            data: [...data?.data, ...res.data],
          })
        } else {
          setData(res)
        }
        setPageNum((prev) => prev + 1)
      },
    )
  }

  useEffect(() => {
    fetchInitialData()
  }, [query])

  let a = [data?.data]

  return (
    <div className="searchResultsPage">
      {loading && (
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{
            position: 'relative',
            marginTop: '200px',
            justifyContent: 'center',
          }}
          wrapperClass=""
          visible={true}
        />
      )}
      {!loading && (
        <ContentWrapper>
          {data?.data ? (
            <>
              <div className="pageTitle">{`Search result for '${query}'`}</div>
              <InfiniteScroll
                className="content"
                dataLength={data?.data.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.length}
                loader={
                  <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{
                      position: 'relative',
                      marginTop: '200px',
                      justifyContent: 'center',
                    }}
                    wrapperClass=""
                    visible={true}
                  />
                }
              >
                {a.map((e, i) => {
                  return <SongCard key={i} data={e} />
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Sorry, Not found</span>
          )}
        </ContentWrapper>
      )}
    </div>
  )
}

export default SearchResult
