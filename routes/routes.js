const express = require('express')
const router = express.Router()
const Tarefa = require('./../models/tarefas')
const controller = require('../controllers/controllers')

router.get('/', (req, res) => {
  res.status(200).send('Home page')
})

router.get('/tarefas', controller.getTarefas)

router.get('/tarefas/:id', controller.getTarefaById)

router.get('/status/:status', controller.getTarefaByStatus)

router.post('/add', controller.addTarefa)

router.put('/tarefas/:id', controller.updateTarefa)

router.delete('/tarefas/:id', controller.deleteTarefa)

module.exports = router
