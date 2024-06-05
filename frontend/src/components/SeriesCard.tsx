import { defaultImage } from "../assets"
import { Link } from "react-router-dom"

type Props = {
    id: string,
    title: string,
    image: string,
    status: string,
    chapters: number
}

const SeriesCard = ({ id, title, image, status, chapters}: Props) => {
    return ( 
        <div className="bg-darkGrayBlue rounded-[12px] p-[15px]">
            <Link to={`/otaku-details/${id}`} key={id} className="block">
                <img src={image || defaultImage} alt={title} className="rounded-[12px] xl:h-[150px] h-[250px] w-full object-cover" />
                <div className="mt-[12px]">
                    <h4 className="font-medium text-16 leading-[24px]">{title}</h4>
                    <p className="text-14 text-lightSkyBlue">{status}, {chapters} chapters</p>
                </div>
            </Link>
        </div>
    )
}

export default SeriesCard