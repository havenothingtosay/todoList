<template>
  <ol>
    <li v-for='(todo,index) in prop' v-if='!todo.iscomplete'>
      <span contenteditable=true>{{ todo.content }}</span>
      <input type="button" value="完成" @click="finish(todo)"/>
      <input type="button" value="保存修改" @click="edit(todo,$event.target)"/>
      <input type="button" value="删除" @click="del(index)"/>
    </li>
  </ol>
</template>

<script>
  export default {
    name: 'need-do',
    props: ['prop'],
    methods: {
      finish: function (x) {
        x.iscomplete = true;
      },
      edit: function (x,target) {
        // console.log(target.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML)
        // console.log(target.previousSibling.previousSibling.innerHTML)
        x.content = target.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
      },
      del: function (x) {
        console.log(x);
        this.prop.splice(x,1);
      }
    }
  }
</script>
