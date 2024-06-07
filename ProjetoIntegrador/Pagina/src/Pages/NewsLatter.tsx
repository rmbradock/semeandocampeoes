import './NewsLatter.css'
import Footer from '../components/Footer';
import { useState } from 'react';
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'


interface Props{
    id?: string;
}
const NewsLatter = ({id}: Props) => {

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

  return (
    <div id={id} className="page-news">
      <div style={{display: overlay? 'flex' : 'none' }} className="overlay">
        <img className='loading-top' src={overlayLoadingCircle}></img>
        <img className='loading-logo' src={LogoSemeandoCampeoes}></img>
      </div>
      <header>
          <div className="logo">
              <img onClick={handleOnClickHome} src={LogoSemeandoCampeoes} alt="Logo Semeando Campeões"></img>
          </div>
          <div className="title">
                <h2>Informativo</h2>
                <span className="subtitle">Brazillian Jiu-Jitsu</span>
            </div>
        </header>
      
        <div className="content-news">
            <div className="container-news">
                <div className="container-title-news">
                    <span >Últimas Notícas</span>
                </div>


                <div className="box-news">
                    <span className='title-news' >Novo CT do PSC "Asa Leste"</span>

                    <span className='text-news' ><span className='parag-visible0' >..........</span>No dia 28 de maio, a instrutora faixa marrom, Ednéia de Souza, iniciou as aulas nas dependências da Escola Estadual Ivone Castanharo, das 19h às 20h. Os treinos serão ministrados todas as terças e quintas, das 19h às 20h, para 20 adolescentes selecionados entre os alunos da escola.</span>

                    <span className='midia-news' >Imagens: <a target='_blank'  href="https://youtu.be/ydjqrB2vcwg?si=upTl7bcXO9DrBS6D">1º Treino CT Asa Leste</a></span>

                    <span className='data-news' >03/06/2024</span>
                </div>


                <div className="box-news">
                    <span className='title-news' >Copa Noroeste de Judô</span>

                    <span className='text-news' ><span className='parag-visible0' >..........</span>Campo Mourão recebeu, no fim de semana dos dias 25 e 26 de maio, a maior competição de judô da história do Paraná, o Campeonato Paranaense de Judô. O evento foi realizado pela Associação Mourãoense de Judô (AMJ), em parceria com a Prefeitura de Campo Mourão, por meio da Fundação de Esportes (FECAM) e da Federação Paranaense de Judô (FPRJ), além dos apoiadores do evento e do judô mourãoense de 2024. As categorias sub-13, sub-15, sub-21 e veterano competiram no sábado (25), das 8h às 18h, enquanto o Torneio Regional de Judô – 04 anos acima foi realizado no domingo (26), das 8h às 14h, ambos no Ginásio de Esportes Belin Carolo, anexo à Universidade Tecnológica Federal do Paraná (UTFPR) – Campus de Campo Mourão.</span>

                    <span className='midia-news'>Álbum de Fotografias(Google Fotos): <a target='_blank'  href="https://photos.app.goo.gl/GqvAzULfFH5pLWtH7">*Torneio Regional Noroeste*</a> - Campo Mourão - André Fedalto & Vitor Albres.</span>

                    <span>Mais informações: <a target='_blank'  href="https://resenhacm.com.br/campo-mourao-recebe-campeonato-paranaense-de-judo-neste-final-de-semana-no-ginasio-da-utfpr/"> Resenha CM</a></span>

                    <span className='data-news' >27/05/2024</span>
                </div>


                <div className="box-news">
                    <span className='title-news' >Treinão solidário 2024"</span>

                    <span className='text-news' ><span className='parag-visible0' >..........</span>Em 24/05/2024 as equipes PSC, Gracie Barra, Moraes BJJ (Norte) e Guedes BJJ (Clube feijão) se reuniram no Uchoa Dojô para realizar um treino solidário para arrecadação de ítens de higiene 
                pessoal para as vítimas da enxente no Rio Grande do Sul. Neste dia foram ministradas técnicas diversas pelos professores Daniel Ramos e João Guedes.</span>

                    <span className='midia-news'>Vídeo: <a target='_blank'  href="https://youtu.be/ydjqrB2vcwg?si=upTl7bcXO9DrBS6D">Treinão Solidário 2024</a></span>

                    <span className='data-news' >27/05/2024</span>
                </div>
            </div>

        </div>
        <Footer />
          
    </div>
  )
}
export default NewsLatter