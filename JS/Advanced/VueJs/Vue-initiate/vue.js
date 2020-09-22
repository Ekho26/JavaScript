Vue.component(
    'hello',
    {
        'template':'<div>Hello World</div>'
    }
);

var app = new Vue({
    el: '#app', /* elementul pe care il controleaza Vue */
    data: {     /* Datele aplicatiei (model) */
        message: 'Hello Vue!',
        show: true,
        todos: [
            'Learn JavaScript',
            'Learn Vue.js',
            'Learn React',
            'Be free',
        ],
        title: 'This is a welcome message',
    },
    methods: {
        reverse: function(){
            this.message = this.message
                               .split('')
                               .reverse()
                               .join('');
        }
    }
});