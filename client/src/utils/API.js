import axios from "axios";

const request = {
    getProduct: function(productId) {
        // return `http://localhost:3001/api/products/${productId}`;
        return axios.get(`/api/inventory/${productId}`);
    },
    getAllProducts: function() {
        return axios.get(`/api/products`);
    }
}

export default request;