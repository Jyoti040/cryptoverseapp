import {createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../config';

const cryptoApiHeaders ={
     'X-RapidAPI-Key': config.coinRankingApiKey,
     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseURL='https://coinranking1.p.rapidapi.com';

const createRequest= (url) => ({url, headers:cryptoApiHeaders})
export const cryptoApi=createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://coinranking1.p.rapidapi.com'
    }),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : ()=> createRequest('/coins')
        }),
        getCryptosDetails : builder.query({
            query : (coinId)=> createRequest(`/coin/${coinId}`)
        }),
        getCryptosHistory : builder.query({
            query : (coinId)=> createRequest(`/coin/${coinId}/history`)
        }),
    }),
})
export const { useGetCryptosQuery ,useGetCryptosDetailsQuery ,useGetCryptosHistoryQuery } = cryptoApi;

  