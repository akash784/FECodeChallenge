export default {
    name: 'cardActions',
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
    methods: {
        itemAction(val){
            switch (val) {
                case 'freeze':
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

        }
    }
}