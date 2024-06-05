import express from 'express'
import { Otaku } from '../models/otakuModel.js'

const router = express.Router()


//? Route for Save a new (Manga, Manhwa, Manhua, Anime)

router.post('/', async (request, response) => {
    const { title, type, releaseDate, status, chapters, author, genres, lastReadChapter, description, image } = request.body
    try {
        if (
            !title || !type || !releaseDate || !status ||
            !chapters || !author || genres.length <= 0 ||
            !description || !image || !lastReadChapter
        ) {
            return response.status(400).send(({
                message: 'send all required fields:  title, type, releaseDate, status, chapters, author, genres, description, image '
            }))
        }
        const newOtaku = {
            title, type, releaseDate, status, chapters, author, genres, description, image, lastReadChapter
        }
        const otaku = await Otaku.create(newOtaku)
        return response.status(201).send(otaku)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

//? Route for Get All (Manga, Manhwa, Manhua, Anime) from database
router.get('/', async (request, response) => {
    try {
        const otaku = await Otaku.find({})
        return response.status(200).json({
            count: otaku.length,
            data: otaku
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})
router.get('/anime', async (request, response) => {
    try {
        const otaku = await Otaku.find({})
        const anime = otaku.filter((item) => item.type.toLocaleLowerCase() === 'anime')
        return response.status(200).json({
            count: anime.length,
            data: anime
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})
router.get('/manga', async (request, response) => {
    try {
        const otaku = await Otaku.find({})
        const manga = otaku.filter((item) => item.type.toLocaleLowerCase() === 'manga')
        return response.status(200).json({
            count: manga.length,
            data: manga
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})
router.get('/manhua', async (request, response) => {
    try {
        const otaku = await Otaku.find({})
        const manhua = otaku.filter((item) => item.type.toLocaleLowerCase() === 'manhua')
        return response.status(200).json({
            count: manhua.length,
            data: manhua
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})
router.get('/manhwa', async (request, response) => {
    try {
        const otaku = await Otaku.find({})
        const manhwa = otaku.filter((item) => item.type.toLocaleLowerCase() === 'manhwa')
        return response.status(200).json({
            count: manhwa.length,
            data: manhwa
        })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})


//? Route for get one (Manga, Manhwa, Manhua, Anime) from database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const otaku = await Otaku.findById(id)
        return response.status(200).json(otaku)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

//? Route for update a (Manga, Manhwa, Manhua, Anime)
router.put('/:id', async (request, response) => {
    const { title, type, releaseDate, status, chapters, author, genres,lastReadChapter, description, image } = request.body
    try {
        if (
            !title || !type || !releaseDate || !status ||
            !chapters || !author || !genres ||
            !description || !image || !lastReadChapter
        ) {
            return response.status(400).send(({
                message: 'send all required fields:  title, type, releaseDate, status, chapters, author, genres, description, image '
            }))
        }
        const { id } = request.params
        const result = await Otaku.findByIdAndUpdate(id, request.body)
        if (!result) {
            return response.status(400).json({ message: 'otaku not found' })
        }
        return response.status(200).send({ message: 'otaku updated successfully' })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

//? Route for Delete a (Manga, Manhwa, Manhua, Anime)
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const result = await Otaku.findByIdAndDelete(id)
        if (!result) {
            return response.status(400).json({ message: 'otaku not found' })
        }
        return response.status(200).send({ message: 'otaku deleted successfully' })
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message })
    }
})

export default router