import { CreationEditForm } from "../components"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ArgTypes } from '../types'
import { PASSWORD_DB, USERNAME_DB } from "../config";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { container } from "../classes";
import { FaRegCircleXmark } from "react-icons/fa6";


const EditSeries = () => {
    const [noUser, setNoUser] = useState<boolean | null>()
    const { id } = useParams()
    const navigate = useNavigate()
    const handleEditSerie = async (e: React.MouseEvent<HTMLButtonElement>, { title, type, releaseDate, status, chapters,lastReadChapter, author, description, imageUrl, selectedGenres }: ArgTypes) => {
        if (title && type && chapters && imageUrl) {
            e.preventDefault()
            const userData = JSON.parse(localStorage.getItem('userData') as string)
            if (userData && userData?.username === USERNAME_DB && userData?.password === PASSWORD_DB) {
                setNoUser(false)
                try {
                    const data = {
                        genres: selectedGenres,
                        title: title,
                        type: type,
                        releaseDate: releaseDate || 'Not entered',
                        status: status,
                        chapters: chapters,
                        lastReadChapter: lastReadChapter,
                        author: author || 'Not entered',
                        description: description || 'Not entered',
                        image: imageUrl,
                    };
                    await axios.put(`https://otaku-mern-app.onrender.com/otaku${id}`, data);
                    navigate('/');
                } catch (error) {
                    if (axios.isAxiosError(error)) {
                        console.error('Error message:', error.message);
                    } else {
                        console.error('Unexpected error:', error);
                    }

                }
            } else {
                setNoUser(true)
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        }

    }

    return (
        <div>
            {noUser && (
                <div className={container}>
                    <div className=" flex flex-col items-center justify-center">
                        <p className="flex items-center justify-center relative capitalize lg:text-18 text-16 text-lightGray p-[10px] border-1 border-brightBlue w-full text-center rounded-[8px] font-semibold mt-[20px]">
                            <span>You must log in first if you want to Edit this serie</span>
                            <FaInfoCircle className="inline-block ml-[10px] lg:text-22 text-18" />
                            <FaRegCircleXmark className="absolute right-[20px] lg:text-22 text-18 cursor-pointer"
                                onClick={() => setNoUser(false)} />
                        </p>
                    </div>
                </div>
            )}
            <CreationEditForm handleNatureCall={handleEditSerie} />
        </div>
    )
}

export default EditSeries