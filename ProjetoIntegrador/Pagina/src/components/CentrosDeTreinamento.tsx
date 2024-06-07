import './CentrosDeTreinamento.css'
import PSCC from '../assets/PSCC.jpeg'
import PSCLP from '../assets/PSCLP.jpeg'
import CTIretama from '../assets/CTIretama11.jpg'
import CTAL from '../assets/CTAL.jpg'
import skipIcon from '../assets/returnIcon.svg'
import blackball from '../assets/blackBall.svg'
import { useState } from 'react'

interface Props{
    id?: string;
}

const CentrosDeTreinamento = ({id}: Props) => {

    const [ctActive, setCtActive] = useState(1)

    const handleSkipToRight = () => {
        if(ctActive == 4){
            setCtActive(1)
        }
        else{
            setCtActive(ctActive + 1)
        }
    }

    const handleSkipToLeft = () => {
        if(ctActive == 1){
            setCtActive(4)
        }
        else{
            setCtActive(ctActive - 1)
        }
    }

    return(
        <>
        <div id={id} className="content-ct">
            <div className="boxes">
                <div className="imag-ct">
                    <img src={PSCC} alt='imagem do ct'></img>
                </div>
                <div className="adress">
                    <h2>CT Centro</h2>
                    <h3>Primeira Igreja Batista</h3>
                    <span>Rua São Josafat, 1778</span>
                    <span>Centro, Campo Mourão - PR,</span>
                    <span>87302-170</span>
                    
                    <span><strong>Treinos:</strong></span>
                    <span>Terças e quintas: 19h</span>
                    <span>Sábados: 16h</span>
                </div>
            </div>

            <div className="boxes">
                <div className="imag-ct">
                    <img src={PSCLP} alt='imagem do ct'></img>
                </div>
                <div className="adress">
                    <h2>CT Lar Paraná</h2>
                    <h3>Associação de Moradores do Lar Paraná</h3>
                    <span>Rua Duque de Caxias,</span>
                    <span>Jardim Lar Paraná, Campo Mourão - PR,</span>
                    <span>87305-120</span>
                    
                    <span><strong>Treinos:</strong></span>
                    <span>Segundas, quartas e sextas: 18h20</span>
                </div>
            </div>

            <div className="boxes">
                <div className="imag-ct">
                    <img src={CTIretama} alt='imagem do ct'></img>
                </div>
                <div className="adress">
                    <h2>CT Iretama</h2>
                    <h3>Ginasio Poliesportivo Wassilo Mamus</h3>
                    <span>Rua Otaviano Felix, 0000</span>
                    <span>Centro, Iretama - PR,</span>
                    <span>87280-000</span>
                    
                    <span><strong>Treinos:</strong></span>
                    <span>Terças e quintas: 19h</span>
                </div>
            </div>

            <div className="boxes">
                <div className="imag-ct">
                    <img src={CTAL} alt='imagem do ct'></img>
                </div>
                <div className="adress">
                    <h2>CT Asa Leste</h2>
                    <h3>Escola Ivone S Castanharo</h3>
                    <span>Rua Sanhaco, 720</span>
                    <span>Jd Tropical I, Campo Mourão - PR, </span>
                    <span>87.310-190</span>
                    <span><strong>Treinos:</strong></span>
                    <span>Terças e quintas: 19h</span>
                </div>
            </div>
        </div>

        <div id={id} className="content-ct-query">
            <div className="balls-box">
                <img className={ctActive == 1 ? "ball-active" : "ball-inative"} src={blackball} alt="" />
                <img className={ctActive == 2 ? "ball-active" : "ball-inative"} src={blackball} alt="" />
                <img className={ctActive == 3 ? "ball-active" : "ball-inative"} src={blackball} alt="" />
                <img className={ctActive == 4 ? "ball-active" : "ball-inative"} src={blackball} alt="" />
            </div>
            <img onClick={handleSkipToLeft} className='left-skip' src={skipIcon} alt="anterior" />
            <img onClick={handleSkipToRight} className='right-skip' src={skipIcon} alt="próxima " />

            <div id={ctActive == 1 ? "box-ct-active" : "box-ct-inative"} className="boxes">
                <div className="imag-ct">
                    <img src={PSCC} alt='imagem do ct'></img>
                </div>
                <div className="adress">
                    <h2>CT Centro</h2>
                    <h3>Primeira Igreja Batista</h3>
                    <span>Rua São Josafat, 1778, Centro,</span>
                    <span> Campo Mourão - PR, 87302-170</span>

                    
                    <span><strong>Treinos:</strong></span>
                    <span>Terças e quintas: 19h // Sábados: 16h</span>

                </div>
            </div>

            <div id={ctActive == 2 ? "box-ct-active" : "box-ct-inative"} className="boxes">
                <div className="imag-ct">
                    <img src={PSCLP} alt='imagem do ct'></img>
                </div>
                <div className="adress">
                    <h2>CT Lar Paraná</h2>
                    <h3>Associação de Moradores</h3>
                    <span>Rua Duque de Caxias, Lar Paraná,</span>
                    <span> Campo Mourão, 87305-120</span>
                    <span><strong>Treinos:</strong></span>
                    <span>Segundas, quartas e sextas: 18h20</span>
                </div>
            </div>

            <div id={ctActive == 3 ? "box-ct-active" : "box-ct-inative"} className="boxes">
                <div className="imag-ct">
                    <img src={CTIretama} alt='imagem do ct'></img>
                </div>
                <div className="adress">
                    <h2>CT Iretama</h2>
                    <h3>Ginasio Poliesportivo Wassilo Mamus</h3>
                    <span>Rua Otaviano Felix, 0000</span>
                    <span>Centro, Iretama - PR, 87280-000</span>
                    
                    <span><strong>Treinos:</strong></span>
                    <span>Terças e quintas: 19h</span>
                </div>
            </div>

            <div id={ctActive == 4 ? "box-ct-active" : "box-ct-inative"} className="boxes">
                <div className="imag-ct">
                    <img src={CTAL} alt='imagem do ct'></img>
                </div>
                <div className="adress">
                    <h2>CT Asa Leste</h2>
                    <h3>Escola Ivone S Castanharo</h3>
                    <span>Rua Sanhaco, 720, Jd Tropical I,</span>
                    <span>Campo Mourão - PR, 87310-190</span>
                    <span><strong>Treinos:</strong></span>
                    <span>Terças e quintas: 19h</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default CentrosDeTreinamento