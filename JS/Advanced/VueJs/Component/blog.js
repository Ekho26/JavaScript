Vue.component('hello',{
    // templat-ul  (html-ul) componentei
    template: '<h3>{{ text }}</h3>',
    // proprietatile componentei pot fi transimse din exterior
    props: [
        'text'
    ]
});
Vue.component('button-counter', {
    template: '<button @click="click">You clicked me {{ clicks }} times</button>',
    // Datele trebuie returnate dintr-o metoda denumita data (data este o metoda in componente)
    data() {
        return{
            clicks: 0
        }
    },
    methods: {
        click(){
            this.clicks++;
        }
    }
});

var app = new Vue({
    el:'#app',
});