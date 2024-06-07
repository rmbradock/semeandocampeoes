import './informationSee.css'
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import axios from 'axios'
import { Participante } from '../interfaces/interfaces'
import filterICON from '../assets/filterICON.svg'
import closeX from '../assets/closePage.svg'
import lockICON from '../assets/lockIcon.svg'
import dropdownCloseOpenICON from '../assets/openCloseDropdown.svg'
import searchUser from '../assets/searchUserIcon.svg'
import { useEffect, useState } from 'react'
import MyInput from '../components/MyInput'

const informationSee = () => {

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

    const [dropdown, setDropdown] = useState(false)

    const handleOnClickBtnFiltro = () => {
        if(dropdown == false){
            setDropdown(true)
        }
        else{
            setDropdown(false)
        }
    }

    const [variosFiltros, setVariosFiltros] = useState<string[]>([])

    // verficar o tipo de seleção das faixas
    const [estadoBranca, setEstadoBranca] = useState(false)
    const [estadoCinza, setEstadoCinza] = useState(false)
    const [estadoAmarela, setEstadoAmarela] = useState(false)
    const [estadoLaranja, setEstadoLaranja] = useState(false)
    const [estadoVerde, setEstadoVerde] = useState(false)
    const [estadoAzul, setEstadoAzul] = useState(false)
    const [estadoRoxa, setEstadoRoxa] = useState(false)
    const [estadoMarrom, setEstadoMarrom] = useState(false)
    const [estadoPreta, setEstadoPreta] = useState(false)

    // verficar o tipo de seleção dos diversos
    const [estadoCtLarParana, setEstadoCtLarParana] = useState(false)
    const [estadoCtCentro, setEstadoCtCentro] = useState(false)
    const [estadoCt, setEstadoCt] = useState(false)
    const [estadoCtIretama, setEstadoCtIretama] = useState(false)
    
    // loading infos 
    const [loadingInfo, setLoadingInfo] = useState(false)

    const handleSetFilter = (selectedFilter: string) => {
        setVariosFiltros([...variosFiltros, selectedFilter])
        
        if(selectedFilter.toLocaleLowerCase() == "branca"){
            setEstadoBranca(true)
            setFilterFaixa([...filterFaixa, selectedFilter])
        }
        else if(selectedFilter.toLocaleLowerCase() == "cinza"){
            setEstadoCinza(true)
            setFilterFaixa([...filterFaixa, selectedFilter])
        }
        else if(selectedFilter.toLocaleLowerCase() == "amarela"){
            setEstadoAmarela(true)
            setFilterFaixa([...filterFaixa, selectedFilter])
        }
        else if(selectedFilter.toLocaleLowerCase() == "laranja"){
            setEstadoLaranja(true)
            setFilterFaixa([...filterFaixa, selectedFilter])
        }
        else if(selectedFilter.toLocaleLowerCase() == "verde"){
            setEstadoVerde(true)
            setFilterFaixa([...filterFaixa, selectedFilter])
        }
        else if(selectedFilter.toLocaleLowerCase() == "azul"){
            setEstadoAzul(true)
            setFilterFaixa([...filterFaixa, selectedFilter])
        }
        else if(selectedFilter.toLocaleLowerCase() == "roxa"){
            setEstadoRoxa(true)
            setFilterFaixa([...filterFaixa, selectedFilter])
        }
        else if(selectedFilter.toLocaleLowerCase() == "marrom"){
            setEstadoMarrom(true)
            setFilterFaixa([...filterFaixa, selectedFilter])
        }
        else if(selectedFilter.toLocaleLowerCase() == "preta"){
            setEstadoPreta(true)
            setFilterFaixa([...filterFaixa, selectedFilter])
        }
        else if(selectedFilter.toLocaleLowerCase() == "ct lar paraná"){
            setEstadoCtLarParana(true)
            setFilterCentroDeTreino([...filterCentroDeTreino, selectedFilter.slice(3, )])
        }
        else if(selectedFilter.toLocaleLowerCase() == "ct centro"){
            setEstadoCtCentro(true)
            setFilterCentroDeTreino([...filterCentroDeTreino, selectedFilter.slice(3, )])
        }
        else if(selectedFilter.toLocaleLowerCase() == "ct asa leste"){
            setEstadoCt(true)
            setFilterCentroDeTreino([...filterCentroDeTreino, selectedFilter.slice(3, )])
        }
        else if(selectedFilter.toLocaleLowerCase() == "ct iretama"){
            setEstadoCtIretama(true)
            setFilterCentroDeTreino([...filterCentroDeTreino, selectedFilter.slice(3, )])
        }
    }
const [inputFilter, setInputFilter] = useState(false)
    const toClearInputFilter = () => {
        setFilterNome("")
    }

    const handleRemoverFiltro = (index: number, filtro: any) => {
        //remover o filtro da array que controle o front-end
        const atualizaFiltros = [...variosFiltros]
        atualizaFiltros.splice(index, 1)
        setVariosFiltros(atualizaFiltros)

        //remover filtro(faixa) do array que controla o banco de dados
        const indiceToRemoveFx = filterFaixa.indexOf(filtro)
            filterFaixa.splice(indiceToRemoveFx, 1)

        //remover filtro(faixa) do array que controla o banco de dados
        const indiceToRemoveCt = filterCentroDeTreino.indexOf(filtro)
        filterCentroDeTreino.splice(indiceToRemoveCt, 1)

        if(filtro.toLowerCase() == "branca"){
            setEstadoBranca(false)
        }
        else if(filtro.toLocaleLowerCase() == "cinza"){
            setEstadoCinza(false)
        }
        else if(filtro.toLocaleLowerCase() == "amarela"){
            setEstadoAmarela(false)
        }
        else if(filtro.toLocaleLowerCase() == "laranja"){
            setEstadoLaranja(false)
        }
        else if(filtro.toLocaleLowerCase() == "verde"){
            setEstadoVerde(false)
        }
        else if(filtro.toLocaleLowerCase() == "azul"){
            setEstadoAzul(false)
        }
        else if(filtro.toLocaleLowerCase() == "roxa"){
            setEstadoRoxa(false)
        }
        else if(filtro.toLocaleLowerCase() == "marrom"){
            setEstadoMarrom(false)
        }
        else if(filtro.toLocaleLowerCase() == "preta"){
            setEstadoPreta(false)
        }
        else if(filtro.toLocaleLowerCase() == "ct lar paraná"){
            setEstadoCtLarParana(false)
        }
        else if(filtro.toLocaleLowerCase() == "ct centro"){
            setEstadoCtCentro(false)
        }
        else if(filtro.toLocaleLowerCase() == "ct asa leste"){
            setEstadoCt(false)
        }
        else if(filtro.toLocaleLowerCase() == "ct iretama"){
            setEstadoCtIretama(false)
        }
    }

    const [todosFilter, setTodosFilter] = useState(false)
    const [longName, setLongName] = useState(false)
    
    const handleFilterTodos = () => {
        checkInputFilterLenght()
        if(variosFiltros.length < 1 && filterNome == ""){
            setTodosFilter(true)
            setInputFilter(false)
        }
        else{
            setTodosFilter(false)
        }

        if(variosFiltros.length > 9){
            setLongName(true)
        }
        else{
            setLongName(false)
        }
    }

     const checkInputFilterLenght = () => {
         if(filterNome != ""){
             setInputFilter(true)
             setTodosFilter(false)
         }
         else{
             setInputFilter(false)
             setTodosFilter(true)
         }
     }

    const handleCloseDropOnBlur = () => {
        if(dropdown){
            setDropdown(false)
        }
    }

    const [showInfosIntegrante, setShowInfosIntegrante] = useState([{}])

    const handleShowInfosIntegrante = (id: any) => {
        setShowInfosIntegrante(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

const [qttResult, setQttResult] = useState(0)
const [participants, setParticipants] = useState<Participante[]>([])
const [filterNome, setFilterNome] = useState("")
const [filterFaixa, setFilterFaixa] = useState<string[]>([])
const [filterCentroDeTreino, setFilterCentroDeTreino] = useState<string[]>([])


const filterToApply: {nome: String, cor_da_faixa: String[], centro_de_treino: String[]} = {
   nome: filterNome,
   cor_da_faixa: filterFaixa,
   centro_de_treino: filterCentroDeTreino
 } 

const handleGetInfos = async () => {
   if(filterToApply.nome.length == 0 && filterToApply.cor_da_faixa.length == 0 && filterToApply.centro_de_treino.length == 0){
     const res = await axios.get("http://localhost:8080/users")
     setParticipants(res.data)
     setQttResult(res.data.length)

     setLoadingInfo(true)

       setTimeout(() => {
           setLoadingInfo(false)
       }, 2000);
   }
   else{
       const res = await axios.get("http://localhost:8080/users/filter", {params: filterToApply})
       setParticipants(res.data)
       setQttResult(res.data.length)

       setLoadingInfo(true)

       setTimeout(() => {
           setLoadingInfo(false)
       }, 1000);
   }
 }

 useEffect(() => {
   handleGetInfos()
 }, [])

 useEffect(() => {
   handleGetInfos()
 }, [filterFaixa.length, filterCentroDeTreino.length, filterNome.length])

 const [infosQuery, setInfosQuery] = useState([{}])

 const handleChangeInfoQuery = (id: any) => {
   setInfosQuery(prevState => ({
       ...prevState,
       [id]: !prevState[id]
   }))
 }

    return(
    <div  onMouseMove={handleFilterTodos} className="page-infos-see">
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

        <div className="container-see-infos">
            <div className="box-see-infos">

                <div className="box-nav">
                    <div onClick={handleOnClickBtnFiltro} className={dropdown ? "btn-filtro-selected" : "btn-filtro"}>
                        <span>Filtros</span>
                        <img className='filter-icon' src={filterICON}></img>
                        <img style={{transform: dropdown ? "rotate(180deg)" : "rotate(0deg)", transition: ".3s"}} className='dropdown-icon' src={dropdownCloseOpenICON}></img>
                    </div>

                        <div style={{pointerEvents: dropdown ? "all" : "none"}} onMouseLeave={handleCloseDropOnBlur} className="dropdown-container-see">
                            <div className="dropdown-itens-faixa">
                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" ,pointerEvents: dropdown ? "all" : "none", transition: ".1s"}}  className='title-drop' >Faixas</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0", transition: ".15s"}}  onClick={() => handleSetFilter("Branca")} className={estadoBranca ? "item-drop-selected" : "item-drop"} >Branca</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0", transition: ".15s"}}  onClick={() => handleSetFilter("Cinza")} className={estadoCinza ? "item-drop-selected" : "item-drop"} >Cinza</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}}  onClick={() => handleSetFilter("Amarela")} className={estadoAmarela ? "item-drop-selected" : "item-drop"} >Amarela</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}}  onClick={() => handleSetFilter("Laranja")} className={estadoLaranja ? "item-drop-selected" : "item-drop"} >Laranja</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}}  onClick={() => handleSetFilter("Verde")} className={estadoVerde ? "item-drop-selected" : "item-drop"} >Verde</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}}  onClick={() => handleSetFilter("Azul")} className={estadoAzul ? "item-drop-selected" : "item-drop"} >Azul</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}}  onClick={() => handleSetFilter("Roxa")} className={estadoRoxa ? "item-drop-selected" : "item-drop"} >Roxa</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}}  onClick={() => handleSetFilter("Marrom")} className={estadoMarrom ? "item-drop-selected" : "item-drop"} >Marrom</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}}  onClick={() => handleSetFilter("Preta")} className={estadoPreta ? "item-drop-selected" : "item-drop"} >Preta</span>
                            </div>

                            <div className="dropdown-itens-cts">
                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} className='title-drop'>CT</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} onClick={() => handleSetFilter("CT Lar Paraná")} className={estadoCtLarParana ? "item-drop-selected" : "item-drop"} >CT - Lar Paraná</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} onClick={() => handleSetFilter("CT Centro")} className={estadoCtCentro ? "item-drop-selected" : "item-drop"} >CT - Centro</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} onClick={() => handleSetFilter("CT Asa Leste")} className={estadoCt ? "item-drop-selected" : "item-drop"} >CT - Asa Leste</span>

                                <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} onClick={() => handleSetFilter("CT Iretama")} className={estadoCtIretama ? "item-drop-selected" : "item-drop"} >CT - Iretama</span>
                            </div>

                            <div style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" , transition: ".15s"}} className="dropdown-search">
                            <span style={{height: dropdown ? "100%" : "0%",opacity: dropdown ? "1" : "0" ,pointerEvents: dropdown ? "all" : "none", transition: ".1s"}}  className='title-drop' >Pesquisar</span>
                                <MyInput
                                    id="filterNome"
                                    value={filterNome}
                                    onChange={(e) => setFilterNome(e.target.value)}
                                    type='text'
                                    width= "100%"
                                    height= "6vh"
                                    padding="0vh 3vh 0vh 2.5vh"
                                    fontSize= "2.4vh"
                                    border= "solid .4vh black"
                                    borderBottom="solid .4vh black"
                                    borderRadius='.6vh'
                                    backgroundColor="white"
                                    transition= ".4s"
                                    enter= "white"
                                    leave= "white"
                                    ph='Nome'
                                />
                            </div>

                        </div>

                        <div className="input-pesquisa-see">
                        <div style={{display: todosFilter ? "flex" : "none", pointerEvents: "none"}}  className="filter-fixed">
                            <span>Todos</span>
                            <img src={lockICON}></img>
                        </div>

                        <div onClick={toClearInputFilter} style={{display: inputFilter ? "flex" : "none"}}  className={longName ? "filter-picked-long" : "filter-picked"}>
                            <span>{filterNome}</span>
                            <img src={closeX}></img>
                        </div>
                        
                        {variosFiltros.map((filtro, index) => (
                        <div onClick={() => handleRemoverFiltro(index, filtro)} key={index} className={longName ? "filter-picked-long" : "filter-picked"}>
                            <span>{filtro}</span>
                            <img src={closeX}></img>
                        </div>
                        ))}
                    </div>
                    
                    <div className="box-search-icon-see">
                        <img onClick={handleGetInfos} className='search-icon' src={searchUser}></img>
                    </div>
                </div>

                {/* ----------------------- para mobile --------------------- */}

                <div className="query-FilterAndAdd">
                        <div onClick={handleOnClickBtnFiltro} className={dropdown ? "btn-filtro-selected" : "btn-filtro"}>
                            <span>Filtros</span>
                            <img className='filter-icon' src={filterICON}></img>
                            <img style={{transform: dropdown ? "rotate(180deg)" : "rotate(0deg)", transition: ".3s"}} className='dropdown-icon' src={dropdownCloseOpenICON}></img>
                        </div>
                    </div>
                    
