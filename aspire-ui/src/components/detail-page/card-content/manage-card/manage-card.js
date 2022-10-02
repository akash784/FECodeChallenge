import cardLayout from "../card-layout/card-layout.vue";
import cardActions from "../card-actions/card-actions.vue";

export default {
    name: 'manageCard',
    components: {
        cardLayout,
        cardActions
    },
    data() {
        return {
            selectedIndex: 0,
            cardList: [
                {
                    name:'Mark Henry',
                    cardNumber: '1234567891232020',
                    expiryDate: '12/20',
                    cvv: '123'
                },
                {
                    name:'Alex Beals',
                    cardNumber: '9423567891233921',
                    expiryDate: '7/20',
                    cvv: '321'
                },
                {
                    name:'Matt Colsen',
                    cardNumber: '3423567254232491',
                    expiryDate: '7/20',
                    cvv: '541'
                }
            ]
        }
    },
    methods: {
        changeCard(index) {
            this.selectedIndex = index;
        }
    }
}