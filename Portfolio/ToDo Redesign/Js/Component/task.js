Vue.component('task', {
    template: `
        <li :class="{ done: isDone }" class='task'> 
            <div class="title"> {{ title }} </div>
            <div class="controls">
                <div class="check" @click="$emit('checked')">&#x2713;</div>
                <div class="delete" @click="$emit('deleted')">&#x2715;</div>
            </div>
        </li>
    `,
    props: ['title', 'isDone']
});