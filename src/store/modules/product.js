export default {
    state: {
        product: []
    },
    getters: {
        product: state => {
            return state.product;
        }
    },
    mutations: {
        setProduct(state, payload) {
            state.product = payload;
        }
    },
    actions: {
        getProduct({commit}, payload) {
            commit('setProduct', payload);
        }
    }
};