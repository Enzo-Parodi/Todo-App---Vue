app.component('todo-list', {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  template:
  /*html*/
  `<ul className="todo-list">
    <li v-for="(todo, index) in todos" :key="index">
      <div class="list-item-content-wrapper">
        <label :for="index">
          <input type="checkbox" :id="index" v-model="todo.checked" v-on:change="() => toggleTodoChecked(index)">
          {{todo.text}}
        </label>
        <button v-on:click="() => removeTodo(index)" class="todo-remove-button">
        <i class="material-icons">delete</i>
        </button>
      </div>
    </li>
  </ul>
  `,
  data() {
    return {
      checkedTodos: []
    }
  },
  methods: {
    removeTodo(index) {
      this.$emit('remove-todo', index)
    },
    toggleTodoChecked(index) {
      window.localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
})