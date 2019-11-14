import axios from "axios";

const request = {
    getProduct: function(productId) {
        return axios.get(`/api/inventory/${productId}`);
    },
    getAllProducts: function() {
        return axios.get(`/api/products`);
    },
    getAllTransactionTypes: function() {
        return axios.get('/api/transactiontypes');
    },
    createOrder: function(orderData) {
        return axios.post('/api/transactions', orderData);
    },
    login: function(email, password) {
        return axios.post('/api/users/login', {
            email: email,
            password: password
        });
    },
    registerUser: function(name, email, password) {
        return axios.post('/api/users', {
            name: name,
            email: email,
            password: password
        });
    }
}

export default request;