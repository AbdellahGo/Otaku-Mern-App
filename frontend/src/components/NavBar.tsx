import { NavLink, Link, useLocation } from 'react-router-dom';
import { container } from "../classes"
import { manga, otakuLogo, profileAvatar } from '../assets'
import { useEffect, useRef, useState } from 'react';
import { FaRegCircleXmark } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";


type NavLinksTypes = {
  id: number;
  text: string;
  link: string;
}[]
type SourcesTypes = {
  id: number,
  title: string,
  link: string
}[]

const navLinks: NavLinksTypes = [
  {
    id: 1,
    text: 'Home',
    link: '/'
  },
  {
    id: 2,
    text: 'Anime',
    link: '/anime'
  },
  {
    id: 3,
    text: 'Manga',
    link: '/manga'
  },
  {
    id: 4,
    text: 'Manhua',
    link: '/manhua'
  },
  {
    id: 5,
    text: 'Manhwa',
    link: '/manhwa'
  },
  {
    id: 6,
    text: 'Create',
    link: '/create-series'
  },
]
const sources: SourcesTypes = [
  {
    id: 1,
    title: 'MangaLionz',
    link: 'https://manga-lionz.com/'
  },
  {
    id: 2,
    title: 'Lekmanga',
    link: 'https://lekmanga.net/'
  },
  {
    id: 3,
    title: 'Azoramoon',
    link: 'https://azoramoon.com/'
  },
  {
    id: 4,
    title: 'Mangarose',
    link: 'https://mangarose.net/'
  },
  {
    id: 5,
    title: 'Teamxnovel',
    link: 'https://teamxnovel.com/'
  },
  {
    id: 6,
    title: 'Areascans',
    link: 'https://www.areascans.net/'
  },
  {
    id: 7,
    title: 'Swatmanga',
    link: 'https://normoyun.com/'
  },
  {
    id: 8,
    title: 'Xsaniime',
    link: 'https://xsaniime.com/'
  },
  {
    id: 9,
    title: 'Anime3rb',
    link: 'https://anime3rb.com/'
  },
]

