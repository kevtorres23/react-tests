import { useState } from 'react'
import './Styles/App.css'
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <section className="h-screen flex align-middle bg-gradient-to-r from-emerald-300 to-emerald-600">
        <div className="max-w-screen-xl px-2 py-8 mx-auto flex lg:gap-8">
          <div className="hidden lg:mt-0 lg:flex lg:col-span-5">
          </div>
          <div className="mr-auto place-self-center lg:col-span-7 flex flex-col">
            <h1 className="max-w-2xl mb-4 font-spartan font-semibold tracking-tight leading-none text-5xl md:text-6xl xl:text-7xl text-white text-right">Diseño, Bordado Digital e Impresión</h1>
            <p className="max-w-2xl mb-6 font-spartan font-regular text-white lg:mb-8 text-lg sm:text-2xl lg:text-2xl xl:text-2xl dark:text-gray-400 text-right">Somos una empresa dedicada a la personalización de textiles con bordados, impresiones en vinil y sublimado.</p>
            <button type="button" className="flex place-self-end py-2.5 px-5 me-2 mb-2 font-spartan text-xl font-semibold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-emerald-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Ver más</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
