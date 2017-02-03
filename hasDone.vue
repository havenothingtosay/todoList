<template>
  <ol>
    <li v-for='hasdone in list' v-if='hasdone.iscomplete'>
      {{ hasdone.content }}
    </li>
  </ol>
</template>

<script>
  export default {
    name: 'hasDone',
    props: ['list'],
  }
</script>
