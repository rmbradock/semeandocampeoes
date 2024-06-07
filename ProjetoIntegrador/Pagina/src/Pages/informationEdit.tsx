import './informationEdit.css'
import overlayLoadingCircle from '../assets/overlayLoadingTextLoading.gif'
import LogoSemeandoCampeoes from '../assets/LogoSemeandoCampeoes.png'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Participante } from '../interfaces/interfaces'

import filterICON from '../assets/filterICON.svg'
import closeX from '../assets/closePage.svg'
import lockICON from '../assets/lockIcon.svg'
import dropdownCloseOpenICON from '../assets/openCloseDropdown.svg'
import searchUser from '../assets/searchUserIcon.svg'
import removeUSER from '../assets/removeUserIcon.svg'
import editUSER from '../assets/editUserIcon.svg'
import addUSerIcon from '../assets/addUserIcon.svg'
import MyInput from '../components/MyInput'
import MyButton from '../components/MyButton'

const informationEdit = () => {

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

    const [inputFilter, setInputFilter] = useState(false)

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
    const [deleteBoxMode, setDeleteBoxMode] = useState([{}])

    const handleShowInfosIntegrante = (id: any) => {
        setShowInfosIntegrante(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    const handleDeleteBoxState = (id: any) => {
        setDeleteBoxMode(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
        
        setBoxForCrud(false)
        if(deleteBoxMode[id]){
            setBoxForCrud(true)
            setActionCrudColor("box-postput-removed")
            setTextForPostAndPut(`Ação cancelada`)
        }
    }

    const [infosQuery, setInfosQuery] = useState([{}])

  const handleChangeInfoQuery = (id: any) => {
    setInfosQuery(prevState => ({
        ...prevState,
        [id]: !prevState[id]
    }))
  }

    const [boxEditMode, setBoxEditMode] = useState(false)
    const [containerEditMode, setContainerEditMode] = useState(false)


    const handleOnClickCloseEdit = () => {
        setBoxEditMode(false)
        setBoxForCrud(false)

        setTimeout(() =>{
            scrollToTop()
            setContainerEditMode(false) 
            setBoxForCrud(true)
            setActionCrudColor("box-postput-removed")
            setTextForPostAndPut(`Ação cancelada`)
            setBoxEditModeToAdd(false)
        }, 300)
    }
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollToTop = () => {
        if (containerRef.current) {
          containerRef.current.scrollTop = 0
        }
  }

  // ligação com o banco de dados ---->

const [participants, setParticipants] = useState<Participante[]>([])
const [activeId, setActiveId] = useState(-1)
const [nomePessoa, setNomePessoa] = useState("")
const [faixa, setFaixa] = useState(0)
const [dataNasc, setDataNasc] = useState("")
const [telefone, setTelefone] = useState("")
const [responsavel, setResponsavel] = useState("")
const [centroDeTreino, setCentroDeTreino] = useState(0)
const [rua, setRua] = useState("")
const [numCasa, setNumCasa] = useState("")
const [bairro, setBairro] = useState("")
const [nomeCidade, setNomeCidade] = useState("")

// estados 
const [titleAddOrUpdate, setTitleAddOrUpdate] = useState("")
const [buttonActionAddOrUpdate, setButtonActionAddOrUpdate] = useState("")
const [addOrUpdate, setAddOrUpdate] = useState(false)

const [actionCrudColor, setActionCrudColor] = useState("")

const [classUpdAddContent, setClassUpdAddContent] = useState("")
const [classUpdAddTitle, setClassUpdAddTitle] = useState("")
const [classUpdAddSubTitle, setClassUpdAddSubTitle] = useState("")
const [boxEditModeToAdd, setBoxEditModeToAdd] = useState(false)
const [colorButton, setColorButton] = useState(false)

// loading infos 
const [loadingInfo, setLoadingInfo] = useState(false)


//trazer a quantia da pesquisa
 const [qttResult, setQttResult] = useState(0)

 // armazenar filtros de busca para os participantes
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

  const handleUpdateInfos = async () => {
    if(activeId < 0){
    await axios.post("http://localhost:8080/users",{nome: nomePessoa, data_de_nascimento: dataNasc, telefone: telefone, responsavel: responsavel, id_centro_de_treinamento: centroDeTreino, id_faixa: faixa, rua: rua, numero: numCasa, bairro: bairro, nome_cidade: nomeCidade})
    setBoxEditMode(false)
    setBoxForCrud(false)

        setTimeout(() =>{
            scrollToTop()
            setContainerEditMode(false)

            setNomePessoa("")
            setFaixa(0)
            setDataNasc("")
            setTelefone("")
            setResponsavel("")
            setCentroDeTreino(0)
            setRua("")
            setNumCasa("")
            setBairro("")
            setNomeCidade("")
            setBoxForCrud(true)
            setActionCrudColor("box-postput-added")
            setTextForPostAndPut(`Novo participante adicionado: ${nomePessoa}`)
            setBoxEditModeToAdd(false)
        }, 300)

    handleGetInfos()
    }
    else{
    await axios.put("http://localhost:8080/users", {id: activeId, nome: nomePessoa, data_de_nascimento: dataNasc, telefone: telefone, responsavel: responsavel, id_centro_de_treinamento: centroDeTreino, id_faixa: faixa, rua: rua, numero: numCasa, bairro: bairro, nome_cidade: nomeCidade})

    setBoxForCrud(false)
    setBoxEditMode(false)

        setTimeout(() =>{
            scrollToTop()
            setContainerEditMode(false)

            setNomePessoa("")
            setFaixa(0)
            setDataNasc("")
            setTelefone("")
            setResponsavel("")
            setCentroDeTreino(0)
            setRua("")
            setNumCasa("")
            setBairro("")
            setNomeCidade("")
            setActiveId(-1)
            setBoxForCrud(true)
            setActionCrudColor("box-postput-updated")
            setTextForPostAndPut(`Alterações realizadas no(a) ${nomePessoa}`)
        }, 300)

    handleGetInfos()
    }
  }

    const handleSelectInfos = async (id: number) => {
        setAddOrUpdate(true)
        setBoxEditMode(true)
        setContainerEditMode(true)
        setTitleAddOrUpdate("Atualizar participante")
        setButtonActionAddOrUpdate("Salvar Mudanças")
        setClassUpdAddContent("content-edicao-on-updating")
        setClassUpdAddTitle("title-container-edit-updating")
        setClassUpdAddSubTitle("subtitle-container-edit-updating")
        setColorButton(true)

        
        const participante = participants.find((participante: Participante) => participante.id === id)
        if (participante) {
            setActiveId(participante.id)
            setNomePessoa(participante.nome)
            setFaixa(participante.cor_da_faixa)
            setDataNasc(participante.data_de_nascimento.slice(0, 10))
            setTelefone(participante.telefone)
            setResponsavel(participante.responsavel)
            setCentroDeTreino(participante.cdtid)
            setFaixa(participante.fid)
            setFaixa(participante.fid)
            setRua(participante.rua)
            setNumCasa(participante.numero)
            setBairro(participante.bairro)
            setNomeCidade(participante.nome_cidade)
        }
    }

  const handleAddInfos = async () => {
    setAddOrUpdate(false)
    setTitleAddOrUpdate("Adicionar Participante")
    setBoxEditMode(true)
    setContainerEditMode(true)
    setButtonActionAddOrUpdate("Inserir participante")
    setClassUpdAddContent("content-edicao-on-adding")
    setClassUpdAddTitle("title-container-edit-adding")
    setClassUpdAddSubTitle("subtitle-container-edit-adding")
    setBoxEditModeToAdd(true)
    setColorButton(false)

    setNomePessoa("")
    setFaixa(0)
    setDataNasc("")
    setTelefone("")
    setResponsavel("")
    setCentroDeTreino(0)
    setRua("")
    setNumCasa("")
    setBairro("")
    }

  const handleDeleteInfos = async (id : number) => {
    await axios.delete(`http://localhost:8080/users?id=${id}`)
    handleGetInfos()
    setBoxForCrud(false)
    
    setTimeout(() => {
        setBoxForCrud(true)
        setTextForPostAndPut(`Participante removido!`)
        setActionCrudColor("box-postput-removed")
    }, 100)
  }

  const [textForPostAndPut, setTextForPostAndPut] = useState("")
  const [boxForCrud, setBoxForCrud] = useState(false)

  
    
    return(
    <div  onMouseMove={handleFilterTodos} className="page-infos-edit">
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

        <div className="container-edit-infos">
            <div className="box-edit-infos">

                <div className="box-nav">

                    <div className="box-search-icon">
                        <img onClick={handleGetInfos} className='search-icon' src={searchUser}></img>
                    </div>

                    <div className="input-pesquisa">
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
                    
                    
                    
                    <div onClick={handleOnClickBtnFiltro} className={dropdown ? "btn-filtro-selected" : "btn-filtro"}>
                        <span>Filtros</span>
                        <img className='filter-icon' src={filterICON}></img>
                        <img style={{transform: dropdown ? "rotate(180deg)" : "rotate(0deg)", transition: ".3s"}} className='dropdown-icon' src={dropdownCloseOpenICON}></img>
                    </div>

                    <div className="adding-integrante">
                        <img className={boxEditModeToAdd ? 'add-iconFocus' :'add-icon'} onClick={handleAddInfos} src={addUSerIcon}></img>
                    </div>

{/* ----------------------- para mobile --------------------- */}

                    <div className="query-FilterAndAdd">
                        <div onClick={handleOnClickBtnFiltro} className={dropdown ? "btn-filtro-selected" : "btn-filtro"}>
                            <span>Filtros</span>
                            <img className='filter-icon' src={filterICON}></img>
                            <img style={{transform: dropdown ? "rotate(180deg)" : "rotate(0deg)", transition: ".3s"}} className='dropdown-icon' src={dropdownCloseOpenICON}></img>
                        </div>

                        <div className="adding-integrante">
                            <img className={boxEditModeToAdd ? 'add-iconFocus' :'add-icon'} onClick={handleAddInfos} src={addUSerIcon}></img>
                        </div>
                    </div>
                    
{/* -------------------------------------------------------------------- */}
                        <div style={{pointerEvents: dropdown ? "all" : "none"}} onMouseLeave={handleCloseDropOnBlur} className="dropdown-container-edit">
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
                </div>
                
                <div style={{opacity: dropdown || loadingInfo ? ".1" : "1", transition: ".3s"}} className="count-result-qtt">
                    <span>Participantes encontrados: <strong>{qttResult}</strong></span>
                </div>
                
                <div style={{overflow: loadingInfo ? "hidden" : "auto"}} className="table-result-pesquisa">
                        
                        {participants.map((participante)=> (
                        <div className="adaptive-infos-overlay" key={participante.id}>
                            <div className="container-integrante-active-edit" style={{opacity: dropdown ? ".1" : "1", border: showInfosIntegrante[participante.id] ? ".5vh solid black" : "0vh solid black"}} >
                                <div onClick={() => handleShowInfosIntegrante(participante.id)} className={loadingInfo ? "box-integrante-loading" : "box-integrante"}>
                                    <div style={{display: loadingInfo ? "flex" : "none"}} className="loading"></div>
                                    <span>{participante.nome}  <span className='faixa-box-integ' >({participante.cor_da_faixa})</span></span>
                                    <img style={{transform: showInfosIntegrante[participante.id] ? "rotate(180deg)" : "rotate(0deg)", transition: ".7s"}} src={dropdownCloseOpenICON}></img>
                                </div>
                            </div>

                            <div className={showInfosIntegrante[participante.id] ? "container-integrante-infos-opened" : "container-integrante-infos-closed"} style={{visibility: dropdown || loadingInfo ? "hidden": "visible"}}>
                                <div className="icons-edit-remove">
                                    <img onClick={() => handleSelectInfos(participante.id)} className={boxEditMode ? 'edit-iconFocus' :'edit-icon'} src={editUSER}></img>
                                    <img onClick={() => handleDeleteBoxState(participante.id)} className={deleteBoxMode[participante.id] ? 'remove-iconFocus' :'remove-icon'} src={removeUSER}></img>
                                </div>

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


                                    <div style={{opacity: deleteBoxMode[participante.id] ? "1" : "0", pointerEvents: deleteBoxMode[participante.id] ? "all" : "none", transition: ".3s"}} className="confirm-dialog-box">
                                        <div className="confirm-dialog">
                                            <span>Confirmar?</span>
                                        </div>
                                        <div className="confirm-buttons">
                                        <MyButton
                                            onClick={() => handleDeleteInfos(participante.id)}
                                            width= "10vh"
                                            height= "3vh"
                                            padding="1vh 1vh"
                                            display='flex'
                                            alignItems='center'
                                            justifyContent='center'
                                            cursor="pointer"
                                            fontSize= "2vh"
                                            fontWeight= "bold"
                                            backgroundColor="rgba(0, 255, 0, 0.8)"
                                            border= ".3vh black solid"
                                            borderBottom= ".3vh black solid"
                                            borderRadius="1vh"
                                            transition= ".2s"
                                            children="Sim"
                                            enter="rgba(0, 255, 0, 0.8)"
                                            leave="rgba(0, 255, 0, 0.3)"
                                        />

                                        <MyButton
                                            onClick={() => handleDeleteBoxState(participante.id)}
                                            width= "10vh"
                                            height= "3vh"
                                            padding="1vh 1vh"
                                            display='flex'
                                            alignItems='center'
                                            justifyContent='center'
                                            cursor="pointer"
                                            fontSize= "2vh"
                                            fontWeight= "bold"
                                            backgroundColor="rgba(255, 0, 0, 0.8)"
                                            border= ".3vh black solid"
                                            borderBottom=".3vh black solid"
                                            borderRadius="1vh"
                                            transition= ".2s"
                                            children="Não"
                                            enter="rgba(255, 0, 0, 0.8)"
                                            leave="rgba(255, 0, 0, 0.3)"
                                        />
                                        </div>
                                    </div>

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

        <div style={{display: containerEditMode ? "flex" : "none"}} className="container-edicao">
            <div ref={containerRef} className={boxEditMode ? classUpdAddContent : "content-edicao-off"}>
                <span className={classUpdAddTitle} >{titleAddOrUpdate}</span>
                <img className='editBC' src={addOrUpdate ? editUSER : addUSerIcon}></img>
                <span className={classUpdAddSubTitle} >Dados</span>

                <div className="button-label-editUser">
                    <label className="labelFocused" htmlFor='nome'>Nome Completo</label>
                    <MyInput
                        id="nomeCompleto"
                        value={nomePessoa.length > 0 ? nomePessoa : ""}
                        onChange={(e) => setNomePessoa(e.target.value)}
                        type='text'
                        width= "90%"
                        height= "7vh"
                        padding="0vh 3vh 0vh 2.5vh"
                        fontSize= "2.4vh"
                        border= "solid .3vh black"
                        borderBottom="solid .3vh black"
                        borderRadius='.6vh'
                        backgroundColor="transparent"
                        transition= ".4s"
                        enter= "transparent"
                        leave= "transparent"
                    />
                </div>

                 <div className="button-label-editUser">
                    <label className="labelFocused" htmlFor='dataNas'>Data de nascimento</label>
                    <MyInput
                        id="dataNas"
                        value={dataNasc.length > 0 ? dataNasc : ""}
                        onChange={(e) => setDataNasc(e.target.value)}
                        type='date'
                        width= "90%"
                        height= "7vh"
                        padding="0vh 3vh 0vh 2.5vh"
                        fontSize= "2.4vh"
                        border= "solid .3vh black"
                        borderBottom="solid .3vh black"
                        borderRadius='.6vh'
                        backgroundColor="transparent"
                        transition= ".4s"
                        enter= "transparent"
                        leave= "transparent"
                    />
                </div>

                <div className="button-label-editUser">
                    <label className="labelFocused" htmlFor='telefone'>Telefone</label>
                    <MyInput
                        id="telefone"
                        value={telefone.length > 0 ? telefone : ""}
                        onChange={(e) => setTelefone(e.target.value)}
                        type='text'
                        width= "90%"
                        height= "7vh"
                        padding="0vh 3vh 0vh 2.5vh"
                        fontSize= "2.4vh"
                        border= "solid .3vh black"
                        borderBottom="solid .3vh black"
                        borderRadius='.6vh'
                        backgroundColor="transparent"
                        transition= ".4s"
                        enter= "transparent"
                        leave= "transparent"
                    />
                </div>

                <div className="button-label-editUser">
                    <label className="labelFocused" htmlFor='responsavel'>Responsável</label>
                    <MyInput
                        id="responsavel"
                        value={responsavel.length > 0 ? responsavel : ""}
                        onChange={(e) => setResponsavel(e.target.value)}
                        type='text'
                        width= "90%"
                        height= "7vh"
                        padding="0vh 3vh 0vh 2.5vh"
                        fontSize= "2.4vh"
                        border= "solid .3vh black"
                        borderBottom="solid .3vh black"
                        borderRadius='.6vh'
                        backgroundColor="transparent"
                        transition= ".4s"
                        enter= "transparent"
                        leave= "transparent"
                    />
                </div>

                <div className="button-label-editUser">
                    <label className="labelFocused" htmlFor='centrodetreino'>Centro de treinamento</label>
                    <select value={centroDeTreino} onChange={(e) => setCentroDeTreino(parseInt(e.target.value))} className='ct-box-alter' name="faixa" id="ct">
                        <option value="0" hidden></option>
                        <option value="5" disabled>*Selecione um centro de treinamento:</option>
                        <option value="1">Centro de treinamento  -  Centro </option>
                        <option value="2">Centro de treinamento  -  Lar Paraná</option>
                        <option value="3">Centro de treinamento  -  Iretama </option>
                        <option value="4">Centro de treinamento  -  Asa Leste </option>
                    </select>
                </div>

                <div className="button-label-editUser">
                    <label className="labelFocused" htmlFor='centrodetreino'>Cor da faixa</label>
                    <select value={faixa} onChange={(e) => setFaixa(parseInt(e.target.value))} className='ct-box-alter' name="faixa" id="ct">
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

                <span className={classUpdAddSubTitle} >Endereço</span>
                <div className="button-label-editUser">
                    <label className="labelFocused" htmlFor='cidade'>Cidade</label>
                    <MyInput
                        id="cidade"
                        value={nomeCidade.length > 0 ? nomeCidade : ""}
                        onChange={(e) => setNomeCidade(e.target.value)}
                        type='text'
                        width= "90%"
                        height= "7vh"
                        padding="0vh 3vh 0vh 2.5vh"
                        fontSize= "2.4vh"
                        border= "solid .3vh black"
                        borderBottom="solid .3vh black"
                        borderRadius='.6vh'
                        backgroundColor="transparent"
                        transition= ".4s"
                        enter= "transparent"
                        leave= "transparent"
                    />
                </div>

                <div className="button-label-editUser">
                    <label className="labelFocused" htmlFor='bairro'>Bairro</label>
                    <MyInput
                        id="bairro"
                        value={bairro.length > 0 ? bairro : ""}
                        onChange={(e) => setBairro(e.target.value)}
                        type='text'
                        width= "90%"
                        height= "7vh"
                        padding="0vh 3vh 0vh 2.5vh"
                        fontSize= "2.4vh"
                        border= "solid .3vh black"
                        borderBottom="solid .3vh black"
                        borderRadius='.6vh'
                        backgroundColor="transparent"
                        transition= ".4s"
                        enter= "transparent"
                        leave= "transparent"
                    />
                </div>

                <div className="container-comp-num">
                    <div className="button-label-rua">
                        <label className="labelFocused" htmlFor='rua'>Rua</label>
                        <MyInput
                            id="rua"
                            value={rua.length > 0 ? rua : ""}
                            onChange={(e) => setRua(e.target.value)}
                            type='text'
                            width= "90%"
                            height= "7vh"
                            padding="0vh 3vh 0vh 2.5vh"
                            fontSize= "2.4vh"
                            border= "solid .3vh black"
                            borderBottom="solid .3vh black"
                            borderRadius='.6vh'
                            backgroundColor="transparent"
                            transition= ".4s"
                            enter= "transparent"
                            leave= "transparent"
                        />
                    </div>

                    <div className="button-label-numcasa">
                    <label className="labelFocused" htmlFor='numCasa'>Número</label>
                    <MyInput
                        id="numCasa"
                        value={numCasa.length > 0 ? numCasa : ""}
                        onChange={(e) => setNumCasa(e.target.value)}
                        type='text'
                        width= "80%"
                        height= "7vh"
                        padding="0vh 3vh 0vh 2.5vh"
                        fontSize= "2.4vh"
                        border= "solid .3vh black"
                        borderBottom="solid .3vh black"
                        borderRadius='.6vh'
                        backgroundColor="transparent"
                        transition= ".4s"
                        enter= "transparent"
                        leave= "transparent"
                    />
                </div>
                </div>

                <div className="save-cancel">
                    <MyButton
                    onClick={handleUpdateInfos}
                    width= "auto"
                    height= "8vh"
                    padding="1vh 3vh"
                    cursor="pointer"
                    fontSize= "2vh"
                    fontWeight= "bold"
                    backgroundColor="transparent"
                    border= ".3vh black solid"
                    borderBottom= ".3vh black solid"
                    borderRadius="1vh"
                    transition= ".5s"
                    children={buttonActionAddOrUpdate}
                    enter={colorButton ? "rgb(53, 94, 255, 0.8)" : "rgb(130, 255, 80)"}
                    leave={colorButton ? "rgb(53, 94, 255, 0.5)" : "rgb(130, 255, 80, 0.5)"}
                    />

                    <MyButton
                    onClick={handleOnClickCloseEdit}
                    width= "auto"
                    height= "8vh"
                    padding="1vh 3vh"
                    cursor="pointer"
                    fontSize= "2vh"
                    fontWeight= "bold"
                    backgroundColor="transparent"
                    border= ".3vh black solid"
                    borderBottom=".3vh black solid"
                    borderRadius="1vh"
                    transition= ".5s"
                    children="Cancelar"
                    enter="rgba(255, 0, 0, 0.8)"
                    leave="rgba(255, 0, 0, 0.3)"
                    />
                </div>
            </div>
        </div>

        <div className={boxForCrud ? actionCrudColor : "box-postput-hidden"}>
            <span>{textForPostAndPut}</span>
        </div>

    </div>
    )
}

export default informationEdit