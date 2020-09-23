import * as axios from "axios";


const instance = axios.create({
    baseURL: "url"
})

export const productsApi = {
    getAllProducts() {
        return instance.get(`product`)
    },
    getProduct(productId) {
        return instance.get(`product/${productId}`)
    },
    updateProductData(productId, data) {
        return instance.put(`product/${productId}`, data)
    },
    addProductPhoto(productId, photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`product/photo/${productId}`, formData)
    },
    deleteProductPhoto(productId, photoId) {
        return instance.delete(`product/${productId}/${photoId}`)
    },
    deleteProduct(productId) {
        return instance.delete(`product/${productId}`)
    }
}

export const authApi = {
    userAuth() {
        // add JWT Token in actions
        return instance.get('auth/me')
    },
    login(email, password) {
        return instance.post('auth/login', { email, password })
    },
    logout() {
        // dell JWT Token in actions
        return instance.delete('auth/login')
    }
}