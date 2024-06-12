import { useEffect } from "react"
import {FavoriteSeries, HeroSection} from "../components"
const Home = () => {



  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <HeroSection/>
      <FavoriteSeries sectionBar serieType='manga' />
      <FavoriteSeries sectionBar serieType='manhua' />
      <FavoriteSeries sectionBar serieType='manhwa' />
      <FavoriteSeries sectionBar serieType='anime' />
    </div>
  )
}

export default Home