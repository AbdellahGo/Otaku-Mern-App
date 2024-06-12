import { defaultImage } from "../assets"
import { Link } from "react-router-dom"

type Props = {
    id: string,
    title: string,
    image: string,
    status: string,
    chapters: string,
    lastWatch: string
    type: string
}

const SeriesCard = ({ id, title, type, image, status, chapters, lastWatch }: Props) => {
    const pStyles: string = 'bg-darkSlateBlue border-1 border-lightSkyBlue rounded-[12px] py-[4px] px-[10px] text-14 text-white'
    return (
        <div className="bg-darkGrayBlue rounded-[12px] p-[15px]">
            <Link to={`/otaku-details/${id}`} key={id} className="block">
                <img src={image || defaultImage} alt={title} className="rounded-[12px] xl:h-[150px] h-[250px] w-full object-cover " />
                <div className="mt-[12px]">
                    <h4 className="font-medium text-16 leading-[24px]">{title}</h4>
                    <div className="flex flex-wrap items-start gap-[10px] gap-y-[10px] mt-[15px]">
                        <p className={`${pStyles}`}>Status: <span className="text-lightSkyBlue">{status}</span></p>
                        <p className={`${pStyles}`}>{type === 'Anime' ? 'episodes' :'chapters'}: <span className="text-lightSkyBlue">{chapters}</span></p>
                        <p className={`${pStyles}`}>Last Watch: <span className="text-lightSkyBlue">{type === 'Anime' ? 'episode' :'chapter'} {lastWatch}</span></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SeriesCard