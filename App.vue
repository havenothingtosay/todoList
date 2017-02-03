<template>
  <div id="todolist">
    <h1>待办事项</h1>
    <need-do :list='list'></need-do>
    <input type="text" v-model="new_todo" @keyup.enter='addNewTodo' placeholder="按确定键添加待办事项">
    <h1>已完成</h1>
    <has-done :list='list'></has-done>
  </div>
</template>

<script>
  import needDo from './needDo.vue';
  import hasDone from './hasDone.vue';
  const list = {
    list: [
      { content: 'first', iscomplete: false },
      { content: 'second', iscomplete: false },
    ]
  };
  export default {
    data() {
      return {
        list: list.list,
        new_todo: '',
      }
    },
    methods: {
      addNewTodo() {
        this.list.push({ content: this.new_todo, iscomplete: false });
        this.new_todo = '';
      },
    },
    components: {
      needDo,
      hasDone,
    },
  }
</script>
