import cardLayout from "../card-layout/card-layout.vue";
import cardActions from "../card-actions/card-actions.vue";
import { mapState } from "vuex";

export default {
    name: 'manageCard',
    components: {
        cardLayout,
        cardActions
    },
    computed: {
        ...mapState(['cardList'])
    },
    data() {
        return {
            selectedIndex: 0
        }
    },
    methods: {
        changeCard(index) {
            this.selectedIndex = index;
        }
    }
}