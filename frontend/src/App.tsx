import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import {CreateSeries, Home, OtakuDetails, SeriesPage, EditSeries, NotFoundPage } from "./pages"
import RootLayout from "./layout/RootLayout"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} >
        <Route index element={<Home />} />

        <Route path="anime" element={<SeriesPage serieType="anime" />} />
        <Route path="manga" element={<SeriesPage serieType="manga" />} />
        <Route path="manhua" element={<SeriesPage serieType="manhua" />} />
        <Route path="manhwa" element={<SeriesPage serieType="manhwa" />} />
        <Route path="otaku-details/:id" element={<OtakuDetails />} />
        <Route path="create-series" element={<CreateSeries />} />
        <Route path="edit-series/:id" element={<EditSeries />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

    )
  )
  return <RouterProvider router={router} />
}

export default App