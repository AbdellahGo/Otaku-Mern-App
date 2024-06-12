import { useEffect } from 'react'
import {SerieDetails} from '../components'

const OtakuDetails = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <SerieDetails/>
    </div>
  )
}

export default OtakuDetails