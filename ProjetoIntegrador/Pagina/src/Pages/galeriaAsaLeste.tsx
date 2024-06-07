import './galeriaAsaLeste.css'
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import { useState } from 'react'
import returnIcon from '../assets/returnIcon.svg'
import CTLP1 from '../assets/CTLP1.jpg'
import CTLP2 from '../assets/CTLP2.jpg'
import CTLP3 from '../assets/CTLP3.jpg'
import CTLP4 from '../assets/CTLP4.jpg'
import CTLP5 from '../assets/CTCT5.jpg'
import CTLP6 from '../assets/CTLP6.jpg'
import CTLP7 from '../assets/CTLP7.jpg'
import CTLP8 from '../assets/CTCT8.jpg'
import Footer from '../components/Footer'

const GaleriaAsaLeste = () => {
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
    <div className="page-galeria-asaLeste">
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
                <span className="subtitle">Galeria: Asa Leste</span>
            </div>
        </header>

        <div className="container-photos-asaLeste">


          <div className="box-return">
                <div className="title-return">
                  <span>Escolher outra galeria:</span>
                </div>
                <div className="icon-return">
                  <img onClick={handleOnClickReturn} src={returnIcon} alt="icone de retornar" />
                </div>
              </div>
            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTLP1}></img></a>
            </div>
            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTLP2}></img></a>
            </div>



            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTLP3}></img></a>
            </div>
            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTLP4}></img></a>
            </div>
            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTLP5}></img></a>
            </div>


            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTLP6}></img></a>
            </div>
            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTLP7}></img></a>
            </div>
            <div className="box">
              <a href="https://www.facebook.com/semeandocampeoes/photos_by" target="_blank" ><img src={CTLP8}></img></a>
            </div>
          
        </div>
        <Footer />
    </div>
  )
}

export default GaleriaAsaLeste