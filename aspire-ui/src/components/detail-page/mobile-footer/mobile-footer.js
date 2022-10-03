export default {
    name: 'mobileFooter',
    data() {
        return {
            links: [{
                text: 'Home',
                value: 'home',
                className: 'home',
                isActive: false
            },{
                text: 'Cards',
                value: 'cards',
                className: 'card',
                isActive: true
            },{
                text: 'Payments',
                value: 'payments',
                className: 'payment',
                isActive: false
            },{
                text: 'Credit',
                value: 'credit',
                className: 'credit',
                isActive: false
            },{
                text: 'Settings',
                value: 'settings',
                className: 'setting',
                active: false
            }]
        }
    },
    mounted(){

    }
}