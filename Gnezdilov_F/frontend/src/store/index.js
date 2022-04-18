import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isAuth: localStorage.length === 0 ? false : true,
        favoriteProducts: {
            products: [],
            count: 0
        }
    },
    getters: {},
    mutations: {
        logIn(state) {
            state.isAuth = true
        },
        logOut(state) {
            state.isAuth = false
        },
        addFavorite(state, product) {
            state.favoriteProducts.products.push(product)
            state.favoriteProducts.count++
        },
        removeFavorite(state, product) {
            function getIndex(element, array) {
                var i = 0
                while (array[i] != element) {
                    i++
                }
                return i
            }
            state.favoriteProducts.products.splice(getIndex(product, state.favoriteProducts.products), 1)
            state.favoriteProducts.count--
        },
    },
    actions: {},
    modules: {}
})