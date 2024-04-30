const instanciaAxios = require('../servicos/pagarme');

const criarPedido = async (req, res) => {
    const { body } = req;

    try {
        const pedido = await instanciaAxios.post('transactions', body);

        return res.json(pedido.data);
        
    } catch (error) {
        const { data: { errors }, status } = error.response; // Corrigindo "erros" para "errors"
        return res.status(status).json({ erro: `${errors[0].parameter_name} - ${errors[0].message}` }); // Corrigindo "erros" para "errors"
        
    }
};

const consultarPedido = async (req, res) => {
    const {id} = req.params;
    try {
        const pedido = await instanciaAxios.get(`transactions/${id}`);
        return res.json(pedido.data);
    } catch (error) {
        const { data: { errors }, status } = error.response; // Corrigindo "erros" para "errors"
        return res.status(status).json({ erro: `${errors[0].parameter_name} - ${errors[0].message}` }); // Corrigindo "erros" para "errors"
      
        
    }
};

module.exports = {
    criarPedido,
    consultarPedido
};
