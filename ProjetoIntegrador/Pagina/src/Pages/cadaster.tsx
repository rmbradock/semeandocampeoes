import {  useState } from 'react'
import './cadaster.css'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import MyInput from '../components/MyInput'
import Mancha from '../assets/mancha-background-cadaster.png'
import decoCadaster from '../assets/designForLogin.svg'
import tel from '../assets/telephone.svg'
import responsavel from '../assets/responsavel.svg'
import username from '../assets/userNOME.svg'
import MyButton from '../components/MyButton'
import MyPhoneButton from '../components/MyPhoneButton'
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import cityICON from '../assets/city.svg'
import streetICON from '../assets/street.svg'
import neighICON from '../assets/neigh.svg'
import numResidICON from '../assets/numResid.svg'
import LogoInstagram from "../assets/instagram.svg"
import LogoFacebook from "../assets/facebook.svg"
import LogoWhatszap from '../assets/whatsapp.svg'
import closePage from "../assets/closePage.svg"
import infoIcon from "../assets/informationIcon.svg"
import axios from 'axios'


const Cadaster = () => {

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

    const handleOnClickLogin = () => {
        setOverlay(true)
    
        setTimeout(() => {
            window.location.href = '/login'
        }, 1500)

        setTimeout(() => {
            setOverlay(false)
        }, 2000)
    }
    
    // *************************** Validação de label --- INFOS PESSOAIS ********************************
    //nome
    const [focusNome, setFocusNome] = useState(false)
    const [valueNome, setValueNome] = useState("")

    const handleFocusedNome = () => {
        setFocusNome(true)
    }
    const handleNotFocusedNome = () => {
        if(valueNome.trim() == ""){
            setFocusNome(false)
        }
        else{
            setFocusNome(true)
        }
    }

    // data de nascimento
    const [valueDate, setValueDate] = useState("")

    // telefone
    const [valueTelefone, setValueTelefone] = useState("")

    //nome do responsável
    const [focusNomeResp, setFocusNomeResp] = useState(false)
    const [valueNomeResp, setValueNomeResp] = useState("")

    const handleFocusedNomeResp = () => {
        setFocusNomeResp(true)
    }
    const handleNotFocusedNomeResp = () => {
        if(valueNomeResp.trim() == ""){
            setFocusNomeResp(false)
        }
        else{
            setFocusNomeResp(true)
        }
    }


    // *************************** Validação de label --- ENDEREÇO ********************************

    //cidade
    const [focusCity, setFocusCity] = useState(false)
    const [valueCity, setValueCity] = useState("")

    const handleFocusedCity = () => {
        setFocusCity(true)
    }
    const handleNotFocusedCity = () => {
        if(valueCity.trim() == ""){
            setFocusCity(false)
        }
        else{
            setFocusCity(true)
        }
    }
    //bairro
    const [focusBairro, setFocusBairro] = useState(false)
    const [valueBairro, setValueBairro] = useState("")

    const handleFocusedBairro = () => {
        setFocusBairro(true)
    }
    const handleNotFocusedBairro = () => {
        if(valueBairro.trim() == ""){
            setFocusBairro(false)
        }
        else{
            setFocusBairro(true)
        }
    }
    //rua
    const [focusRua, setFocusRua] = useState(false)
    const [valueRua, setValueRua] = useState("")

    const handleFocusedRua = () => {
        setFocusRua(true)
    }
    const handleNotFocusedRua = () => {
        if(valueRua.trim() == ""){
            setFocusRua(false)
        }
        else{
            setFocusRua(true)
        }
    }

    //numero da residência
    const [focusNumRes, setFocusNumRes] = useState(false)
    const [valueNumRes, setValueNumRes] = useState("")

    const handleFocusedNumRes = () => {
        setFocusNumRes(true)
    }
    const handleNotFocusedNumRes = () => {
        if(valueNumRes.trim() == ""){
            setFocusNumRes(false)
        }
        else{
            setFocusNumRes(true)
        }
    }

    //select box do centro de treinamento e faixa
    const [focusSelectBoxCT, setFocusSelectBoxCT] = useState(false)
    const [valueSelectBoxCT, setvalueSelectBoxCT] = useState("")
    const [focusSelectBoxFaixa, setFocusSelectBoxFaixa] = useState(false)
    const [valueSelectBoxFaixa, setvalueSelectBoxFaixa] = useState("")

    const handleNotFocusedSelectBoxCT = () => {
        if(valueSelectBoxCT.trim() == ""){
            setFocusSelectBoxCT(false)
        }
        else{
            setFocusSelectBoxCT(true)
        }
    }
    const handleFocusedSelectBoxCT = () => {
        setFocusSelectBoxCT(true)
    }

    const handleNotFocusedSelectBoxFaixa = () => {
        if(valueSelectBoxFaixa.trim() == ""){
            setFocusSelectBoxFaixa(false)
        }
        else{
            setFocusSelectBoxFaixa(true)
        }
    }
    const handleFocusedSelectBoxFaixa = () => {
        setFocusSelectBoxFaixa(true)
    }

    // ********************** verificação se todos os inputs estão com algum value **************************

    const [eventButton, setEventButton] = useState(false)

    const handleCheckEventButton = () => {
        if(valueNome.trim() != "" && valueDate.trim() != "" && valueCity.trim() != "" && valueBairro.trim() != "" && valueRua.trim() != "" && valueNumRes.trim() != "" && valueSelectBoxCT != "" && valueSelectBoxFaixa != ""){
            setEventButton(true)
            setMsgInputs(false)
        }
        else{
            setEventButton(false)
            setMsgInputs(true)
        }
    }

    // ********* verificação para a mensagem box (PREENCHA OS CAMPOS) do botão de enviar aparecer e desaparecer ************

    const [msgInputs, setMsgInputs] = useState(false)

    // ******* verificação se todos os inputs estão com valores, caso sim, mostrar pop-up de cadastro concluído *************** 

    const [popUp, setPopUp] = useState(false)
    const [popUpBox, setPopUpBox] = useState(false)
    const [visibleInfos, setVisibleInfos] = useState(false)

    const handleQueryVisibleInfos = () => {
        if(!visibleInfos){
            setVisibleInfos(true)
        }
        else{
            setVisibleInfos(false)
        }
    }

    const handleOnClickSendCadaster = () => {
        handleSendInfosToDatabase()
        setTimeout(()=> {
            setPopUp(true)
            setPopUpBox(true)
        }, 300)
    }

    const handleOnClickClosePop = () => {
        setPopUpBox(false)
        
        setTimeout(() => {
            setPopUp(false)
            setValueNome("")
            setFocusNome(false)
            setValueDate("")
            setValueNomeResp("")
            setFocusNomeResp(false)
            setValueCity("")
            setFocusCity(false)
            setValueBairro("")
            setFocusBairro(false)
            setValueRua("")
            setFocusRua(false)
            setValueNumRes("")
            setFocusNumRes(false)
            setvalueSelectBoxCT("")
            setFocusSelectBoxCT(false)
            setvalueSelectBoxFaixa("")
            setFocusSelectBoxFaixa(false)
            setValueTelefone("")

        }, 1100);
    }

    const handleSendInfosToDatabase = async () => {
        await axios.post("http://localhost:8080/users/queue", {nome: valueNome, data_de_nascimento: valueDate, telefone: valueTelefone, responsavel: valueNomeResp, id_centro_de_treinamento: valueSelectBoxCT, id_faixa: valueSelectBoxFaixa, rua: valueRua, numero: valueNumRes, bairro: valueBairro, nome_cidade: valueCity})
    }
    
    return(
        <div onMouseMove={handleCheckEventButton} className="page-cadaster">
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
                </div>
            </header>
            <div className="container-banner-form">
                <img className='deco-cadaster-top' src={decoCadaster}></img>
                <img className='deco-cadaster-top2' src={decoCadaster}></img>
                <img className='deco-cadaster-bottom' src={decoCadaster}></img>
                <img className='deco-cadaster-bottom2' src={decoCadaster}></img>
                <div className="container-banner">
                    <div className="content-banner">
                        <img src={Mancha} alt='mancha de fundo'></img>
                        <span className='text-geral' >FAÇA PARTE!!</span>
                        <div className="box-name">
                            <span>Semeando</span>   
                            <span>Campeões</span>
                        </div>
                    </div>
                </div>
                <div className="container-cadaster">
                    <div className="content-cadaster">
                        <div className="forms-cadaster">
                            <div className="title-cadaster">
                                <span>Cadastro</span>
                                <span>(fila de espera)</span>
                            </div>
                            <span className='title-info-pessoal'>Informações pessoais</span>
                            <div className="button-label-container">
                                <label className={focusNome ? "labelFocusedNome" : "labelNotFocusedNome"} htmlFor='nome'>Nome completo</label>
                                <MyInput
                                    id="nome"
                                    value={valueNome}
                                    onChange={(e) => setValueNome(e.target.value)}
                                    onFocus={handleFocusedNome}
                                    onBlur={handleNotFocusedNome}
                                    className={focusNome ? "focusedNome" : "notFocusedNome"}
                                    type='text'
                                    width= "90%"
                                    height= "100%"
                                    padding="0vh 8vh 0vh 2.5vh"
                                    fontSize= "2.4vh"
                                    border= "solid .3vh black"
                                    borderBottom="solid .3vh black"
                                    borderRadius='.6vh'
                                    backgroundColor="transparent"
                                    transition= ".4s"
                                    enter= "transparent"
                                    leave= "transparent"
                                />
                                <img src={username}></img>
                            </div>

                            <div className="button-label-container">
                                <label className="labelFocusedDate" htmlFor='date'>Data de nascimento</label>
                                <MyInput
                                    onChange={(e) => setValueDate(e.target.value)}
                                    id='date'
                                    value={valueDate}
                                    type='date'
                                    width= "90%"
                                    height= "100%"
                                    padding="2.5vh"
                                    fontSize= "2.4vh"
                                    border= "solid .3vh black"
                                    borderBottom="solid .3vh black"
                                    borderRadius='.6vh'
                                    background-color= "transparent"
                                    transition= ".4s"
                                    enter= "transparent"
                                    leave= "transparent"
                                    />
                            </div>

                            <div className="button-label-container">
                            <label className={"labelFocusedTelefone"} htmlFor='telefone'>Número de telefone</label>
                                <MyPhoneButton
                                    value={valueTelefone}
                                    onChange={(value) => setValueTelefone(value)}
                                />
                                    <img src={tel}></img>
                            </div>

                            <div className="button-label-container">
                                <label className={focusNomeResp ? "labelFocusedNomeResp" : "labelNotFocusedNomeResp"} htmlFor='nomeResp'>Nome do responsável (não obrigatório)</label>
                                <MyInput
                                    id="nomeResp"
                                    value={valueNomeResp}
                                    onChange={(e) => setValueNomeResp(e.target.value)}
                                    onFocus={handleFocusedNomeResp}
                                    onBlur={handleNotFocusedNomeResp}
                                    className={focusNomeResp ? "focused" : "notFocused"}
                                    type='text'
                                    width= "90%"
                                    height= "100%"
                                    padding="0vh 8vh 0vh 2.5vh"
                                    fontSize= "2.4vh"
                                    border= "solid .3vh black"
                                    borderBottom="solid .3vh black"
                                    borderRadius='.6vh'
                                    background-color= "transparent"
                                    transition= ".4s"
                                    enter= "transparent"
                                    leave= "transparent"
                                />
                                <img src={responsavel}></img>
                            </div>

                            <span className='title-info-endereco'>Informações de endereço</span>
                            <div className="button-label-container">
                                <label className={focusCity ? "labelFocusedCity" : "labelNotFocusedCity"} htmlFor='city'>Cidade</label>
                                <MyInput
                                    id="city"
                                    value={valueCity}
                                    onChange={(e) => setValueCity(e.target.value)}
                                    onFocus={handleFocusedCity}
                                    onBlur={handleNotFocusedCity}
                                    className={focusCity ? "focusedCity" : "notFocusedCity"}
                                    type='text'
                                    width= "90%"
                                    height= "100%"
                                    padding="0vh 8vh 0vh 2.5vh"
                                    fontSize= "2.4vh"
                                    border= "solid .3vh black"
                                    borderBottom="solid .3vh black"
                                    borderRadius='.6vh'
                                    backgroundColor="transparent"
                                    transition= ".4s"
                                    enter= "transparent"
                                    leave= "transparent"
                                />
                                <img src={cityICON}></img>
                            </div>

                            <div className="button-label-container">
                                <label className={focusBairro ? "labelFocusedBairro" : "labelNotFocusedBairro"} htmlFor='bairro'>Bairro</label>
                                <MyInput
                                    id="bairro"
                                    value={valueBairro}
                                    onChange={(e) => setValueBairro(e.target.value)}
                                    onFocus={handleFocusedBairro}
                                    onBlur={handleNotFocusedBairro}
                                    className={focusBairro ? "Bairro" : "notFocusedBairro"}
                                    type='text'
                                    width= "90%"
                                    height= "100%"
                                    padding="0vh 8vh 0vh 2.5vh"
                                    fontSize= "2.4vh"
                                    border= "solid .3vh black"
                                    borderBottom="solid .3vh black"
                                    borderRadius='.6vh'
                                    backgroundColor="transparent"
                                    transition= ".4s"
                                    enter= "transparent"
                                    leave= "transparent"
                                />
                                <img src={neighICON}></img>
                            </div>

                            <div className="container-comp-num">
                                <div className="button-label-container-comp">
                                    <div className="complemento"></div>
                                    <label className={focusRua ? "labelFocusedRua" : "labelNotFocusedRua"} htmlFor='rua'>Rua</label>
                                    <MyInput
                                        id="rua"
                                        value={valueRua}
                                        onChange={(e) => setValueRua(e.target.value)}
                                        onFocus={handleFocusedRua}
                                        onBlur={handleNotFocusedRua}
                                        className={focusRua ? "focusedRua" : "notFocusedRua"}
                                        type='text'
                                        width= "90%"
                                        height= "100%"
                                        padding="0vh 8vh 0vh 2.5vh"
                                        fontSize= "2.4vh"
                                        border= "solid .3vh black"
                                        borderBottom="solid .3vh black"
                                        borderRadius='.6vh'
                                        backgroundColor="transparent"
                                        transition= ".4s"
                                        enter= "transparent"
                                        leave= "transparent"
                                    />
                                    <img src={streetICON}></img>
                                </div>

                                <div className="button-label-container-num">
                                    <div className="complemento"></div>
                                    <label className={focusNumRes ? "labelFocusedNumRes" : "labelNotFocusedNumRes"} htmlFor='numRes'>N°</label>
                                    <MyInput
                                        id="numRes"
                                        value={valueNumRes}
                                        onChange={(e) => setValueNumRes(e.target.value)}
                                        onFocus={handleFocusedNumRes}
                                        onBlur={handleNotFocusedNumRes}
                                        className={focusNumRes ? "focusedNumRes" : "notFocusedNumRes"}
                                        type='text'
                                        width= "90%"
                                        height= "100%"
                                        padding="0vh 5vh 0vh 2.5vh"
                                        fontSize= "2.4vh"
                                        border= "solid .3vh black"
                                        borderBottom="solid .3vh black"
                                        borderRadius='.6vh'
                                        backgroundColor="transparent"
                                        transition= ".4s"
                                        enter= "transparent"
                                        leave= "transparent"
                                    />
                                    <img src={numResidICON}></img>
                                </div>
                            </div>
                            
                            <span className='title-info-ct'>Escolha um local de treino:</span>

                            <div className="button-label-container">
                                <label className={focusSelectBoxCT ? "labelFocusedNome" : "labelNotFocusedNome"} htmlFor='ct'>Centro de treinamento</label>
                                <select value={valueSelectBoxCT} onChange={(e) => setvalueSelectBoxCT(e.target.value)} onFocus={handleFocusedSelectBoxCT} onBlur={handleNotFocusedSelectBoxCT} className='ct-box-pick' name="ct" id="ct">
                                    <option value="0" hidden></option>
                                    <option value="5" disabled>*Selecione um centro de treinamento:</option>
                                    <option value="1">Centro de treinamento  -  Centro </option>
                                    <option value="2">Centro de treinamento  -  Lar Paraná</option>
                                    <option value="3">Centro de treinamento  -  Iretama </option>
                                    <option value="4">Centro de treinamento  -  Asa Leste </option>
                                </select>
                            </div>
                            
                            <div className="button-label-container">
                                <label className={focusSelectBoxFaixa ? "labelFocusedNome" : "labelNotFocusedNome"} htmlFor='faixa'>Cor da faixa</label>
                                <select value={valueSelectBoxFaixa} onChange={(e) => setvalueSelectBoxFaixa(e.target.value)} onFocus={handleFocusedSelectBoxFaixa} onBlur={handleNotFocusedSelectBoxFaixa}className='ct-box-pick' name="faixa" id="faixa">
                                    <option value="0" hidden></option>
                                    <option value="99" disabled>*Selecione a faixa do participante</option>
                                    <option value="1">Branca</option>
                                    <option value="2">Cinza/Branca</option>
                                    <option value="3">Cinza</option>
                                    <option value="4">Cinza/Preta</option>
                                    <option value="5">Amarela/Branca</option>
                                    <option value="6">Amarela</option>
                                    <option value="7">Amarela/Preta</option>
                                    <option value="8">Laranja/Branca</option>
                                    <option value="9">Laranja</option>
                                    <option value="10">Laranja/Preta</option>
                                    <option value="11">Verde/Branca</option>
                                    <option value="12">Verde</option>
                                    <option value="13">Verde/Preta</option>
                                    <option value="14">Azul</option>
                                    <option value="15">Roxa</option>
                                    <option value="16">Marrom</option>
                                    <option value="17">Preta</option>
                                </select>
                            </div>

                            <div className="button-label-container">
                                <MyButton
                                    onClick={eventButton ? handleOnClickSendCadaster : handleCheckEventButton}
                                    width= "45%"
                                    height= "8vh"
                                    padding="1vh"
                                    cursor={eventButton ? "pointer" : ""}
                                    fontSize= "2.5vh"
                                    fontWeight= "bold"
                                    backgroundColor={eventButton ? "rgba(0, 255, 0, 0.4)": "rgba(255, 0, 0, 0.4)"}
                                    border= ".3vh black solid"
                                    borderBottom= ".3vh black solid"
                                    borderRadius=".6vh"
                                    transition= ".3s"
                                    children="Enviar"
                                    enter={eventButton ? "rgba(0, 255, 0, 0.4)": "rgba(255, 0, 0, 0.4)"}
                                    leave={eventButton ? "rgba(0, 255, 0, 0.3)": "rgba(255, 0, 0, 0.4)"}
                                />
                                <div className={msgInputs ? "msg-button-enviar-appear" : "msg-button-enviar" }>
                                    <span>Preencha os campos acima.</span>
                                </div>
                            </div>

                            <div className="redirect-login">
                                <span className='question'>Já é aluno?<a onClick={handleOnClickLogin} >Entrar.</a></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div style={{display: popUp ? "flex" : "none"}} className="pop-up-container">
                <div className={popUpBox ? "pop-up-box" : "pop-up-box-close"}>
                    <img onClick={handleOnClickClosePop} className='closePage' src={closePage}></img>
                    <img onClick={handleQueryVisibleInfos} className='turnVisibleInfo' src={infoIcon}></img>
                    <div className="pop-up-content">

                        <div style={{transform: visibleInfos ? "rotateY(90deg)" : "rotateY(0deg)", transition: "0.3s"}} className="left">
                            <div className="pop-up-title">
                                <span>Cadastro Concluído</span>
                            </div>
                            <h2>O seu cadastro foi concluído com sucesso!</h2>

                            <span className='pop-up-redes-sociais'>Entre em contato</span>

                            <div className="pop-up-icons-redes">
                                <a target="_blank" href='https://www.instagram.com/semeando.campeoes/'><img src={LogoInstagram}></img></a>
                                <a target="_blank" href='https://api.whatsapp.com/send?phone=5544998130695'><img src={LogoWhatszap}></img></a>
                                <a target="_blank" href='https://www.facebook.com/semeandocampeoes/'><img src={LogoFacebook}></img></a>
                            </div>
                        </div>

                        <div style={{transform: visibleInfos ? "rotateY(0deg)" : "rotateY(90deg)", transition: "0.3s"}} className="right">
                            <span className='title-right-pop-up'>Dados inseridos</span>
                            <ul>
                                <br />
                                <span>Informações Pessoais</span>
                                <li><strong>Nome Completo: </strong>{valueNome}</li>
                                <li><strong>Data de nascimento(AAAA-MM-DD): </strong>{valueDate}</li>
                                <li><strong>Número de telefone: </strong>{}</li>
                                <li><strong>Nome do responsável: </strong>{valueNomeResp}</li>
                                <br />
                                <span>Informações de endereço</span>
                                <li><strong>Cidade: </strong>{valueCity}</li>
                                <li><strong>Bairro: </strong> {valueBairro}</li>
                                <li><strong>Rua: </strong> {valueRua}</li>
                                <li><strong>Número da residência: </strong> {valueNumRes}</li>
                                <br />
                                <span>Local de treino escolhido</span>

                                <li>
                                    <strong>Centro de treinamento: </strong>
                                    {valueSelectBoxCT == '1' && "Centro de treinamento - Centro"}
                                    {valueSelectBoxCT == '2' && "Centro de treinamento - Lar Parana"}
                                    {valueSelectBoxCT == '3' && "Centro de treinamento - Iretama"}
                                    {valueSelectBoxCT == '4' && "Centro de treinamento - Asa Leste"}
                                </li>

                                <li>
                                    <strong>Faixa: </strong>
                                    {valueSelectBoxFaixa == '1' && "Branca"}
                                    {valueSelectBoxFaixa == '2' && "Cinza/Branca"}
                                    {valueSelectBoxFaixa == '3' && "Cinza"}
                                    {valueSelectBoxFaixa == '4' && "Cinza/Preta"}
                                    {valueSelectBoxFaixa == '5' && "Amarela/Branca"}
                                    {valueSelectBoxFaixa == '6' && "Amarela"}
                                    {valueSelectBoxFaixa == '7' && "Amarela/Preta"}
                                    {valueSelectBoxFaixa == '8' && "Laranja/Branca"}
                                    {valueSelectBoxFaixa == '9' && "Laranja"}
                                    {valueSelectBoxFaixa == '10' && "Laranja/Preta"}
                                    {valueSelectBoxFaixa == '11' && "Verde/Branca"}
                                    {valueSelectBoxFaixa == '12' && "Verde"}
                                    {valueSelectBoxFaixa == '13' && "Verde/Preta"}
                                    {valueSelectBoxFaixa == '14' && "Azul"}
                                    {valueSelectBoxFaixa == '15' && "Roxa"}
                                    {valueSelectBoxFaixa == '16' && "Marrom"}
                                    {valueSelectBoxFaixa == '17' && "Preta"}
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadaster