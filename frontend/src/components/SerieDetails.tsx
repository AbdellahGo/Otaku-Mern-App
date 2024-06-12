import { Link, useNavigate, useParams } from "react-router-dom"
import { container } from "../classes"
import { useGetSerieByIdQuery } from "../redux/RTKApis/seriesApi"
import { useEffect, useState } from "react"
import axios from "axios"
import { FaRegCircleXmark } from "react-icons/fa6"
import { FaInfoCircle } from "react-icons/fa"
import { noSeries } from "../assets"
import Loader from "./Loader"

const SerieDetails = () => {
    const [noUser, setNoUser] = useState<boolean | null>()
    const [textExpand, setTextExpand] = useState<boolean>(false)
    const { id } = useParams()
    const navigate = useNavigate()
    const { data, isLoading, refetch } = useGetSerieByIdQuery(id)
    const headerStyles: string = 'px-[16px] pb-[12px] pt-[20px] text-white'
    
    const handleDeleteSerie = async () => {
        const userData = JSON.parse(localStorage.getItem('userData') as string)
        if (userData && userData?.username === process.env.USERNAME_DB && userData?.password === process.env.PASSWORD_DB) {
            setNoUser(false)
            try {
                axios.delete(`https://otaku-mern-app.onrender.com/otaku/${id}`)
                navigate('/')
            } catch (error) {
                console.log(error);
            }
        } else {
            setNoUser(true)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

    }

    useEffect(() => {
        refetch()
    }, [])


    return (
        <div>
            <div className={`${container}`}>
                {isLoading ? <Loader /> : (
                    <>
                        {data ? (
                            <>
                                {noUser && (
                                    <div className=" flex flex-col items-center justify-center">
                                        <p className="flex items-center justify-center relative capitalize lg:text-18 text-16 text-lightGray p-[10px] border-1 border-brightBlue w-full text-center rounded-[8px] font-semibold mt-[20px]">
                                            <span>You must log in first if you want to delete this serie</span>
                                            <FaInfoCircle className="inline-block ml-[10px] lg:text-22 text-18" />
                                            <FaRegCircleXmark className="absolute right-[20px] lg:text-22 text-18 cursor-pointer"
                                                onClick={() => setNoUser(false)} />
                                        </p>
                                    </div>
                                )}
                                <div className="xl:px-[80px] px-[15px] mt-[20px]">
                                    <div className="p-[16px] flex md:flex-row flex-col Mmd:gap-[20px] justify-between">
                                        <div className="flex gap-[16px]">
                                            <img src={data?.image} alt={data?.title} className="object-cover w-[128px] h-[128px] rounded-[12px]" />
                                            <div>
                                                <h3 className="text-22 font-bold text-white">{data?.title}</h3>
                                                <p className="flex flex-wrap items-center gap-[4px] text-16 font-normal text-lightSkyBlue">{data?.releaseDate} <span className=" inline-block bg-lightSkyBlue w-[4px] h-[4px] rounded-full" /> {data?.chapters} {data?.type === 'Anime' ? 'episodes' : 'chapters'}</p>
                                                <span className="text-16 text-lightSkyBlue capitalize">{data?.type}</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-end gap-[12px] items-start">
                                            <Link to={`/edit-series/${id}`} className="flex justify-center items-center w-[84px] h-[40px] px-[16px] rounded-[12px] text-14 text-white font-bold bg-grayBlue">Edit</Link>
                                            <button className=" w-[84px] h-[40px] px-[16px] rounded-[12px] text-14 text-white font-bold bg-brightBlue"
                                                onClick={handleDeleteSerie}>Delete</button>
                                        </div>
                                    </div>
                                    <div className="p-[16px]">
                                        <div className="rounded-[12px] border-1 border-deepSlateBlue flex md:flex-row justify-between flex-col md:items-center items-end gap-[30px] p-[20px]">
                                            <div>
                                                <h4 className="text-16 font-bold text-white">Description</h4>
                                                <p className="text-16 leading-[24px] text-lightSkyBlue">
                                                    {data?.description.slice(0, textExpand ? data?.description.length : 450)}
                                                    {data!.description.length > 450 && !textExpand ? '...' : ''}
                                                </p>
                                            </div>
                                            <button className="text-white bg-brightBlue px-[16px] py-[10px] rounded-[12px]"
                                                onClick={() => setTextExpand(prev => !prev)}>Expand</button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${headerStyles}`}>
                                            <h4 className="text-22 font-bold leading-[27px]">Type</h4>
                                            <p className="mt-[16px] text-[14px] leading-[24px] capitalize">{data?.type}</p>
                                        </div>
                                        <div className={`${headerStyles}`}>
                                            <h4 className="text-22 font-bold leading-[27px]">last Watch</h4>
                                            <p className="mt-[16px] text-[14px] leading-[24px] capitalize">{data?.type === 'Anime' ? 'episode' : 'chapter'}: {data?.lastWatch}</p>
                                        </div>
                                        <div className={`${headerStyles}`}>
                                            <h4 className="text-22 font-bold leading-[27px]">Genres</h4>
                                            <ul className="flex flex-wrap gap-[12px] mt-[16px]">
                                                {data?.genres.map((item, i) => (
                                                    <li key={i} className="text-14 font-medium leading-[21px] bg-grayBlue px-[16px] py-[8px] rounded-[12px] capitalize">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className={`${headerStyles}`}>
                                            <h4 className="text-22 font-bold leading-[27px]">Status</h4>
                                            <p className="mt-[16px] text-[14px] leading-[24px] capitalize">{data?.status}</p>
                                        </div>
                                        <div className={`${headerStyles}`}>
                                            <h4 className="text-22 font-bold leading-[27px]">Authors</h4>
                                            <p className="w-fit mt-[16px] text-[14px] font-medium leading-[21px] bg-grayBlue px-[16px] py-[10px] rounded-[12px] capitalize">{data?.author}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center">
                                <img src={noSeries} alt="no series image" className="w-[300px]" />
                                <p className="capitalize lg:text-18 text-16 text-lightGray p-[10px] border-1 border-brightBlue w-full text-center rounded-[8px] font-semibold mt-[20px]">Unfortunately, a problem occurred while downloading data. Check the console or try again
                                    <FaInfoCircle className="inline-block ml-[10px] lg:text-22 text-18" /></p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default SerieDetails