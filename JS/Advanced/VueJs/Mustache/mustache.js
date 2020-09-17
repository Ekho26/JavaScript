var app = new Vue({
    el: '#app',
    data: {
        message: 'Do you like my mustache?',
        counter: 10,
        myClass: "important"
    },
    methods: {
    },
    computed: {
        reversedMessage(){
            return this.message.split('')
                               .reverse()
                               .join('');
        }
    }
});