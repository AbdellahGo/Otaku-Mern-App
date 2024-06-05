import { Link } from "react-router-dom"
import { banner } from "../assets"
import { container } from "../classes"

const HeroSection = () => {
    return (
        <div>
            <div className={`${container} mt-[20px]`}>
                <div className="p-[16px] flex justify-center ">
                    <div className="relative">
                        <img src={banner} alt="banner" className="rounded-[12px] w-[928px] object-cover" />
                        <div className="md:bottom-[30px] bottom-[10px] md:left-[30px] left-[10px] absolute text-white">
                            <h2 className="font-bold lg:text-48 md:text-[38px] sm:text-[28px] text-[20px]">Welcome back, Abdellah</h2>
                            <p className="mt-[8px] lading-[24px] md:text-16 text-14">Here's a quick look at your favorite series</p>
                            <Link to='/anime' className="block w-fit bg-brightBlue md:mt-[20px] mt-[8px] lg:rounded-[12px] rounded-[8px] lg:p-[20px] md:p-[16px] p-[10px] md:text-16 sm:text-14 text-[12px] font-medium leading-[24px]">Check your favorite anime</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection