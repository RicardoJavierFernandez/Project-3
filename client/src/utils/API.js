import axios from "axios";

export default {
    getProduct: function(productId) {
        return axios.get("/api/products/" + productId);
    }
}