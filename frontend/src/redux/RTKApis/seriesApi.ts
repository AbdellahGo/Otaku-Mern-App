import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


type SeriesType = {
    data: {
        _id: string,
        title: string,
        image: string,
        status: string,
        type: string,
        chapters: string
        lastWatch: string
    }[] | undefined
}
type SerieType = {
    _id: string,
    title: string,
    image: string,
    source: string,
    status: string,
    chapters: string
    type: string
    author: string,
    lastWatch: string
    genres: string[]
    description: string,
    releaseDate: string
} | undefined

const baseUrl = 'https://otaku-mern-app.onrender.com/otaku'
// const baseUrl = 'http://localhost:8080/otaku'
export const seriesApi = createApi({
    reducerPath: 'seriesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getSeriesByType: builder.query<SeriesType, string>({
            query: (type) => `/${type}`
        }),
        getSerieById: builder.query<SerieType, string | undefined>({
            query: (id) => `/${id}`
        })
    })
})

export const { useGetSeriesByTypeQuery, useGetSerieByIdQuery } = seriesApi