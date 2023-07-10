<script setup>
    import PostCard from './PostCard.vue';
</script>

<template>
    <div class="post-container">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
</template>

<style scoped>
    .post-container{
        widows: 100%;
        display: flex;
        flex-wrap: wrap;
    }
</style>