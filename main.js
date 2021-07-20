const app = Vue.createApp({
  data() {
    return {todos: JSON.parse(window.localStorage.getItem('todos')) || []}
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo)
      window.localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    removeTodo(index) {
      const todosWithoutRemoved = this.todos.filter((el, i) => i != index);
      this.todos = todosWithoutRemoved;
      window.localStorage.setItem('todos', JSON.stringify(this.todos))
    },
  }
})