const db = require('../database/connection');

module.exports = {
   async listarMensagem(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'lista de mensagem',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro na listagem de mensagem',
            dados: error.message
         })
      }
   },




   async cadastrarMensagem(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'cadastro de mensagem',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro no cadastro de mensagem',
            dados: error.message
         })
      }
   },




   async editarMensagem(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'editar mensagem',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro ao editar mensagem',
            dados: error.message
         })
      }
   },




   async apagarMensagem(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'apagar mensagem',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro ao apagar mensagem',
            dados: error.message
         })
      }
   },
}