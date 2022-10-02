export default {
    name:'cardLayout',
    props: {
        card: {
            type: Object,
            required: true,
            default: ()=> {
                return {}
            }
        }
    },
    computed: {
        lastFourDigit() {
            return  this.card.cardNumber.slice(-4).split('').join(' ');
        }
    }
}