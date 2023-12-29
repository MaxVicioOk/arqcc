import './App.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
