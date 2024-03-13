import {createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import config from '../config';
const cryptoNewsHeaders ={
    'X-RapidAPI-Key': config.coinRankingApiKey,
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}

const baseURL='https://cryptocurrency-news2.p.rapidapi.com';

const createRequest= (url) => ({url, headers:cryptoNewsHeaders})
export const cryptoNewsApi=createApi({
    reducerPath : 'cryptoNewsApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://cryptocurrency-news2.p.rapidapi.com'
    }),
    endpoints : (builder) => ({
        getCryptoNews : builder.query({
            query : ()=> createRequest('/v1/coindesk')
        }),
    }),
})
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
