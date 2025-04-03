const db = require('../database/connection');

module.exports = {
   async listarContatos(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            pagamento: 'lista de pagamento',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            pagamento: 'erro na lista de pagamento',
            dados: error.message
         })
      }
   },


   async cadastarpagamento(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            pagamento: 'cadastrar pagamento',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            pagamento: 'erro na lista de pagamento',
            dados: error.message
         })
      }
   },


   async editarpagamento(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            pagamento: 'editar pagamento',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            pagamento: 'erro na lista de pagamento',
            dados: error.message
         })
      }
   },


   async apagarContatos(request, response) {
      try {
         return response.status(200).json({

            sucesso: true,
            pagamento: 'apagar pagamento',
            dados: null

         })
      }
      catch (error) {
         return response.status(500).json({
            sucesso: false,
            pagamento: 'erro na lista de pagamento',
            dados: error.message
         })
      }
   },
}