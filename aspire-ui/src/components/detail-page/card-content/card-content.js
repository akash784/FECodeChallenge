import cardContentHead from "./card-content-head/card-content-head.vue";
import navContent from "./nav-content/nav-content.vue";
import { mapActions, mapMutations } from "vuex";

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
        ...mapActions(['getCardList']),
        ...mapMutations(['setCardList'])
    },
    mounted() {
        var list = JSON.parse(window.localStorage.getItem('cardList') || '[]');
        if(!list.length){
            this.getCardList().then(res => {
                window.localStorage.setItem('cardList', JSON.stringify(res));
            });
        } else {
            this.setCardList(list);
        }
    }
}