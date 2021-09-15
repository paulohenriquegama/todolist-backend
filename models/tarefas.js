const mongoose = require('mongoose');

const tarefaModel = new mongoose.Schema({
  titulo: {type: String, require: true},
  desc: {type: String},
  prioridade: {type: String, require: true},
  status: {type: String, require: true},
  prazo: {type: Date, require: true},
  dataCriacao: {type: Date, default: Date.now}
})

Tarefa = mongoose.model('tarefas',tarefaModel);

module.exports = Tarefa;

