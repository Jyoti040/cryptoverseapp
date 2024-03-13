import React ,{useState,useEffect} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom' 
import {Row,Col,Card,Input} from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const {data : cryptosList,error,isLoading} = useGetCryptosQuery();
  const [cryptos,setCryptos]=useState([])
  const [search,setSearch] = useState('')

  useEffect(
   ()=>{
    setCryptos(cryptosList?.data?.coins)
    const filteredData =  cryptosList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(search.toLowerCase()))
    setCryptos(filteredData)
   }
  ,[cryptosList,search])
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
  const searchBar=(<div>
  <Input placeholder='Search cryptocurrency' onChange={(e)=>setSearch(e.target.value)}/>
</div>)
  console.log(cryptos)
  return (
    <>
    {!simplified && searchBar}
    <br/>
    <Row gutter={[32,32]} className='crypto-card-conatiner'>
       {cryptos.slice(0,count).map(
        (currency)=>(
          <Col key={currency.id} xs={24} sm={12} lg={6} className='crypto-card' >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card title={`${currency.rank}.${currency.name}`} 
              extra={<img src={currency.iconUrl} height="40" width="40"/>}
              hoverable>
                 <p>Price : {millify(currency.price)}</p>
                 <p>Market Cap : {millify(currency.marketCap)}</p>
                 <p>Daily Change : {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        )
       )}
    </Row>
    </>
  )
}

export default Cryptocurrencies