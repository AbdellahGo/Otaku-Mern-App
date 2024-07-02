import { Link } from "react-router-dom"
import { container } from "../classes"
import { useGetSeriesByTypeQuery } from "../redux/RTKApis/seriesApi"
import SeriesCard from "./SeriesCard"
import { useEffect } from "react"
import { Alert, Loader } from "../components"

type Props = {
    serieType: string
    sectionBar?: boolean
}

const FavoriteSeries = ({ serieType, sectionBar }: Props) => {
    const { data, isLoading, refetch } = useGetSeriesByTypeQuery(serieType)
    const slicedData = (sectionBar ? data?.data?.slice(0, 4) : data?.data) || []

    useEffect(() => {
        refetch();
    }, []);
    return (
        <>
            <div>
                <div className={`${container}`}>
                    <div className="xl:px-[80px] px-[15px] text-white">
                        <div className="flex items-center justify-between mt-[20px] py-[12px]">
                            <h3 className="capitalize text-[25px] font-bold leading-[27.5px]">{serieType}</h3>
                            {sectionBar && slicedData?.length > 0 && (
                                <Link to={`/${serieType}`} className="block bg-brightBlue py-[10px] rounded-[5px] text-16  px-[12px] capitalize">More {serieType}</Link>
                            )}
                        </div>
                        {isLoading ? (
                            <Loader/>
                        ) : (
                            <>
                                {slicedData!.length > 0 ? (
                                    <div className="pt-[20px] grid xl:grid-cols-4  md:grid-cols-2 xl:gap-x-[12px] gap-x-[20px] gap-y-[20px]">
                                        {slicedData?.map(({ _id, title, image, status,type, chapters, lastWatch }) => (
                                            <SeriesCard key={_id} id={_id} type={type} title={title} image={image} status={status} chapters={chapters} lastWatch={lastWatch} />
                                        ))}
                                    </div>
                                ) : (
                                    <Alert serieType={serieType} />
                                )}
                            </>
                        )}
                        <div className="mt-[25px]">
                            <Link to='/create-series' className="capitalize block w-fit ml-auto rounded-[12px] px-[16px] py-[14px] bg-grayBlue hover:bg-brightBlue transition text-14 font-bold">
                                Add serie
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default FavoriteSeries