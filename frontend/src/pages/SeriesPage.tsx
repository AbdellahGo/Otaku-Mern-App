import { FavoriteSeries } from "../components"

const SeriesPage = ({ serieType }: { serieType: string }) => {
    return (
        <div>
            <FavoriteSeries serieType={serieType} />
        </div>
    )
}

export default SeriesPage