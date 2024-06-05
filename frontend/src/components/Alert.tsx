import { FaInfoCircle } from 'react-icons/fa'
import { noSeries } from '../assets'

const Alert = ({serieType}: {serieType: string}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={noSeries} alt="no series image" className="w-[200px]" />
            <p className="capitalize lg:text-18 text-16 text-lightGray p-[10px] border-1 border-brightBlue w-full text-center rounded-[8px] font-semibold mt-[20px]">Unfortunately, you have not created any {serieType}
                <FaInfoCircle className="inline-block ml-[10px] lg:text-22 text-18" /></p>
        </div>
    )
}

export default Alert