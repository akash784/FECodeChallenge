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
            currentCard: {}
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
            console.log(opt)
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
                this.addCard();
            } else {
                this.showError = true;
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