const NavBar = () => {
  const [sourcesToggle, setSourcesToggle] = useState<boolean>(false)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const { pathname } = useLocation()
  const [activeLink, setActiveLink] = useState(pathname)
  const [activeMenu, setActiveMenu] = useState<boolean>(false)
  const [alert, setAlert] = useState<[boolean, string | null]>([false, null])
  const usernameInput = useRef<HTMLInputElement | null>(null)
  const passwordInput = useRef<HTMLInputElement | null>(null)
  const inputStyles = 'bg-darkBlueGray outline-none border-none placeholder:text-lightSkyBlue'
  const parentInputStyles = 'p-[15px] border-1 border-lightSkyBlue rounded-[12px] text-lightSkyBlue text-[16px]'
  const [activeSubMenu, setActiveSubMenu] = useState<boolean>(false)




  const handleLogin = (e: React.FormEvent) => {
    const username = usernameInput.current?.value
    const password = passwordInput.current?.value
    if (username === process.env.USERNAME_DB && password === process.env.PASSWORD_DB) {
      e.preventDefault()
      const userData = { username, password }
      localStorage.setItem('userData', JSON.stringify(userData))
      setActiveSubMenu(false)
      setAlert([true, 'success'])
      usernameInput.current!.value = ''
      passwordInput.current!.value = ''
    }
    else {
      e.preventDefault()
      setActiveSubMenu(false)
      setAlert([true, 'fail'])
    }
  }
  const handleControlMenus = (type: 'menu' | 'login') => {
    if (type === 'menu') {
      setActiveMenu((prev) => !prev)
      setActiveSubMenu(false)
    }
    if (type === 'login') {
      setActiveSubMenu((prev) => !prev)
      setActiveMenu(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('userData')
  }

  useEffect(() => {
    setActiveLink(pathname)
  }, [pathname])

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData') as string)
    if (userData) {
      setIsLoggedIn(true)
    }
  }, [])
  return (
    <nav className='border-b-1 text-white border-lightSkyBlue py-[12px]'>
      <div className={`${container}`}>
        {alert[0] && (
          <div className='flex items-center justify-center relative mb-[20px] p-[10px] border-brightBlue border-1 rounded-[4px]'>
            <p className='text-16 font-medium capitalize text-center'>{alert[1] === 'success' ? 'You have successfully logged in' : 'Unfortunately, this is not the correct data'}</p>
            <FaRegCircleXmark className='absolute right-[20px] text-[18px] cursor-pointer'
              onClick={() => setAlert([false, null])} />
          </div>
        )}
        <div className='flex justify-between relative'>
          <Link to='/' className='flex items-center gap-[16px]'>
            <img src={otakuLogo} alt="otakuLogo" className='w-[16px] h-[16px]' />
            <h1 className='font-bold text-18 leading-[22.5px] '>Otaku</h1>
          </Link>
          <ul className={`z-[10000] bg-darkBlueGray flex md:flex-row flex-col items-center lg:gap-[15px] gap-[10px] Mmd:absolute Mmd:right-0 Mmd:rounded-[5px] Mmd:w-[250px] Mmd:p-[10px] Mmd:top-[70px] Mmd:border-1 Mmd:border-lightSkyBlue
            ${activeMenu ? 'Mmd:flex' : 'Mmd:hidden'}`}>
            {navLinks.map(({ id, text, link }) => (
              <li key={id} className='w-full'>
                <NavLink to={link} className={` ${activeLink === link ? 'bg-brightBlue' : ''}
                  transition Mmd:border-1 w-full border-lightSkyBlue text-14 font-medium leading-[21px] hover:bg-brightBlue lg:px-[15px] px-[10px] py-[8px] rounded-[4px] block`}
                  onClick={() => {
                    setActiveMenu(false)
                    setActiveLink(link)
                  }}>
                  {text}
                </NavLink>
              </li>
            ))}
            <li className='w-full relative'>
              <button className='flex items-center justify-between gap-[4px] text-start transition Mmd:border-1 w-full border-lightSkyBlue text-14 font-medium leading-[21px] hover:bg-brightBlue lg:px-[15px] px-[10px] py-[8px] rounded-[4px]'
                onClick={() => setSourcesToggle((prev) => !prev)}>
                Sources
                <IoIosArrowDown className='text-16'/>
              </button>
              <div className={`${sourcesToggle ? 'flex': 'hidden'} flex-col gap-[10px] pt-[10px] md:absolute md:w-[230px] md:bg-darkBlueGray md:border-1 border-lightSkyBlue md:p-[15px] rounded-[8px] md:top-[70px] md:right-0`}>
                {sources.map(({ id, title, link }) => (
                  <a key={id} href={link} target='_blank' className='hover:bg-deepSlateBlue transition flex items-center gap-[4px] border-1 border-lightSkyBlue rounded-[4px] p-[6px]'>
                    <img src={manga} alt="image" className='w-[20px]' />
                    <h4 className='text-[12px]'>{title}</h4>
                  </a>
                ))}
              </div>
            </li>
          </ul>
          <div className='flex gap-[15px] flex-row-reverse'>
            <button className='block' onClick={() => handleControlMenus('login')}>
              <img src={profileAvatar} alt="profileAvatar" className='w-[40px] h-[40px]' />
            </button>
            <div className='md:hidden flex items-center menu'>
              <IoMenu className='text-[40px] cursor-pointer' onClick={() => handleControlMenus('menu')} />
            </div>
          </div>
          {activeSubMenu && (
            <form className='z-[10000] flex flex-col gap-[16px] px-[16px] pb-[16px] pt-[40px] border-1 border-lightSkyBlue w-[263px] absolute top-[70px] right-0 rounded-[10px] bg-veryDarkBlueGray'>
              <>
                {isLoggedIn ? (
                  <button className='bg-brightBlue px-[15px] py-[8px] rounded-[5px] text-14'
                    onClick={handleLogout}>Logout</button>
                ) : (
                  <>
                    <div className={parentInputStyles}>
                      <input ref={usernameInput} required type="text" placeholder='Username' className={inputStyles} />
                    </div>
                    <div className={parentInputStyles}>
                      <input ref={passwordInput} required type="password" placeholder='Password' className={inputStyles} />
                    </div>
                    <div className='flex justify-between items-center'>
                      <div className='flex items-center gap-[5px]'>
                        <div className='w-[15px] h-[15px] rounded-[2px] border-1 bg-brightBlue border-white' />
                        <label htmlFor='checkbox' className='text-14'>Remember me</label>
                      </div>
                      <button onClick={handleLogin} className='bg-grayBlue px-[15px] py-[8px] rounded-[5px] text-14'>Submit</button>
                    </div>
                  </>
                )}
              </>
              <FaRegCircleXmark className='absolute right-[16px] top-[10px] text-[20px] cursor-pointer'
                onClick={() => setActiveSubMenu(false)} />
            </form>
          )}
        </div>
      </div >
    </nav >
  )
}

export default NavBar