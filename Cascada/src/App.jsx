import KitPage from "./pages/KitPage/KitPage";
import {Routes,Route} from 'react-router-dom'
import Layout from "./layouts/Layout/Layout.jsx";

function App() {

  return (      
    <Routes>

      <Route element={<Layout/>}>
          <Route path='/' element={<h3>Portada</h3>}></Route>
          <Route path='/kit' element={<KitPage/>}></Route>
      </Route>
      
    </Routes>
  )
}

export default App