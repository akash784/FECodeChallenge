import { mapMutations } from "vuex";

export default {
    name: 'cardContentHead',
    methods: {
        ...mapMutations(['setCardList']),
        addCard() {
            var listOfCards = JSON.parse(window.localStorage.getItem('cardList'));
            listOfCards.push({
                id: Math.floor(Math.random() * 1000),
                name: 'Matt Daemon',
                cardNumber: '9423528891233921',
                expiryDate: '17/20',
                cvv: '321',
                isFrozen: false
            })
            window.localStorage.setItem('cardList', JSON.stringify(listOfCards))
            this.setCardList(listOfCards);
        }
    }
}