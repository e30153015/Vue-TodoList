new Vue({
    el: '#app',
    data: {
        todos: [{
            item: '練習JavaScript',
            done: false,
            edit: false
        }, {
            item: '練習Jquery',
            done: false,
            edit: false
        }, {
            item: '練習Vue',
            done: false,
            edit: false
        }],
        newTodo: ''
    },
    methods: {
        addTodo: function (todo) {
            this.todos.push({
                item: todo,
                done: false,
                edit: false
            });
            this.newTodo = ''
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1);
        },
        removeAll: function () {
            this.todos.splice(0, this.todos.length);
        },
        change: function (index) {
            this.todos[index].edit = !this.todos[index].edit
        }
    }
})
