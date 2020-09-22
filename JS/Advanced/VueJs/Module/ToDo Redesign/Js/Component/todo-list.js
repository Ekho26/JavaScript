import { Todo } from '../Class/todo.js';

Vue.component('todo-list',{
    template: `
    <div class="todo-list">
        <h1>To do:</h1>
        <div class='filters'>
            <label>Show Done:</label>
            <input type='checkbox' v-model='showDone'>
        </div>
        <ul>
            <task 
                v-if='showDone || !todo.isDone'
                v-for='(todo, index) in todos'
                :title='todo.title'
                :is-done='todo.isDone'
                @checked='checkTodo(index)'
                @deleted='deleteTodo(index)'>
            </task>
        </ul>
        <hr>
        <div class="newTask">
            Task:
            <input type="text" v-model='task' @keyup.enter='saveTodo' placeholder='Add new task'>
            <div class="saveTask"><button @click='saveTodo'>Save item</button></div>
        </div>
    </div>
    `,
    data() {
        return{
            todos: [
                new Todo('Something to do')
            ],
            task: '',
            showDone: true
        }
    },
    methods: {
        saveTodo(){
            // adaugam valoarea din task in lista de todo
            this.todos.push(new Todo(this.task));
            // resetam task-ul
            this.task = '';
        },
        checkTodo(index){
            this.todos[index].switchDone();
        },
        deleteTodo(index){
            this.todos.splice(index, 1);
        }
    }
});