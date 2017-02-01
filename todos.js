const vm = new Vue({
    el: '#root',
    data() {
        return {
            todos: [],
            todo: ""
        }
    },
    methods: {
        submitTodo: function(todo) {
            this.todos.push(this.todo)
            this.todo = ""
        },
        removeTodo: function(id) {
            this.todos.splice(id, 1)
        },
        clear: function() {
            this.todo = ""
        }
    }
})

