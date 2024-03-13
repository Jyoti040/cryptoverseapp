import React from 'react'
import millify from 'millify'
import {Typography , Row ,Col ,Statistic} from 'antd'
import {Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const {Title}=Typography
const {Text}=Typography

const HomePage = () => {
  const {data,error,isLoading} = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
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
  console.log(data);
  return (
    <>
    <Title level={2} className='heading'>
    Global crypto stats
    </Title>
    <Row gutter={16}>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.totalCoins}/> </Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/> </Col>
      <Col span={12}><Statistic title="Total  Market Cap" value={millify(globalStats.totalMarketCap)}/> </Col>
      <Col span={12}><Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)}/> </Col>
      <Col span={12}><Statistic title="Total markets" value={millify(globalStats.totalMarkets)}/> </Col>
      
    </Row>
    <br/>
    <div className='home-heading-container'>
         <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
         <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>
    <Cryptocurrencies simplified={true}/>
    <br/>
    <br/>
    <div className='home-heading-container'>
         <Title level={2} className='home-titlle'>Latest Crypto news</Title>
         <Title level={3} className='show-more'><Link to="/news">Show More</Link></Title>
    </div>
    <News simplified={true}/>
    </>
  )
}

export default HomePage;