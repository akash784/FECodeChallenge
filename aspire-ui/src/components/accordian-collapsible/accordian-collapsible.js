export default {
    name: 'accordianCollapsible',
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        }
    }
}