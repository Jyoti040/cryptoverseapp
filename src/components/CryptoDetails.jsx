//import React, { useState, useEffect } from 'react'
import millify from 'millify'
import HTMLReactParser from 'html-react-parser'
import { useParams ,Link } from 'react-router-dom'
import { Col, Row, Typography, Select, Space, Card } from 'antd'
import { DollarCircleOutlined, FundOutlined, ThunderboltOutlined, MoneyCollectOutlined, BulbOutlined, StopOutlined, ExclamationCircleOutlined, TrophyOutlined, NumberOutlined, CheckOutlined } from '@ant-design/icons';
import { useGetCryptosDetailsQuery } from '../services/cryptoApi'
import { useGetCryptosHistoryQuery } from '../services/cryptoApi'

const { Title } = Typography
const { Text } = Typography
const { Option } = Select

const CryptoDetails = () => {
  const { coinId } = useParams();
 // const [time, setTime] = useState('7d')
  const { data, error, isLoading } = useGetCryptosDetailsQuery(coinId);
  const {data : coinHistory}= useGetCryptosHistoryQuery(coinId );
  
  

  const cryptoDetails = data?.data?.coin

  if (error) {
    return (<>
      Error 404
    </>)
  }
  if (isLoading || !coinHistory) {
    return (<>
      Loading ...
    </>)
  }
  console.log(cryptoDetails)

  const stats = [
    { title: 'Price to USD ', value: ` $${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank ', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: millify(cryptoDetails["24hVolume"]), icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
  ]

  const Genericstats = [
    { title: 'Total Markets ', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Total Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ]
 
  return (
    <>
      <Col className='crypto-details'>
        <Title Level={2}>
          {cryptoDetails.name}  Price
        </Title>
        <p>{cryptoDetails.name}  live price in US dollar . View value statistics , market cap and supply .</p>
      </Col>
      {/* <Select onChange={(value)=>{setTime(value)}} const options={[
  {value:'3h',label:'3h'}, {value:'24h',label:'24h'},{value:'7d',label:'7d'},{value:'30d',label:'30d'},
 ]} placeholder='Select time period'  filterOption={(input,option)=>(option?.label ?? '').toLowerCase().includes(input.toLowerCase())}/> */}
   {/* <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.coinName}/>
     */} <Row gutter={10}> 
        <Col span={12} >
          <Card title="Value Statistics" className="main-stats">
            {stats.map(({ title, value, icon }) => (
              <Row className="coin-stats" key={title}>
                <Col span={8}>
                  <Title level={4}>{icon}  {title}</Title>
                </Col>
                <Col >
                  <Title level={5}>{value}</Title>
                </Col>
              </Row>
            ))}
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Other Statistics" className="general-stats">
            {Genericstats.map(({ title, value, icon }) => (
              <Row className="coin-stats" key={title}>
                <Col span={8}>
                  <Title level={4}>{icon}  {title}</Title>
                </Col>
                <Col >
                  <Title level={5}>{value}</Title>
                </Col>
              </Row>
            ))}
          </Card>
        </Col>
      </Row>
      <Col className='desc'>
         <Title level={3}> What is {cryptoDetails.name} ?</Title>
        {HTMLReactParser(cryptoDetails.description)}
     </Col>
     <br/>
     <br/>
     <Col className='coin-link'>
       <Title level={3}>  {cryptoDetails.name} important links </Title>
    
       {cryptoDetails.links.map(
         (link,index)=>(
          <Row   key={index}>
           
               <Col span={1}><Text>{index+1}</Text></Col> 
               <Col span={2}><Text>{link.type}</Text></Col>
               <Col span={3}> <Link to={link.url}>
                   {link.name}
                </Link>
                </Col>
           </Row>
        )
      )}
       </Col>
    </>


  )
}

export default CryptoDetails