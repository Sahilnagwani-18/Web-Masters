import Planets from "./Components/Planets/Planets"
import Navbar from "./Components/Home page/Navbar"
import Solarsystem from "./Components/Home page/Solarsystem"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from 'react-router-dom';



function App() {

  useEffect(() => {
    if (document.querySelector(".ct")) {
      document.querySelector(".ct").children[0].style = "top:0;opacity:1;"
      document.querySelector(".ct").children[1].style = "top:0;opacity:1;"
    }
  }, [])



  const router = createBrowserRouter([

    {
      path: "/",
      element: <> <div className="Container">
        <Navbar />
        <div className="ct">
          <h1><span className="cosmic">Cosmic</span> <span className="voyage">Voyage</span></h1>
          <p>That's one small step for man, one giant leap for mankind.</p>
        </div>
      </div>
        <Solarsystem />
      </>,
    },
    {
      path: "/planets",
      element: <><Planets /></>
    }

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

