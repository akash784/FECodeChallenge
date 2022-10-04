export default {
    name: 'cardContentHead',
    inject: ['eventBus'],
    methods: {
        addCard() { 
            this.eventBus.$emit('eventbus-open-dialog', {
                name: 'addcard'
            });
        }
    }
}