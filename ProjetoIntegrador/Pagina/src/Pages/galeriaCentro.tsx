import './galeriaCentro.css'
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import { useState } from 'react'
import returnIcon from '../assets/returnIcon.svg'
import CTCT1 from '../assets/CTCT1.jpg'
import CTCT2 from '../assets/CTCT2.jpg'
import CTCT3 from '../assets/CTCT3.jpg'
import CTCT4 from '../assets/CTCT4.jpg'
import CTCT5 from '../assets/CTCT5.jpg'
import CTCT6 from '../assets/CTCT6.jpg'
import CTCT7 from '../assets/CTCT7.jpg'
import CTCT8 from '../assets/CTCT8.jpg'
import Footer from '../components/Footer'

const GaleriaCentro = () => {

  const [overlay, setOverlay] = useState (false)

  const handleOnClickHome = () => {
      setOverlay(true)
  
      setTimeout(() => {
          window.location.href = '/'
      }, 1500)

      setTimeout(() => {
          setOverlay(false)
      }, 2000)
  }

  const handleOnClickReturn = () => {
    setOverlay(true)

    setTimeout(() => {
        window.location.href = '/galeria-de-fotos'
    }, 1500)

    setTimeout(() => {
        setOverlay(false)
    }, 2000)
}

  return (
    <div className="page-galeria-centro">
      <div style={{display: overlay? 'flex' : 'none' }} className="overlay">
        <img className='loading-top' src={overlayLoadingCircle}></img>
        <img className='loading-logo' src={LogoSemeandoCampeoes}></img>
      </div>
      <header>
          <div className="logo">
              <img onClick={handleOnClickHome} src={LogoSemeandoCampeoes} alt="Logo Semeando Campeões"></img>
          </div>
          <div className="title">
                <h1>Semeando Campeões</h1>
                <span className="subtitle">Galeria: Centro</span>
            </div>
        </header>

        <div className="container-photos-centro">

            <div className="box-return">
              <div className="title-return">
                <span>Escolher outra galeria:</span>
              </div>
              <div className="icon-return">
                <img onClick={handleOnClickReturn} src={returnIcon} alt="icone de retornar" />
              </div>
            </div>

            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTCT1}></img></a>
            </div>
            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTCT2}></img></a>
            </div>

            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTCT3}></img></a>
            </div>
            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTCT4}></img></a>
            </div>
            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTCT5}></img></a>
            </div>

            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTCT6}></img></a>
            </div>
            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTCT7}></img></a>
            </div>
            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTCT8}></img></a>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default GaleriaCentro