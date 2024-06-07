import express from 'express'
import { addUsers, deleteUsers, getUsers, updateUsers } from '../controllers/partipantControllers.js'
import { verifyLoginAluno, verifyLoginProfessor } from '../controllers/loginControllers.js'
import { feedingQueue } from '../controllers/waitingQueueControllers.js'
import EventEmitter from 'events'
import { filterParticipantes } from '../controllers/filtersControllers.js'


const router = express.Router()

const emitter = new EventEmitter()
emitter.setMaxListeners(20)

// ROTA PADRÃO
router.get("/", getUsers)
router.post("/", addUsers)
router.put("/", updateUsers)
router.delete("/", deleteUsers)

// ROTA DE AUTENTICAÇÃO
router.post("/authProfessor", verifyLoginProfessor)
router.post("/authAluno", verifyLoginAluno)

//ROTA PARA ALIMENTAR A FILA DE ESPERA
router.post("/queue", feedingQueue)

//ROTA PARA FILTRAR OS PARTICIPANTES
router.get("/filter", filterParticipantes)

export default router