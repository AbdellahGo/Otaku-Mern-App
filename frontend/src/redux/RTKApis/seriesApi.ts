import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


type SeriesType = {
    data: {
        _id: string,
        title: string,
        image: string,
        status: string,
        chapters: number
    }[] | undefined
}
type SerieType = {
    _id: string,
    title: string,
    image: string,
    status: string,
    chapters: number
    type: string
    author: string,
    lastReadChapter: string
    genres: string[]
    description: string,
    releaseDate: string
} | undefined

const baseUrl = 'https://otaku-mern-app.onrender.com/otaku'
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