{/* -------------------------------------------------------------------- */}

                <div style={{opacity: dropdown || loadingInfo ? ".1" : "1", transition: ".3s"}} className="count-result-qtt">
                    <span>Participantes encontrados: <strong>{qttResult}</strong></span>
                </div>
                
                
                <div style={{overflow: loadingInfo ? "hidden" : "auto"}} className="table-result-pesquisa">
                        
                        {participants.map((participante)=> (
                        <div  className="adaptive-infos-overlay" key={participante.id}>
                            <div  className="container-integrante-active-see" style={{opacity: dropdown ? ".1" : "1", border: showInfosIntegrante[participante.id] ? ".5vh solid black" : "0vh solid black"}} >
                                <div onClick={() =>handleShowInfosIntegrante(participante.id)} className={loadingInfo ? "box-integrante-loading" : "box-integrante"}>
                                    <div style={{display: loadingInfo ? "flex" : "none"}} className="loading"></div>
                                    <span>{participante.nome}  <span className='faixa-box-integ' >({participante.cor_da_faixa})</span></span>
                                    <img style={{transform: showInfosIntegrante[participante.id] ? "rotate(180deg)" : "rotate(0deg)", transition: ".7s"}} src={dropdownCloseOpenICON}></img>
                                </div>
                            </div>

                            <div className={showInfosIntegrante[participante.id] ? "container-integrante-infos-opened" : "container-integrante-infos-closed"} style={{visibility: dropdown || loadingInfo ? "hidden": "visible"}}>

{/* ===================== para mobile ============= */}
                                <div style={{display: infosQuery[participante.id] ? "none" : "flex", opacity: dropdown || loadingInfo ? "0": "1"}} className="infos-integ-leftQuery">
                                    <span className="title-infos-integ">Dados</span>
                                    <span><strong>Nome Completo: </strong> {participante.nome} </span>
                                    <span><strong>Data de nascimento (aaaa/mm/dd): </strong> {participante.data_de_nascimento.slice(0, 10)} </span>
                                    <span><strong>Telefone: </strong> {participante.telefone} </span>
                                    <span><strong>Responsável: </strong> {participante.responsavel} </span>
                                    <span><strong>Local de treino: </strong> CT - {participante.centro_de_treinamento} </span>
                                </div>

                                <div style={{display: infosQuery[participante.id] ? "flex" : "none", opacity: dropdown || loadingInfo ? "0": "1"}} className="infos-integ-rightQuery">
                                    <span className="title-infos-integ">Endereço</span>
                                    <span><strong>Cidade: </strong> {participante.nome_cidade} </span>
                                    <span><strong>Bairro: </strong> {participante.bairro} </span>
                                    <span><strong>Rua: </strong> {participante.rua} </span>
                                    <span><strong>Número da residência: </strong> {participante.numero} </span>
                                </div>
{/* ===================== ================= ============= */}

{/* ===================== para pc ============= */}
                                <div className="infos-integ-left">
                                    <span className="title-infos-integ">Dados</span>
                                    <span><strong>Nome Completo: </strong> {participante.nome} </span>
                                    <span><strong>Data de nascimento (aaaa/mm/dd): </strong> {participante.data_de_nascimento.slice(0, 10)} </span>
                                    <span><strong>Telefone: </strong> {participante.telefone} </span>
                                    <span><strong>Responsável: </strong> {participante.responsavel} </span>
                                    <span><strong>Local de treino: </strong> CT - {participante.centro_de_treinamento} </span>
                                </div>

                                <div className="infos-integ-right">
                                    <span className="title-infos-integ">Endereço</span>
                                    <span><strong>Cidade: </strong> {participante.nome_cidade} </span>
                                    <span><strong>Bairro: </strong> {participante.bairro} </span>
                                    <span><strong>Rua: </strong> {participante.rua} </span>
                                    <span><strong>Número da residência: </strong> {participante.numero} </span>
                                </div>
{/* ===================== ================= ============= */}

                                    <div className="choosedInfoShow">
                                        <div style={{backgroundColor: infosQuery [participante.id] ? "transparent" : "black", color: infosQuery[participante.id] ? "black" : "white"}} onClick={() =>handleChangeInfoQuery(participante.id)} className="pessoal-box">
                                            <span>Pessoal</span>
                                        </div>

                                        <div style={{backgroundColor: infosQuery [participante.id] ? "black" : "transparent", color: infosQuery[participante.id] ? "white" : "black"}} onClick={() =>handleChangeInfoQuery(participante.id)} className="endereco-box">
                                            <span>Endereço</span>
                                        </div>
                                    </div>

                            </div>    
                        </div>
                        ))}                     
                </div>
            </div>
        </div>
    </div>
    )
}
export default informationSee