const express = Require('express')
const router = express.Router();

const mensagemController= require ('../controllers/mensagem');
const mensagemController= require ('../controllers/pagamento');

router.get('/mensagem', mensagemController.listarmensagem);
router.post('/mensagem', mensagemController.cadrastrarmensagem);
router.patch('/mensagem', mensagemController.editarmensagem);
router.delete('/mensagem', mensagemController.apagarmensagem);

router.get('/pagamento', mensagemController.listarpagamento);
router.post('/pagamento', mensagemController.cadrastrarpagamento);
router.patch('/pagamento', mensagemController.editarpagamento);
router.delete('/pagamento', mensagemController.apagarpagamento);

module.exports = router;