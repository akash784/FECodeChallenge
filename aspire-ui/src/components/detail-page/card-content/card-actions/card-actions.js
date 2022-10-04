import { mapMutations } from "vuex";

export default {
    name: 'cardActions',
    inject: ['eventBus'],
    props: {
        currentCard: {
            type: Object,
            default: ()=> {
                return {};
            }
        }
    },
    data() {
        return {
            actionList: [{
                text: 'Freeze card',
                class: 'freeze',
                value: 'freeze'
            },{
                text: 'Set spend limit',
                class: 'spend-limit',
                value: 'spendLimit'
            },{
                text: 'Add to GPay',
                class: 'gpay',
                value: 'gpay'
            },{
                text: 'Replace card',
                class: 'replace-card',
                value: 'replaceCard'
            },{
                text: 'Cancel card',
                class: 'cancel-card',
                value: 'cancelCard'
            }]
        }
    },
    computed: {
        computedActionList() {
            var list = this.actionList.map( item => {
                if(item.value === 'freeze') {
                    item.text = this.currentCard.isFrozen ? 'Unfreeze card' : 'Freeze card';
                }
                return item;
            });
            return list;
        }
    },
    methods: {
        ...mapMutations(['setCardList']),
        itemAction(val){
            switch (val) {
                case 'freeze':
                    this.freezeCard();
                    break;
                case 'spendLimit':
                    break;
                case 'gpay':
                    break;
                case 'replaceCard':
                    break;
                case 'cancelCard':
                    this.cancelCard();
                    break;
            }
        },
        cancelCard(){
            this.eventBus.$emit('eventbus-open-dialog', {
                name: 'cancelcard',
                currentCard: this.currentCard
            })
        },
        freezeCard() {
            var list = JSON.parse(window.localStorage.getItem('cardList'));
            list.map( v => {
                if(v.id === this.currentCard.id) {
                    v.isFrozen = !v.isFrozen;
                }
            });
            window.localStorage.setItem('cardList',JSON.stringify(list));
            this.setCardList(list);
        }
    }
}