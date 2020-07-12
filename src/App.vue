<template>
  <div>
    <md-toolbar>
      <h2> Keep your to-do's in mind! </h2>
    </md-toolbar>

<!-- Add a To-Do -->

    <md-card>
      <md-card-content>
        <md-field>
          <md-input v-model="currentTodo" class="form-control input-height" @keydown.enter="addTodo()" placeholder="Add a todo"></md-input>
          <md-button class="md-icon-button md-raised" v-on:click.prevent="addTodo">
          <md-icon>add</md-icon>
          </md-button>
        </md-field>
      </md-card-content>  
    </md-card>


<!-- To-Do List -->
      <div class="List">
        <md-list class="todos-list" v-if="showTodos()">
          <md-list-item class="todo-title"> What needs to be done: </md-list-item>
          <md-list-item class="todo-item" v-for="todo in todos" :key="todo.id">
            <input class="completed" type="checkbox" v-model="todo.completed"/>
            <span v-on:click.prevent="edittodo(todo)" v-show="editTodo !== todo.id" :class="{ 'is-complete': todo.completed}">
             {{ todo.label }}
            </span> 
            <input v-model="todo.label" v-show="editTodo == todo.id" v-on:keyup.enter="stopEdit">
            <md-button v-on:click.prevent="removeTodo(todo)">remove</md-button>
          </md-list-item>
        </md-list>
      </div>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: '',
      editTodo: null
    };
  },
  methods: {
    showTodos () {
      return this.todos.length > 0
    },
    addTodo() {
      this.todos.push({id: this.todos.length, label: this.currentTodo, completed: false, editing: false});
        this.currentTodo = '';
    },
    removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    edittodo(todo) {
      this.editTodo = todo.id;
    },
    stopEdit() {
      this.editTodo = null;
    }
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");

.md-toolbar {
  background: #3c3c3c;
  justify-content: center;
  font-family: "Share Tech Mono", monospace;
  color: white;
}
.todo-title {
  text-align: center;
  font-family: "Share Tech Mono", monospace;
  border-bottom: 1.5px solid lightgrey;
}
.todo-item{
  border-top: 0.5px solid lightgrey;
  font-family: "Share Tech Mono", monospace;
}
.List {
  align-items: center;
  max-width: 60%;
  margin: 0 auto;
  border: 0.5px solid dark-grey;
  background: #f0f0f0;
}
.is-complete {
  text-decoration: line-through;
  opacity: 0.5;
}

.md-card {
  max-width: 80%;
  margin: 30px auto;
  background-color: white;
  font-family: "Share Tech Mono", monospace;
}

</style>
