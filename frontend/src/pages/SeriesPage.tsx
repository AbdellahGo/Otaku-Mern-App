import { useEffect } from "react"
import { FavoriteSeries } from "../components"

const SeriesPage = ({ serieType }: { serieType: string }) => {


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, [])
    return (
        <div>
            <FavoriteSeries serieType={serieType} />
        </div>
    )
}

export default SeriesPage