<template>
  <ol>
    <li v-for='hasdone in prop' v-if='hasdone.iscomplete'>
      {{ hasdone.content }}
    </li>
  </ol>
</template>

<script>
  export default {
    name: 'hasDone',
    props: ['prop'],
  }
</script>
