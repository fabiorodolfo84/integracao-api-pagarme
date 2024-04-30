const axios = require('axios');

const instanciaAxios = axios.create(
    {
        baseURL: 'https://api.pagar.me/1/',
        params: {
            api_key: 'ak_test_qRjc2viefQsjrfsEGj9jqZjdL3lv10'
        }

    }
);

module.exports = instanciaAxios;