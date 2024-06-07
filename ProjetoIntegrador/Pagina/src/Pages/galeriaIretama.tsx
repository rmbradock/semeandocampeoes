import './galeriaIretama.css'
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import { useState } from 'react'
import returnIcon from '../assets/returnIcon.svg'
import CTI from '../assets/CTIretama.jpg'
import CTI1 from '../assets/CTIretama3.jpg'
import CTI2 from '../assets/CTIretama4.jpg'
import CTI3 from '../assets/CTIretama8.jpg'
import CTI4 from '../assets/CTIretama10.jpg'
import CTI5 from '../assets/CTIretama5.jpg'
import CTI6 from '../assets/CTIretama6.jpg'
import CTI7 from '../assets/CTIretama7.jpg'
import Footer from '../components/Footer'

const GaleriaIretama = () => {
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
    <div className="page-galeria-iretama">
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
                <span className="subtitle">Galeria: Iretama</span>
            </div>
        </header>

        <div className="container-photos-iretama">

            <div className="box-return">
                <div className="title-return">
                  <span>Escolher outra galeria:</span>
                </div>
                <div className="icon-return">
                  <img onClick={handleOnClickReturn} src={returnIcon} alt="icone de retornar" />
                </div>
              </div>
              <div className="box">
                <img src={CTI}></img>
              </div>
              <div className="box">
                <img src={CTI1}></img>
              </div>

            <div className="box">
            <img src={CTI2}></img>
            </div>
            <div className="box">
            <img src={CTI3}></img>
            </div>
            <div className="box">
            <img src={CTI4}></img>
            </div>

            <div className="box">
            <img src={CTI5}></img>
            </div>
            <div className="box">
            <img src={CTI6}></img>
            </div>
            <div className="box">
            <img src={CTI7}></img>
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default GaleriaIretama