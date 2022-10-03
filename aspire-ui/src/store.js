import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cardList: []
    },
    mutations: {
        setCardList(state, val) {
            state.cardList = val;
        }
    },
    actions: {
        getCardList({ commit }) {
            var data = [{
                name: 'Mark Henry',
                cardNumber: '1234567891232020',
                expiryDate: '12/20',
                cvv: '123'
            },
            {
                name: 'Alex Beals',
                cardNumber: '9423567891233921',
                expiryDate: '7/20',
                cvv: '321'
            },
            {
                name: 'Matt Colsen',
                cardNumber: '3423567254232491',
                expiryDate: '27/20',
                cvv: '541'
            }]
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('setCardList', data)
                    resolve(true)
                }, 1000)
            })
        }
    }
})

export default store;