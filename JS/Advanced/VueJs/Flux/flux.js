var app = new Vue ({
    el: '#app',
    data: {
        good: false,
        todo: [
            "Stay at home",
            "Be safe",
            "Learn Vue.Js"
        ]
    },
    methods: {
        hour(){
            let now = new Date();
            return now.getHours();
        },
        addNewItem(){
            this.todo.splice(2, 1,'Test arrays');
        }
    }
});