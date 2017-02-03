<template>
  <ol>
    <li v-for='(todo,index) in list' v-if='!todo.iscomplete'>
      <span contenteditable="true">{{ todo.content }}</span>
      <input type="button" value="完成" @click="finish(todo)"/>
      <input type="button" value="保存修改" @click="edit(todo,$event.target)"/>
      <input type="button" value="删除" @click="del(index)"/>
    </li>
  </ol>
</template>

<script>
  export default {
    name: 'need-do',
    props: ['list'],
    methods: {
      finish(x) {
        x.iscomplete = true;
      },
      edit(x,target) {
        // console.log(target.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML)
        // console.log(target.previousSibling.previousSibling.innerHTML)
        x.content = target.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
      },
      del(x) {
        console.log(x);
        this.list.splice(x,1);
      }
    }
  }
</script>
