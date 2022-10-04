import { mapMutations } from "vuex";
export default {
    name: 'dialogCenter',
    inject: ['eventBus'],
    data() {
        return {
            showDialog: false,
            cardNumber: '',
            cardCVV: '',
            cardName: '',
            isConfirm: false,
            showError: false
        }
    },
    mounted() {
        var self = this;
        this.eventBus.$on('eventbus-open-dialog', function(data) {
            self.openDialog(data)
        });
    },
    methods: {
        ...mapMutations(['setCardList']),
        openDialog(opt) {
            this.showDialog = true;
            this.showError = false;
            if(opt.name === 'addcard') {
                this.isConfirm = false
            } else {
                this.isConfirm = true;
            }
        },
        closeDialog() {
            this.showDialog = false;
        },
        addCard() {
            var listOfCards = JSON.parse(window.localStorage.getItem('cardList'));
            listOfCards.push({
                id: Math.floor(Math.random() * 1000),
                name: this.cardName,
                cardNumber: this.cardNumber,
                expiryDate: '18/25',
                cvv: this.cardCVV,
                isFrozen: false
            })
            console.log(listOfCards)
            window.localStorage.setItem('cardList', JSON.stringify(listOfCards))
            this.setCardList(listOfCards);
            this.showDialog = false;
        },
        addNewCard(event) {
            if(this.cardNumber.length === 16 && this.cardName && this.cardCVV.length === 3) {
                this.addCard();
            } else {
                this.showError = true;
            }
            console.log(this.cardNumber.length, this.cardName, this.cardCVV.length)
            event.preventDefault();
        }
    }
}