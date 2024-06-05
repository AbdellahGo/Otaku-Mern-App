import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from '../components'

const RootLayout = () => {
  return (
    <div className='flex flex-col justify-between h-[100vh]'>
      <div>
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout