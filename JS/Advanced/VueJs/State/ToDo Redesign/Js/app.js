import "https://unpkg.com/vue/dist/vue.js";
import "https://unpkg.com/vuex/dist/vuex.js";
import './Component/task.js';
import './Component/todolist.js';
import store from './Store/store.js'

var app = new Vue({
    el:'#app',
    store
});