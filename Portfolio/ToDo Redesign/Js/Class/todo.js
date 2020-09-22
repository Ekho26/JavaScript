class Todo {
    constructor(title){
        this.title = title;
        this.isDone = false;
    }
    switchDone(){
        this.isDone = !this.isDone;
    }
}

export { Todo }