import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Typography,Row,Col,Space,Card} from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const {Title}=Typography

const News = ({simplified}) => {
  const count = simplified ? 6 : 50;
  const {data : cryptoNews ,error,isLoading} = useGetCryptoNewsQuery();
  const [news ,setNews]=useState([])
  useEffect(() => {
    if (cryptoNews && cryptoNews.data) {
      setNews(cryptoNews.data);
    }
  }, [cryptoNews]);
  if(error){
    return (<>
    Error 404
    </>)
  }
  if(isLoading){
    return (<>
      Loading ...
      </>)
  }
  const heading=(
    <Space direction='horizontal' align='center'>
       <Title level={2}>
       Latest Crypto News
    </Title>
    </Space>
    
  )
  console.log(cryptoNews)
  return (
    <>
    {!simplified && heading}
       <br/>
       <Row gutter={[24, 24]} className='crypto-news-container'>
        {news.slice(0,count).map((newsItem, index) => (
          <Col key={index} xs={24} sm={12} lg={6} className='crypto-news'>
            <Link to={newsItem.url}>
              {/* <div className='article'>
                  <div className='title'>
                  {newsItem.title}
                  </div>
                  <div className='img'>
                  {<img src={newsItem.thumbnail} width="100" height="100" alt='Thumbnail' />}
                  </div>
              </div>
              <p>{newsItem.description.length>50 ? newsItem.description.slice(0,50) :newsItem.description }</p> */}
              <Card
                title={newsItem.title}
                cover={<img src={newsItem.thumbnail}  alt='Thumbnail' />}
                hoverable
              >
                <p>{newsItem.description.length>50 ? newsItem.description.slice(0,50) :newsItem.description }</p>
                <h5>Published  {moment(newsItem.createdAt).fromNow()} </h5>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default News