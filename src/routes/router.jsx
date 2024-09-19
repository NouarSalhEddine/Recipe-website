import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@layouts/Layout'
import { Home, Help } from '@views'

const Router = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='/help' element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
