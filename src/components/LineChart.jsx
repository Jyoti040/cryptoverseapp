// import React from 'react'
// import { Line } from 'react-chartjs-2'
// import {Row,Col,Typography} from 'antd'
// import {Chart ,LineElement,CategoryScale// x axis
// , LinearScale ,//y axis
// PointElement,
// Legend,Tooltip,TimeScale,registerables
// } from 'chart.js'
// import 'chartjs-adapter-date-fns';

// const {Title}=Typography

// Chart.register(
//   LineElement,CategoryScale// x axis
// , LinearScale ,//y axis
// PointElement,
// Legend,Tooltip,TimeScale,
// ...registerables
// )

// const LineChart = ({coinHistory,currentPrice,coinName}) => {
//    const price=[];
//    const timeStampPeriod=[]
//    console.log(coinHistory,currentPrice,coinName)
//    for(let i=0;i<coinHistory?.data?.history?.length;i++){
//     price.push(coinHistory?.data?.history[i].price);
//     const date=new Date(coinHistory?.data?.history[i].timestamp);

//     timeStampPeriod.push(date.toLocaleString());
    
//    }
//    console.log(price,timeStampPeriod)
//    const data={  //data config     //time on x axis 
//     labels : timeStampPeriod,    //x axis
//     datasets : [        //points to be plotted
//       {
//         label:'Price In USD ',   // name of dataset
//         data: price,             //y axis
//         fill : false,           // area under line to be filled or not
//         backgroundColor : '#0071bd',
//         borderColor:'#0071bd',
       
//       },
//     ],
//    }
//   //  const options = {
//   //   scales: {
//   //     x: {
//   //       type: 'time', // Using time scale for x-axis
//   //       time: {
//   //         unit: 'day', // Set the time unit
//   //         displayFormats: {
//   //           day: 'MMM D', // Format for displaying dates
//   //         },
//   //       },
//   //       ticks: {
//   //         source: 'auto', // Automatically determine tick placement based on data
//   //       },
//   //     },
//   //     y: {
//   //       ticks: {
//   //         beginAtZero: true,
//   //       },
//   //     },
//   //   },
//   // };
//  const options={
//   plugins : {
//     legend : true,
//   },
//   scales: {
//     x: {
//       type: 'time', // Using time scale for x-axis
//       time: {
//         unit: 'hour', // Set the time unit
//          displayFormats: {
//           day: 'YYYYMMDD', // Format for displaying dates
//          },
//       },
//       ticks: {
//         source: 'auto', // Automatically determine tick placement based on data
//       },
//     },
//     y: {
//       ticks: {
//         beginAtZero: true,
//       },
//     },
//   },
//  }
//   return (
//     <>
//     <Row className='header'>
//       <Title level={2} className='chart-title'>{coinName} Price chart</Title>
//       <Col>
//          <Title level={5} className='price-change'>Change : {coinHistory?.data?.change}</Title>
//          <Title level={5} className='current-price'>Current {coinName} price : ${currentPrice}</Title>
//       </Col>
//     </Row>
//     <Line data={data} options={options}/>
//     </>
//   )
// }

// export default LineChart