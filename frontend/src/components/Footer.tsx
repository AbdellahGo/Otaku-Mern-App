import { container } from "../classes"
import { FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

type Icons = {
    id: number;
    icon: JSX.Element;
    link: string;
}[]

const Footer = () => {
    const icons: Icons = [
        {
            id: 1,
            icon: <FaTiktok />,
            link: 'https://www.tiktok.com/@zigzagxz3'
        },

        {
            id: 2,
            icon: <FaFacebookF />,
            link: 'https://www.facebook.com/profile.php?id=100053501469803'
        },
        {
            id: 3,
            icon: <FaGithub />,
            link: 'https://github.com/AbdellahGo'
        },
    ]
    return (
        <div className="bottom-0 mt-[20px] py-[16px] border-t-1 border-lightSkyBlue ">
            <div className={`${container}`}>
                <div className="flex items-center justify-between flex-col sm:flex-row Msm:text-center">
                    <p className="text-16">Copyright &copy; <span className="font-medium text-brightBlue">AbdellahGX</span> all rights reserved. Powered by <span className="font-medium text-brightBlue">AbdellahGX</span></p>
                    <div className="flex items-center gap-[15px] Msm:mt-[20px]">
                        {icons.map(({id, icon, link}) => (
                            <a href={link} target="_blank" key={id} className="border-1 border-white transition hover:bg-brightBlue bg-grayBlue text-[16px] flex items-center justify-center rounded-full w-[30px] h-[30px]">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer