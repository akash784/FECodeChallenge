import cardContentHead from "./card-content-head/card-content-head.vue";
import navContent from "./nav-content/nav-content.vue";
import { mapActions } from "vuex";

export default {
    name: 'cardContent',
    components: {
        cardContentHead,
        navContent
    },
    data() {
        return {
            navList: [{
                text: 'My debit cards',
                value: 'debit_cards',
                isActive: true
            }, {
                text: 'All company cards',
                value: 'all_cards',
                isActive: false
            }]
        }
    },
    methods: {
        ...mapActions(['getCardList'])
    },
    mounted() {
        this.getCardList()
    }
}