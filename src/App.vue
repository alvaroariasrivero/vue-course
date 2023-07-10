<script setup>
  import PostContainer from './components/PostContainer.vue';
  import CounterOption from './components/CounterOption.vue';
  import CounterComposition from './components/CounterComposition.vue';
</script>

<template>
  <h1>Hi there</h1>
  <CounterOption />
  <CounterComposition />
  <PostContainer />
</template>

<style scoped>
  h1{
    color: blueviolet;
  }
</style>
