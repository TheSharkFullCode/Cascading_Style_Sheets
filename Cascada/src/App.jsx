import {Routes,Route} from 'react-router-dom'
import Layout from "./layouts/Layout/Layout.jsx";
import { lazy } from "react";
const KitPage = lazy(()=> import('./pages/KitPage/KitPage.jsx'))
const NoEncontrada = lazy(()=> import('./pages/NoEncontrada/NoEncontrada.jsx'))

function App() {

  return (      
    <Routes>

      <Route element={<Layout/>}>
          <Route path='/' element={<h3>Portada</h3>}></Route>
          <Route path='/kit' element={<KitPage/>}></Route>
          <Route path='*' element={<NoEncontrada/>}></Route>
      </Route>
      
    </Routes>
  )
}

export default App