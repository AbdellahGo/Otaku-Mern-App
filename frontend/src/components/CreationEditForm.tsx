import { useEffect, useState } from "react";
import { container } from "../classes"
import { FaLink } from "react-icons/fa";
import { ArgTypes } from '../types'
import { useParams } from "react-router-dom";
import axios from "axios";


const CreationEditForm: React.FC<{ handleNatureCall: (e: React.MouseEvent<HTMLButtonElement>, args: ArgTypes) => Promise<void> }> = ({ handleNatureCall }) => {
    const { id } = useParams()
    const [selectedGenres, setSelectedGenres] = useState<string[]>([])
    const [title, setTitle] = useState<string>('')
    const [type, setType] = useState<string>('Manga')
    const [releaseDate, setReleaseDate] = useState<string>('')
    const [status, setStatus] = useState<string>('Complete')
    const [chapters, setChapters] = useState<string>('')
    const [lastReadChapter, setLastReadChapter] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [imageUrl, setImageUrl] = useState<string>('')

    const formData = { title, type, releaseDate, status, chapters, author, description, imageUrl, selectedGenres, lastReadChapter }

    const inputStyles: string = 'w-full outline-none bg-veryDarkBlueGray p-[15px] rounded-[12px] placeholder:text-lightSkyBlue text-16 leading-[24px] text-lightSkyBlue border-1 border-lightSkyBlue'
    const labelStyles: string = 'block text-18 font-semibold mb-[8px]'
    const typeOptions: string[] = ['Manga', 'Manhwa', 'Manhua', 'Anime']
    const statusOptions: string[] = ['Complete', 'Stopped', 'Continuous']
    const genres: string[] = [
        "Action",
        "Adventure",
        "Comedy",
        "Drama",
        "Fantasy",
        "Horror",
        "Mystery",
        "Romance",
        "Sci-Fi",
        "Slice of Life",
        "Sports",
        "Supernatural",
        "Thriller",
        "Historical",
        "Martial Arts",
        "Mecha",
        "Music",
        "Psychological"
    ]

    const handleSelectedGenres = (genre: string) => {
        let genresList = [...selectedGenres];
        if (genresList.includes(genre)) {
            genresList = genresList.filter((item) => item !== genre);
        } else {
            genresList.push(genre);
        }
        setSelectedGenres(genresList);
    };

    useEffect(() => {
        if (id) {
            axios.get(`https://otaku-mern-app.onrender.com/otaku/${id}`)
            .then((response) => {
                const { genres, title, type, releaseDate, status, chapters, author, description, image, lastReadChapter } = response.data
                setSelectedGenres(genres)
                setTitle(title)
                setType(type)
                setReleaseDate(releaseDate === 'Not entered' ? '' : releaseDate)
                setStatus(status)
                setChapters(chapters === 'Not entered' ? '' : chapters)
                setLastReadChapter(lastReadChapter)
                setAuthor( author === 'Not entered' ? '' : author)
                setDescription(description === 'Not entered' ? '' : description)
                setImageUrl(image)
            }).catch((error) => {
                console.log(error);
            });
        }

    }, [])

    return (
        <div className="py-[20px]">
            <div className={`${container}`}>
                <div className="flex flex-col justify-start items-center text-white">
                    <h3 className="md:w-[512px] w-full py-[16px] font-bold text-33 leading-[45px]">Add a new entry</h3>
                    <form className="md:w-[512px] w-full">
                        <div className="py-[12px]">
                            <label className={`${labelStyles}`}>Title</label>
                            <input value={title} required type="text" placeholder="Title" className={`${inputStyles}`}
                                onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="py-[12px]">
                            <label className={`${labelStyles}`}>Select Type</label>
                            <select defaultValue={type} required className={`${inputStyles}`}
                                onChange={(e) => setType(e.target.value)}>
                                {typeOptions.map((item) => (
                                    <option key={item} value={item} >{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className="py-[12px]">
                            <label className={`${labelStyles}`}>Release Date</label>
                            <input value={releaseDate} type="text" placeholder="Release Date" className={`${inputStyles}`}
                                onChange={(e) => setReleaseDate(e.target.value)} />
                        </div>
                        <div className="py-[12px]">
                            <label className={`${labelStyles}`}>Select Status</label>
                            <select defaultValue={status} className={`${inputStyles}`}
                                onChange={(e) => setStatus(e.target.value)}>
                                {statusOptions.map((item) => (
                                    <option key={item} value={item} >{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className="py-[12px]">
                            <label className={`${labelStyles}`}>N°Chapters</label>
                            <input value={chapters} required type="number" placeholder="N°Chapters" className={`${inputStyles}`}
                                onChange={(e) => setChapters(e.target.value)} />
                        </div>
                        <div className="py-[12px]">
                            <label className={`${labelStyles}`}>Last Read Chapter</label>
                            <input value={lastReadChapter} type="number" placeholder="Last Read Chapter" className={`${inputStyles}`}
                                onChange={(e) => setLastReadChapter(e.target.value)} />
                        </div>
                        <div className="py-[12px]">
                            <label className={`${labelStyles}`}>Author</label>
                            <input value={author} type="text" placeholder="Author" className={`${inputStyles}`}
                                onChange={(e) => setAuthor(e.target.value)} />
                        </div>
                        <div className="py-[12px]">
                            <div className={`${inputStyles}`}>
                                <p className="mt-[5px] mb-[12px]">Genres</p>
                                <div className="py-[12px] flex flex-wrap gap-[12px]">
                                    {genres.map((item) => (
                                        <button type="button" key={item} className={`block text-white text-14 leading-[21px] font-medium rounded-[12px] py-[8px] px-[16px]
                                        ${selectedGenres.includes(item) ? 'bg-brightBlue' : 'bg-grayBlue'}`}
                                            onClick={() => handleSelectedGenres(item)}>
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="py-[12px]">
                            <label className={`${labelStyles}`}>Description</label>
                            <textarea value={description} placeholder="Description" className={`h-[150px] resize-none ${inputStyles}`}
                                onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className="py-[12px]">
                            <label className={`${labelStyles}`}>Image Url</label>
                            <div className='border-1 border-lightSkyBlue rounded-[12px] relative'>
                                <input value={imageUrl} required placeholder="Image Url" className={`border-none ${inputStyles}`}
                                    onChange={(e) => setImageUrl(e.target.value)} />
                                <FaLink className="absolute text-lightSkyBlue text-18 right-[12px] top-[50%] translate-y-[-50%]" />
                            </div>
                        </div>
                        <div className="py-[12px]">
                            <button type="submit" className="bg-brightBlue px-[20px] py-[10px] rounded-[12px] text-16 leading-[24px] font-bold w-full"
                                onClick={(e) => handleNatureCall(e, formData)}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreationEditForm