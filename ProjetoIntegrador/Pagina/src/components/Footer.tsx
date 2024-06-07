import PrefeituraLogo3 from '../assets/Logo-CM-Prefeitura3.png'
import FecamLogo from '../assets/Logo-FECAM2.png'
import './Footer.css'
import Boloisa from '../assets/PBoloisa.jpeg'
import Cairo from '../assets/PCairo.jpeg'
import Fabri from '../assets/PFabri.jpeg'
import Glamour from '../assets/PGlamour.jpeg'
import JC from '../assets/PJc.jpeg'
import PIB from '../assets/PPib.jpeg'
import Plenitude from '../assets/PPlenitude.jpeg'
import Pousada from '../assets/PPousada.jpeg'
import Vanessa from '../assets/PVanessa.jpeg'

const Footer = () => {
  return (
    <footer>
        
        <div className='content-footer'>
            
            <div className="sa-box">
              <div className="prefeitura-all">
                <a href="https://campomourao.atende.net/subportal/fundacao-de-esportes" target="_blank" ><img className='prefeitura-img' src={PrefeituraLogo3} alt='logo Prefeitura de Campo Mourão'></img></a>
                  <div className='texto'>
                  <a><h6>Município de</h6></a>
                  <a> <h5>CAMPO MOURÃO</h5></a>
                </div>
              </div>

                  <a href="https://www.instagram.com/fecam_esportes?igsh=a2F2d3gxZHNpanB2" target="_blank" ><img className='fecam-img' src={FecamLogo} alt='logo FECAM'></img></a>
            </div>
            
            <div className='sc-box'>
              {/* <div className="icon">
                  <img src={LogoSemeandoCampeoes} alt='logo Semeando Campeões'></img>
              </div> */}
              <div className="text">
                <div>
                    <span>SEMEANDO CAMPEÕES</span>
                </div>
                <div className='copy'>
                  Todos os direitos reservados © 2024 Lucas Grander & Ricardo M. Batista.
                </div>
              </div>
            </div>

            <div className="sb-box">
              <a href="https://www.instagram.com/fecam_esportes?igsh=a2F2d3gxZHNpanB2" target="_blank" ><img className='fecam-img' src={FecamLogo} alt='logo FECAM'></img></a>
            </div>

        </div>
        <div className='box-patrocinios'>
          <span>PATROCÍNIOS</span>
          <div className='logo-patrocinios'>
            <a href="https://www.instagram.com/boloisacm?igsh=MTB3azU1amV4MnJzdA==" target="_blank" ><img className='boloisa' src={Boloisa} alt='logo Boloisa Bolos'></img></a>
            <a href="https://www.instagram.com/macedocairoleandro?igsh=d2EyZDdjbnZydnoy" target="_blank" ><img className='cairo' src={Cairo} alt='logo Mecanica Cairo'></img></a>
            <a href="https://www.instagram.com/fabri_imobiliaria?igsh=MW9pZ3h4N29vN2l6aQ==" target="_blank" ><img className='fabri' src={Fabri} alt='logo Fabri contabilidade'></img></a>
            <a href="https://www.instagram.com/mayarazaramella?igsh=MXE1YzBjb283bGJpdA==" target="_blank" ><img className='glamour' src={Glamour} alt='logo Salão Glamour'></img></a>
            <a href="https://www.instagram.com/jc.seg.eletronica?igsh=Z3puOXQzNG14ejU2" target="_blank" ><img className='jc' src={JC} alt='logo JC alarmes'></img></a>
            <a href="https://www.instagram.com/pibcm_oficial?igsh=NTNwYTdlMnNvOTF1" target="_blank" ><img className='pib' src={PIB} alt='logo Igreja Batista'></img></a>
            <a href="https://www.instagram.com/plenitudesaudeebemestar?igsh=a3N4cG9jNm45OWk5" target="_blank" ><img className='plenitude' src={Plenitude} alt='logo Plenitude Colchoes'></img></a>
            <a href="https://www.instagram.com/pousadagabirobas?igsh=ajRnZDNlM3Z0Zzd6" target="_blank" ><img className='pousada' src={Pousada} alt='logo Pousada Parque das Gabirobas'></img></a>
            <a href="https://www.instagram.com/tupperware_vanessacm?igsh=YW9yNnpka3Bwd2Ex" target="_blank" ><img className='vanessa' src={Vanessa} alt='logo Vanessa Tapware'></img></a>
          </div>
        </div>
    </footer>
  )
}

export default Footer