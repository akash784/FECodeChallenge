export default {
    name: 'cardActions',
    data() {
        return {
            actionList: [{
                text: 'Freeze card',
                class: 'freeze'
            },{
                text: 'Set spend limit',
                class: 'spend-limit'
            },{
                text: 'Add to GPay',
                class: 'gpay'
            },{
                text: 'Replace card',
                class: 'replace-card'
            },{
                text: 'Cancel card',
                class: 'cancel-card'
            }]
        }
    }
}