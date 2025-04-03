const db = require('../database/connection');

module.exports = {
   async listarContatos(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'lista de mensagens',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro na lista de mensagem',
            dados: error.message
         })
      }
   },


   async cadastarmensagem(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            mensagem: 'cadastrar mensagem',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            mensagem: 'erro na lista de mensagens',
            dados: error.message
         })
      }
   },


   async editarmensagem(request, response) {
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
            mensagem: 'erro na lista de mensagens',
            dados: error.message
         })
      }
   },


   async apagarContatos(request, response) {
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
            mensagem: 'erro na lista de mensagens',
            dados: error.message
         })
      }
   },
}