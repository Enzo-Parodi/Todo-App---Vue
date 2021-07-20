app.component('todo-form', {
  template:
  /*html*/
  `<form @submit.prevent="onSubmit" class="todo-form">
    <label for="todo-text-input">New TODO:</label>
    <input type="text" id="todo-text-input" class="todo-text-input" v-model="todo.text">
    <input type="submit" value="Add" class="todo-add-button">
  </form>
  `,
  data() {
    return {
      todo: {text: '', checked: false}
    }
  },
  methods: {
    onSubmit() {
      if (this.todo.text === '') {
        alert('There is no TODO to submit');
        return
      }

      const newTodo = this.todo;
      this.$emit('todo-submitted', newTodo);
      this.todo = {text: '', checked: false}
    }
  }
})