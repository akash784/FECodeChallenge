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
            showError: false,
            currentCard: {},
            errMsg: ''
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
                this.currentCard = opt.currentCard;
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
            });
            window.localStorage.setItem('cardList', JSON.stringify(listOfCards));
            this.setCardList(listOfCards);
            this.showDialog = false;
        },
        addNewCard(event) {
            if(this.cardNumber.length === 16 && this.cardName && this.cardCVV.length === 3) {
                if(isNaN(this.cardNumber) || isNaN(this.cardCVV)){
                    this.showError = true;
                    this.errMsg = 'Please enter numbers in Card Number and CVV field';
                } else {
                    this.addCard();
                }
            } else {
                this.showError = true;
                this.errMsg = 'Please fill all the fields';
            }
            event.preventDefault();
        },
        cancelCard(){
            var list = JSON.parse(window.localStorage.getItem('cardList'));
            var newList = list.filter( v=> {  return v.id !== this.currentCard.id});
            window.localStorage.setItem('cardList',JSON.stringify(newList));
            this.setCardList(newList);
            this.showDialog = false;
        }
    }
}