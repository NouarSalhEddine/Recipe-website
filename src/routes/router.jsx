import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@layouts/Layout'
import { Home, Help } from '@views'
import RecipeDetail from '../views/home/RecipeDetail';

const Router = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path='/help' element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
