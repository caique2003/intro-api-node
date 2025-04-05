const db = require('../database/connection');

module.exports = {
    async listarPagamento(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de pagamentos',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na listagem de pagamentos',
                dados: error.message
            });
        }
    },

    async cadastrarPagamento(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastro de pagamento realizado com sucesso',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao cadastrar pagamento',
                dados: error.message
            });
        }
    },

    async editarPagamento(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Pagamento editado com sucesso',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao editar pagamento',
                dados: error.message
            });
        }
    },

    async apagarPagamento(request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Pagamento apagado com sucesso',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro ao apagar pagamento',
                dados: error.message
            });
        }
    },
};
