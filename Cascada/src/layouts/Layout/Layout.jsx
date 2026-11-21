import { Outlet  } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Suspense } from "react";
import useScrollArriba from "../../hooks/useScrollArriba";

function Layout() {
    useScrollArriba()
  return (
    <>
        <header>
          <Navbar/>
        </header>        
        <main>
          <Suspense fallback={<p>Cargando ...</p>}>
              <Outlet/>
          </Suspense>
        </main>
        <Footer/>
    </>
  )
}

export default Layout
