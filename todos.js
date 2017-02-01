const vm = new Vue({
    el: '#root',
    data() {
        return {
            todos: []
        }
    },
    methods: {
        submitTodo(todo) {
            this.todos.push(todo)
        }
    }
})

