import { Link } from "react-router-dom"
import { noSeries } from "../assets"
import { container } from "../classes"
import { useEffect } from "react"

const NotFoundPage = () => {


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, [])
    return (
        <div>
            <div className={`${container}`}>
                <div className="flex flex-col items-center justify-center">
                    <img src={noSeries} alt="page not found image" className="w-[500px]" />
                    <p className="capitalize lg:text-18 text-16 text-lightGray p-[10px] border-1 border-brightBlue w-full text-center rounded-[8px] font-semibold mt-[20px]">
                        Sorry, this page does not exist. To go to the home page, click on this Link <Link to='/' className="underline inline-block font-bold text-brightBlue">Home</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage