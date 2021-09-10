const mongoose = require('mongoose')
const Tarefa = require('./../models/tarefas')



  exports.getTarefas = async (req, res) => {
    await Tarefa.find({})
      .then(tarefas => {
        res.status(200).send(tarefas)
      })
      .catch(err => console.error(err))
  }

  exports.getTarefaById = async (req, res) => {
    const id = req.params.id
    // if(!id){
      
    // }
    await Tarefa.findOne({ _id: id })
      .then(tarefa => {
        res.status(200).send(tarefa)
      })
      .catch(err => res.status(404).send("Tarefa não localizada."))
  }

  exports.addTarefa = async (req, res) => {
    const novaTarefa = await req.body;
    
    if (!novaTarefa.titulo || !novaTarefa.prioridade || !novaTarefa.status || !novaTarefa.prazo){
      res.status(400).send("Preencha as informações necessarias.");
      return;
    }
    await Tarefa.create(req.body)
      .then(() => {
        res.status(201).send('Tarefa adicionada com sucesso.')
      })
      .catch(err => res.status(400).send(err))
    
  }

  exports.updateTarefa = async (req, res) => {
    const id = req.params.id;
    const novaTarefa = await req.body;
    
    if (!novaTarefa.titulo || !novaTarefa.prioridade || !novaTarefa.status || !novaTarefa.prazo){
      res.status(400).send("Preencha as informações necessarias.");
      return;
    }
    await Tarefa.updateOne({ _id: id}, req.body).then(() => {
      res.status(200).send("Tarefa atualizada com sucesso.")
    }).catch((err) => {
      res.status(400).send(err)
    })
  }

  exports.deleteTarefa = async (req, res) => {
    await Tarefa.deleteOne({_id: req.params.id}).then(() => {
      res.status(200).send('Tarefa excluída com sucesso.')
    }).catch((err) => {
      res.status(404).send(err)
    })
  }


