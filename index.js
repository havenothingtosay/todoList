import Vue from 'vue';
import App from './App.vue';
// import needDo from './needDo.vue';
// import hasDone from './hasDone.vue';

// const todolist = new Vue({
//   el: '#todolist',
//   data: {
//     list: [
//       { content: 'first', iscomplete: false },
//       { content: 'second', iscomplete: false },
//     ],
//     new_todo: '',
//   },
//   methods: {
//     addNewTodo() {
//       this.list.push({ content: this.new_todo, iscomplete: false });
//       this.new_todo = '';
//     },
//     // del:function(x) {
//     //   console.log(x)
//     //   this.list.splice(x,1)
//     // }
//   },
//   components: {
//     needDo,
//     hasDone,
//   },
// });

new Vue({
  el: '#todolist',
  render: h=>h(App)
})
